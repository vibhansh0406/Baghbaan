from PIL import Image
import numpy as np

def extract_logo():
    # Open the image
    img = Image.open('public/logo_full.jpeg').convert('RGBA')
    data = np.array(img)

    # The background is a greenish color, the logo is white.
    # We want to keep the white parts and make everything else transparent.

    # Calculate luminance/brightness
    r, g, b, a = data.T
    luminance = (r * 0.299 + g * 0.587 + b * 0.114)

    # Create a mask where pixels are white/bright enough
    # The logo is pure white, so high threshold
    mask = luminance > 200

    # Set alpha channel to 0 for non-white pixels
    data[..., 3] = np.where(mask.T, 255, 0)

    # Create the transparent image
    out_img = Image.fromarray(data)

    # Crop to just the tree part for the favicon
    # The image is 1080x1302. Tree is roughly in the top half.
    # We'll just save the whole thing transparent first
    out_img.save('public/logo_transparent.png')

    # Crop just the tree (approximate coordinates based on visual inspection)
    # x1, y1, x2, y2
    tree_crop = out_img.crop((200, 300, 880, 600))
    tree_crop.save('public/favicon.png')

extract_logo()
