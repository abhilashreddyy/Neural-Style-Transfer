from torchvision import models
import copy
from collections import namedtuple
import torch

class Vgg16(torch.nn.Module):
    """Only those layers are exposed which have already proven to work nicely."""
    def __init__(self, requires_grad=False, show_progress=False):
        super().__init__()
        self.vgg_pretrained_features = models.vgg16(pretrained=True, progress=show_progress).features
        self.layer_names = ['relu1_1', 'relu2_1', 'relu3_1', 'relu4_1', "relu5_3"]
        self.content_feature_maps_index = 1  # relu2_2
        self.style_feature_maps_indices = list(range(len(self.layer_names)))  # all layers used for style representation

        self.slice1 = torch.nn.Sequential()
        self.slice2 = torch.nn.Sequential()
        self.slice3 = torch.nn.Sequential()
        self.slice4 = torch.nn.Sequential()
        self.slice5 = torch.nn.Sequential()

        for x in range(2):
            self.slice1.add_module(str(x), copy.copy(self.vgg_pretrained_features[x]))
        for x in range(2, 7):
            self.slice2.add_module(str(x), copy.copy(self.vgg_pretrained_features[x]))
        for x in range(7, 12):
            self.slice3.add_module(str(x), copy.copy(self.vgg_pretrained_features[x]))
        for x in range(12, 19):
            self.slice4.add_module(str(x), copy.copy(self.vgg_pretrained_features[x]))
        for x in range(19, 26):
            self.slice5.add_module(str(x), copy.copy(self.vgg_pretrained_features[x]))

        if not requires_grad:
            for param in self.vgg_pretrained_features.parameters():#self.parameters():
                param.requires_grad = False
                

    def forward(self, x):
        x = self.slice1(x)
        relu1_2 = x
        x = self.slice2(x)
        relu2_2 = x
        x = self.slice3(x)
        relu3_3 = x
        x = self.slice4(x)
        relu4_3 = x
        x = self.slice5(x)
        relu5_3 = x
        vgg_outputs = namedtuple("VggOutputs", self.layer_names)
        out = vgg_outputs(relu1_2, relu2_2, relu3_3, relu4_3, relu5_3)

        return out        