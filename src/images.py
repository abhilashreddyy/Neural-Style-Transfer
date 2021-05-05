from torchvision import transforms
import cv2 as cv
import matplotlib.pyplot as plt
import numpy as np
import torch
import os

IMAGENET_MEAN_255 = [123.675, 116.28, 103.53]
IMAGENET_STD_NEUTRAL = [1, 1, 1]



def get_new_shape(img, new_height):
    current_height, current_width = img.shape[0], img.shape[1]
    new_width = int(current_width * (new_height/current_height))
    return new_width, new_height


def read_and_resize(img_path, new_height = None, plot = False):
    #change BGR to RGB format
    img = cv.imread(img_path)[:, :, ::-1]

    if new_height > 0 and new_height != None:
        new_shape = get_new_shape(img, new_height)
        img = cv.resize(img, new_shape)

    if plot:
        plt.imshow(img)
        plt.show()

    img = img.astype(np.float32)    
    return img


def prepare_img(img, device):

    #changes the shape from channels X height X width to height X width X channels
    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Normalize(mean=IMAGENET_MEAN_255, std=IMAGENET_STD_NEUTRAL)
    ])
    img = transform(img).to(device).unsqueeze(0)

    return img


def init_guassian_image(shape, device):
    gaussian_noise_img = np.random.normal(loc=0, scale=90., size=shape).astype(np.float32)
    gaussian_noise_img = torch.from_numpy(gaussian_noise_img).float().to(device)
    return gaussian_noise_img

def get_outfile_name(config, num_of_iterations):
    outfile_name = os.path.basename(config.CONTENT_IMAGE_PTH).split(".")[0] + "_" + os.path.basename(config.STYLE_IMAGE_PTH).split(".")[0] \
        +"_"+str(num_of_iterations) + ".jpg"
    return outfile_name


def save_and_maybe_display(optimizing_img, config, num_of_iterations, should_display=False):

    out_img = optimizing_img.squeeze(axis=0).to('cpu').detach().numpy()
    out_img = np.moveaxis(out_img, 0, 2)  # swap channel from 1st to 3rd position: ch, _, _ -> _, _, chr


    if config.SAVE_FREQ > 0 and num_of_iterations % config.SAVE_FREQ == 0:
        out_img_name = get_outfile_name(config, num_of_iterations)
        dump_img = np.copy(out_img)
        dump_img += np.array(IMAGENET_MEAN_255).reshape((1, 1, 3))
        dump_img = np.clip(dump_img, 0, 255).astype('uint8')
        cv.imwrite(os.path.join(config.OUTPUT_PATH, out_img_name), dump_img[:, :, ::-1])

    if should_display:
        plt.imshow(np.uint8(get_uint8_range(out_img)))
        plt.show()


def get_uint8_range(x):
    if isinstance(x, np.ndarray):
        x -= np.min(x)
        x /= np.max(x)
        x *= 255
        return x
    else:
        raise ValueError(f'Expected numpy array got {type(x)}')