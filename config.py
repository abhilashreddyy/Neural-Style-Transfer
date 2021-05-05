MODEL = "VGG19"

CONTENT_IMAGE_PTH = "./input/content-images/green_bridge.jpg"
STYLE_IMAGE_PTH = "./input/style-images/vg_la_cafe.jpg"
OUTPUT_PATH = "./output"

RESHAPE_CONTENT_IMAGE = 800
RESHAPE_STYLE_IMAGE = -1

EPOCS = 2500
LEARNING_RATE = 1e1

CONTENT_WEIGHT = 2e6
STYLE_WEIGHT = 5e3
TV_WEIGHT = 50

SAVE_FREQ = 100