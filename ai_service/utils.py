import cv2

def blur_faces(image_path: str, out_path: str) -> str:
    img = cv2.imread(image_path)
    if img is None:
        return image_path
    face_cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
    )
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, 1.3, 5)
    for (x, y, w, h) in faces:
        roi = img[y:y+h, x:x+w]
        roi = cv2.GaussianBlur(roi, (31, 31), 0)
        img[y:y+h, x:x+w] = roi
    cv2.imwrite(out_path, img)
    return out_path
