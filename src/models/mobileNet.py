

from torchvision.models.mobilenet import mobilenet_v2

import copy
from collections import namedtuple
import torch
import torch.nn as nn



class MobileNet(torch.nn.Module):
    """Only those layers are exposed which have already proven to work nicely."""
    def __init__(self, requires_grad=False, show_progress=False):
        super().__init__()
        self.mobilenet_pretrained_features = mobilenet_v2(pretrained=True, progress=True).features
        self.layer_names = ['layer_1', 'layer_4', 'layer_7', 'layer_10', "layer_14"]
        self.content_feature_maps_index = 1  # relu2_2
        self.style_feature_maps_indices = list(range(len(self.layer_names)))  # all layers used for style representation

        self.slice1 = torch.nn.Sequential()
        self.slice2 = torch.nn.Sequential()
        self.slice3 = torch.nn.Sequential()
        self.slice4 = torch.nn.Sequential()
        self.slice5 = torch.nn.Sequential()


        for x in range(1):
            self.slice1.add_module(str(x), copy.copy(self.mobilenet_pretrained_features[x]))
        for x in range(1, 4):
            self.slice2.add_module(str(x), copy.copy(self.mobilenet_pretrained_features[x]))
        for x in range(4, 7):
            self.slice3.add_module(str(x), copy.copy(self.mobilenet_pretrained_features[x]))
        for x in range(7, 10):
            self.slice4.add_module(str(x), copy.copy(self.mobilenet_pretrained_features[x]))
        for x in range(10, 14):
            self.slice5.add_module(str(x), copy.copy(self.mobilenet_pretrained_features[x]))


        if not requires_grad:
            for param in self.mobilenet_pretrained_features.parameters():#self.parameters():
                param.requires_grad = False

    def forward(self, x):
        x = self.slice1(x)
        layer_1 = x
        x = self.slice2(x)
        layer_4 = x
        x = self.slice3(x)
        layer_7 = x
        x = self.slice4(x)
        layer_10 = x
        x = self.slice5(x)
        layer_14 = x
        mobilenet_outputs = namedtuple("MobilenetOutputs", self.layer_names)
        out = mobilenet_outputs(layer_1, layer_4, layer_7, layer_10, layer_14)

        return out        

