import time
import base64
from paho.mqtt import client as mqtt_client

broker = 'broker.hivemq.com'
port = 1883
topic = "image"
client_id = 'clientID1'

def connect_mqtt():
    def on_connect(client, userdata, flags, rc):
        if rc == 0:
            #print("Successfully connected to MQTT broker")
            print("Se ha establecido la conexion con el servidor")
        else:
            print("Ha fallado la conexion %d", rc)

    client = mqtt_client.Client(client_id)
    client.on_connect = on_connect
    client.connect(broker, port)
    return client

def publish(client):
    #with open("./test.jpg",'rb') as file:
    with open("./falda.jpg",'rb') as file:
        filecontent = file.read()
        base64_content = base64.b64encode(filecontent)
        #print(byteArr)
        result = client.publish(topic,base64_content)
        client.publish(topic, )
    msg_status = result[0]
    if msg_status == 0:
        print(f"message sent to topic {topic}")
    else:
        print(f"Failed to send message to topic {topic}")

def main():
    client = connect_mqtt()
    client.loop_start()
    publish(client)
    time.sleep(5)
    client.loop_stop()


if __name__ == '__main__':
    main()
