
import tensorflow as tf
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.resnet50 import preprocess_input, decode_predictions
import numpy as np
import os

def cargar_modelo():
    # Cargar el modelo preentrenado ResNet50
    model = tf.keras.applications.ResNet50(weights='imagenet')

    #model = tf.keras.datasets.fashion_mnist
    return model

def procesar_imagen(ruta_imagen):
    # Cargar y preprocesar la imagen
    img = image.load_img(ruta_imagen, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)
    return img_array

def predecir_clase(modelo, img_array):
    # Hacer la predicción y decodificarla
    prediccion = modelo.predict(img_array)
    etiqueta = decode_predictions(prediccion, top=1)[0][0]
    return etiqueta

def claisificar_clima(etiqueta):
    # Clasificar el tipo de clima basándonos en la clase de la prenda
    prendas_calurosas = ['bathing_cap', 'bikini', 'lab_coat', 'maillot', 'miniskirt', 'sarong', 'umbrella']
    prendas_frias = ['scarf', 'ski_mask', 'wool', 'velvet']
    prendas_lluviosas = ['rain_barrel', 'umbrella']

    clase_prenda = etiqueta[1]

    if clase_prenda in prendas_calurosas:
        return 'Caluroso'
    elif clase_prenda in prendas_frias:
        return 'Frío'
    elif clase_prenda in prendas_lluviosas:
        return 'Lluvioso'
    else:
        return 'No clasificado'

if __name__ == "__main__":
    # Directorio que contiene las imágenes de las prendas
    directorio_prendas = "fit"

    # Cargar el modelo preentrenado
    modelo_resnet50 = cargar_modelo()

    # Listar archivos en el directorio de prendas
    archivos = os.listdir(directorio_prendas)
    cnt = 0
    prendas = []
    for archivo in archivos:
        # Obtener la ruta completa de la imagen
        ruta_imagen = os.path.join(directorio_prendas, archivo)

        # Procesar la imagen
        img_array = procesar_imagen(ruta_imagen)

        # Realizar la predicción
        etiqueta = predecir_clase(modelo_resnet50, img_array)
        prendas.append(etiqueta)
        # Mostrar los resultados
        print(f"Imagen: {archivo}, Clase: {etiqueta[1]}, Confianza: {etiqueta[2]:.2%}")
        cnt += 1

    print(prendas)
    tipos_prendas = set()
    for prenda in prendas:
        tipos_prendas.add(prenda[1])
    #tipo_prendas = [prenda[1] for prenda in prendas]
    print(tipos_prendas)
