from PIL import Image
import numpy as np

def extract_logo():
    img = Image.open('public/logo_full.jpeg').convert('RGBA')
    data = np.array(img)

    r, g, b, a = data.T
    luminance = (r * 0.299 + g * 0.587 + b * 0.114)

    # Create mask for white pixels
    mask = luminance > 220

    # Apply alpha based on luminance for smooth edges
    alpha = np.where(mask.T, luminance.T, 0)
    data[..., 3] = alpha

    # Force white RGB
    data[..., 0] = 255
    data[..., 1] = 255
    data[..., 2] = 255

    # Find the bounding box of non-transparent pixels
    # We only want the top half of the image where the tree is to avoid picking up text
    height, width = alpha.shape
    top_half = alpha[:int(height*0.55), :]

    non_empty_columns = np.where(top_half.max(axis=0) > 0)[0]
    non_empty_rows = np.where(top_half.max(axis=1) > 0)[0]

    if len(non_empty_columns) > 0 and len(non_empty_rows) > 0:
        left = non_empty_columns.min()
        right = non_empty_columns.max()
        top = non_empty_rows.min()
        bottom = non_empty_rows.max()

        # Crop exactly to the tree bounds
        out_img = Image.fromarray(data)
        tree_crop = out_img.crop((left, top, right, bottom))
        tree_crop.save('public/logo_tree_only.png')
        print(f"Cropped precisely to bounds: {left}, {top}, {right}, {bottom}")
    else:
        print("Could not find tree bounds.")

extract_logo()
