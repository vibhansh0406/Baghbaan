from PIL import Image
import numpy as np

def extract_logo():
    img = Image.open('public/logo_full.jpeg').convert('RGBA')
    data = np.array(img)

    r, g, b, a = data.T
    luminance = (r * 0.299 + g * 0.587 + b * 0.114)

    mask = luminance > 220
    alpha = np.where(mask.T, luminance.T, 0)
    data[..., 3] = alpha

    data[..., 0] = 255
    data[..., 1] = 255
    data[..., 2] = 255

    # The original image is 1080x1302.
    # The tree is located purely in the top ~35%.
    # We will hard-erase EVERYTHING below Y:400 to absolutely guarantee
    # no "A UNIT OF ZW GROUP" or "Bagh Baan" text is picked up.
    data[400:, :, 3] = 0

    # Now find the bounding box
    height, width, _ = data.shape
    alpha_channel = data[..., 3]

    non_empty_columns = np.where(alpha_channel.max(axis=0) > 0)[0]
    non_empty_rows = np.where(alpha_channel.max(axis=1) > 0)[0]

    if len(non_empty_columns) > 0 and len(non_empty_rows) > 0:
        left = non_empty_columns.min()
        right = non_empty_columns.max()
        top = non_empty_rows.min()
        bottom = non_empty_rows.max()

        out_img = Image.fromarray(data)
        tree_crop = out_img.crop((left, top, right, bottom))
        tree_crop.save('public/logo_tree_only.png')
        print(f"Cropped precisely to strictly tree bounds: {left}, {top}, {right}, {bottom}")

extract_logo()
