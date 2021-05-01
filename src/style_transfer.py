
import torch


def get_target_content_representation(model, content_img):
    content_img_set_of_feature_maps = model(content_img)
    target_content_representation = content_img_set_of_feature_maps[model.content_feature_maps_index].squeeze(axis=0)
    return target_content_representation



def get_target_style_representation(model, style_img):
    style_img_set_of_feature_maps = model(style_img)
    target_style_representation = [gram_matrix(x) for cnt, x in enumerate(style_img_set_of_feature_maps)]
    return target_style_representation


def gram_matrix(filter, should_normalize=True):
    (b, ch, h, w) = filter.shape
    flattened_filter = torch.reshape(filter.squeeze(0),(ch,-1))
    flattened_filter_T = flattened_filter.T
    gram_matrix = torch.matmul(flattened_filter, flattened_filter_T)

    if should_normalize:
        gram_matrix /= ch * h * w

    return gram_matrix.unsqueeze(0)

def total_variation(y):
    return torch.sum(torch.abs(y[:, :, :, :-1] - y[:, :, :, 1:])) + \
           torch.sum(torch.abs(y[:, :, :-1, :] - y[:, :, 1:, :]))

def build_loss(neural_net, optimizing_img, target_content_representation, target_style_representation, content_feature_maps_index, style_feature_maps_indices, config, iteration):
    target_content_representation = target_content_representation
    target_style_representation = target_style_representation
    print("target_maps len : ",len(target_style_representation))
    current_set_of_feature_maps = neural_net(optimizing_img)

    current_content_representation = current_set_of_feature_maps[content_feature_maps_index].squeeze(axis=0)
    content_loss = torch.nn.MSELoss(reduction='mean')(target_content_representation, current_content_representation)

    style_loss = 0.0
    current_style_representation = [gram_matrix(x) for cnt, x in enumerate(current_set_of_feature_maps) if cnt in style_feature_maps_indices]
    if iteration < 2500:
      style_weights = [0.6, 1, 1, 1,0.6,0]
    else:
      style_weights = [0.6, 1, 1, 1,0.6,0]#[1.2, 1, 1, 0.9,0]#[0.1, 0.3, 0.5, 1 ]


    for gram_gt, gram_hat, styl_wt in zip(target_style_representation, current_style_representation, style_weights):
        style_loss += styl_wt * torch.nn.MSELoss(reduction='sum')(gram_gt[0], gram_hat[0])
    # style_loss /= len(target_style_representation)
    style_loss /= sum(style_weights)


    tv_loss = total_variation(optimizing_img)

    total_loss = config.CONTENT_WEIGHT * content_loss + config.STYLE_WEIGHT * style_loss + config.TV_WEIGHT * tv_loss

    # print(total_loss.shape, content_loss.shape, style_loss.shape, tv_loss.shape)
    # print(total_loss, content_loss, style_loss, tv_loss)

    return total_loss, content_loss, style_loss, tv_loss




def make_tuning_step(model, optimizer, target_content_representation, target_style_representation, config):
    # Builds function that performs a step in the tuning loop
    style_feature_maps_indices = model.style_feature_maps_indices
    content_feature_maps_index = model.content_feature_maps_index
    def tuning_step(optimizing_img, iteration):
        total_loss, content_loss, style_loss, tv_loss = build_loss(model, optimizing_img, target_content_representation, target_style_representation, content_feature_maps_index, style_feature_maps_indices, config, iteration)
        # Computes gradients
        total_loss.backward()
        # Updates parameters and zeroes gradients
        optimizer.step()
        optimizer.zero_grad()
        return total_loss, content_loss, style_loss, tv_loss

    # Returns the function that will be called inside the tuning loop
    return tuning_step