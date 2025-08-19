import os
import cv2
from typing import Dict

def analyze_image(file_path: str) -> Dict:
    """
    Tiny, fast 'AI' stub for hackathon demo:
    - reads image size
    - flags 'size' if width > 1200 or height > 800
    - flags 'placement' randomly by simple heuristic (portrait images are 'ok')
    - content/structural simple heuristics just to demo UI
    """
    img = cv2.imread(file_path)
    if img is None:
        # if OpenCV can't read, return neutral
        return dict(size=False, placement=False, content=False, structural=False, confidence=0.75)
    h, w = img.shape[:2]

    size_flag = (w > 1200 or h > 800)
    placement_flag = (w >= h and w > 720)  # landscape & big
    content_flag = (w * h > 1_000_000)     # very large area
    structural_flag = (h > 1000)           # tall image => pretend risky

    score = sum([size_flag, placement_flag, content_flag, structural_flag]) / 4.0
    confidence = 0.6 + 0.4 * score

    return {
        "size": bool(size_flag),
        "placement": bool(placement_flag),
        "content": bool(content_flag),
        "structural": bool(structural_flag),
        "confidence": float(round(confidence, 2))
    }
