from PIL import Image
import numpy as np

def extract_logo():
    img = Image.open('public/logo_full.jpeg').convert('RGBA')
    data = np.array(img)

    r, g, b, a = data.T
    luminance = (r * 0.299 + g * 0.587 + b * 0.114)

    # Very tight threshold for pure white
    mask = luminance > 220

    # Instead of hard alpha, we use luminance to create a smooth alpha mask
    # This prevents jagged edges
    alpha = np.where(mask.T, luminance.T, 0)
    data[..., 3] = alpha

    # Force all kept pixels to be pure white
    data[..., 0] = 255
    data[..., 1] = 255
    data[..., 2] = 255

    out_img = Image.fromarray(data)

    # We only want the tree, not the text (we rebuilt the text in HTML/CSS)
    # The original image is 1080x1302
    # Tree is roughly between Y:280 and Y:500, X:260 and X:820
    tree_crop = out_img.crop((200, 250, 880, 520))
    tree_crop.save('public/logo_tree_only.png')

extract_logo()
