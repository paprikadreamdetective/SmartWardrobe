import cv2 
from PIL import Image
from rembg import remove

cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)
photo_count = 0

def remove_background(input_path, output_path):
    input_image = Image.open(input_path)
    output_image = remove(input_image)
    output_image.save(output_path)

while True:
    ret, frame = cap.read()
    if ret:
        cv2.imshow("Frame", frame)
        key = cv2.waitKey(1) & 0xff
        if key == ord("q"):
            break
        elif key == ord("s"):  
            photo_count += 1
            photo_name = f"photo_{photo_count}.jpg"
            cv2.imwrite(photo_name, frame)
            print(f"Foto tomada y guardada como {photo_name}")
            input_path = photo_name
            output_path = f"output_{photo_count}.png"
            remove_background(photo_name, output_path)
cap.release()
cv2.destroyAllWindows()