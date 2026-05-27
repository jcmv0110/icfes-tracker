#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

def make_icon(size, filename):
    img = Image.new('RGB', (size, size), color='#0d0d0f')
    draw = ImageDraw.Draw(img)
    
    # Background rounded rect feel - just solid dark
    # Draw "IT" text approximation with shapes
    cx, cy = size // 2, size // 2
    
    # Green accent circle
    r = int(size * 0.38)
    draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill='#00e5a0')
    
    # Inner dark circle
    r2 = int(size * 0.28)
    draw.ellipse([cx-r2, cy-r2, cx+r2, cy+r2], fill='#0d0d0f')
    
    # Small dot center
    r3 = int(size * 0.08)
    draw.ellipse([cx-r3, cy-r3, cx+r3, cy+r3], fill='#00e5a0')
    
    img.save(filename, 'PNG')
    print(f"Created {filename} ({size}x{size})")

make_icon(192, 'icon-192.png')
make_icon(512, 'icon-512.png')
print("Icons created!")
