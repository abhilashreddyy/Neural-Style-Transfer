from types import prepare_class
from src import images
import config
import torch
from torch.autograd import Variable
from src.models.VGG16 import Vgg16
from src.models.VGG19 import Vgg19
# from src.models.mobileNet import MobileNet
from src.style_transfer import get_target_content_representation, get_target_style_representation, make_tuning_step
from torch.optim import Adam


def neural_style_transfer(config):
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

    content_img = images.read_and_resize(config.CONTENT_IMAGE_PTH, plot=False)
    content_img = images.prepare_img(content_img, device)

    style_img = images.read_and_resize(config.STYLE_IMAGE_PTH, new_height = 800, plot=False)
    style_img = images.prepare_img(style_img, device)

    input_img = images.init_guassian_image(content_img.shape, device)
    input_img = Variable(input_img, requires_grad=True)

    model = Vgg16(requires_grad=False, show_progress=True)
    model = Vgg19(requires_grad=False, show_progress=True)
    # model = MobileNet(requires_grad=False, show_progress=True)
    model = model.to(device).eval()

    target_content_representation = get_target_content_representation(model, content_img)
    target_style_representation = get_target_style_representation(model, style_img)

    optimizer = Adam((input_img,), lr=config.LEARNING_RATE)

    tuning_step = make_tuning_step(model, optimizer, target_content_representation, target_style_representation, config)


    for cnt in range(config.EPOCS):
        total_loss, content_loss, style_loss, tv_loss = tuning_step(input_img, cnt)
        with torch.no_grad():
            print(f'Adam | iteration: {cnt:03}, total loss={total_loss.item():12.4f}, content_loss={config.CONTENT_WEIGHT * content_loss.item():12.4f}, style loss={config.STYLE_WEIGHT * style_loss.item():12.4f}, tv loss={config.TV_WEIGHT * tv_loss.item():12.4f}')
            images.save_and_maybe_display(input_img, config, cnt, 1000, should_display=False)




if __name__ == "__main__":
    neural_style_transfer(config)
    # model = MobileNet(requires_grad=False, show_progress=True)
    # print(model.mobilenet_pretrained_features)
        