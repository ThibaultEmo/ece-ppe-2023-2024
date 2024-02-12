import os
import random
from PIL import Image, ImageDraw

def generate_image(filename):
    # Generate your image here
    width, height = 200, 200
    img = Image.new('RGB', (width, height), color=(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)))

    # Draw some random shapes or patterns on the image
    draw = ImageDraw.Draw(img)
    for _ in range(100000):
        shape = random.choice(['rectangle', 'circle', 'ellipse', 'line'])
        if shape == 'rectangle':
            x0, y0 = random.randint(0, width), random.randint(0, height)
            x1, y1 = random.randint(x0, width), random.randint(y0, height)
            draw.rectangle([x0, y0, x1, y1], fill=(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)))
        elif shape == 'circle':
            x0, y0 = random.randint(0, width), random.randint(0, height)
            radius = random.randint(10, 50)
            draw.ellipse([x0 - radius, y0 - radius, x0 + radius, y0 + radius], fill=(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)))
        elif shape == 'ellipse':
            x0, y0 = random.randint(0, width), random.randint(0, height)
            x1, y1 = random.randint(x0, width), random.randint(y0, height)
            draw.ellipse([x0, y0, x1, y1], fill=(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)))
        elif shape == 'line':
            x0, y0 = random.randint(0, width), random.randint(0, height)
            x1, y1 = random.randint(0, width), random.randint(0, height)
            draw.line([x0, y0, x1, y1], fill=(random.randint(0, 255), random.randint(0, 255), random.randint(0, 255)), width=random.randint(1, 5))

    # Get the absolute path to the public folder
    public_folder_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '../..', 'public'))

    # Specify the absolute path to save the image within the public folder
    image_path = os.path.join(public_folder_path, filename)

    # Save the image
    img.save(image_path)

generate_image("generated_image.jpg")
