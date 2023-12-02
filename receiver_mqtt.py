from paho.mqtt import client as mqtt_client
import base64
import json
from datetime import datetime

broker = 'broker.hivemq.com'
port = 1883
topic_sub = "image"
client_id = 'clientID'

def connect_mqtt():
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            print("Successfully connected to MQTT broker")
        else:
            print("Failed to connect, return code %d", rc)

    client = mqtt_client.Client(client_id)
    client.on_connect = on_connect
    client.username_pw_set("username","password")
    client.connect(broker, port)
    return client

def subscribe(client: mqtt_client):
    def on_message(client, userdata, msg):

        image_data = msg.payload.decode()
        msg = str(image_data)
        img = msg.encode('ascii')

        now = datetime.now()
        filename = now.strftime("%m%d%Y-%H%M%S.jpg")
        f = open("./"+filename, 'wb')
        final_img = base64.b64decode(img)
        f.write(final_img)
        f.close()

        # y = json.loads(msg.payload.decode())

        # print(msg.payload.decode())
        # category = y["category"]
        # image_data = y["image"]

        # msg = str(image_data)
        # img = msg.encode('ascii')
        # now = datetime.now()  # current date and time
        # filename = now.strftime("%m%d%Y-%H:%M:%S.jpg")
        # f = open("./"+category+"/"+filename, 'wb')
        # final_img = base64.b64decode(img)

        print(final_img)
        #
        # f.write(final_img)
        # f.close()
    client.subscribe(topic_sub)
    client.on_message = on_message

def main():
    client = connect_mqtt()
    subscribe(client)
    client.loop_forever()

if __name__ == '__main__':
    main()
