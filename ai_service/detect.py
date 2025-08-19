import cv2
import json
import sys

def quick_detect(image_path: str):
    img = cv2.imread(image_path)
    if img is None:
        return {"ok": False, "reason": "cannot read image"}
    h, w = img.shape[:2]
    return {
        "ok": True,
        "w": int(w), "h": int(h),
        "heuristics": {
            "big": bool(w > 1200 or h > 800),
            "landscape": bool(w >= h)
        }
    }

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"ok": False, "reason": "usage: python detect.py path"}))
        sys.exit(1)
    print(json.dumps(quick_detect(sys.argv[1])))
