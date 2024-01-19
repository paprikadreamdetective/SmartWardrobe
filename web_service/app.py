from flask import Flask, render_template, request, jsonify, url_for, session
import pymysql

app = Flask(__name__)
app.secret_key = '12345'
usuarios = {'usuario1': 'contrasena1', 'usuario2': 'contrasena2'}

# Configuración de la base de datos
'''
db = pymysql.connect(
        host = '192.168.100.136',
        user = 'soulg',
        password = '11110000',
        database = 'closet',
        port = 3306
    )
cursor = db.cursor()
'''
cnt = 0
db_config = {
    'host': '192.168.100.136',
    'user': 'soulg',
    'password': '11110000',
    'database': 'closet',
    'port': 3306
}

def connect_db():
    return pymysql.connect(**db_config)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/main_menu')
def main_menu():
    return (render_template('main_menu.html'))

@app.route('/add_form_page')
def add_form_page():
    return (render_template('add_form_page.html'))

@app.route('/login', methods=['POST'])
def login():
    usuario = request.form['campoDatos1']
    password = request.form['campoDatos2']
    print(f'c1: {usuario}, c2: {password}')
    if usuario == "admin" and password == "12345":
        return (main_menu())
    else:
        return ('Credenciales incorrectas. <a href="/">Volver al inicio de sesión</a>')

@app.route('/logout')
def logout():
    session.pop('usuario', None)
    return redirect(url_for('index'))

@app.route('/category', methods=['POST'])
def category():
    global cnt
    data = request.get_json()
    category = data['category']
    print(f'Se seleccionó la categoría: {category}')
    # Aquí puedes realizar acciones adicionales según la categoría seleccionada
    cnt += 1
    return '', 204

@app.route('/get_count')
def get_count():
    global cnt
    return jsonify({'count': cnt})

@app.route('/add_form', methods=['POST'])
def agregar_prenda():
    nombre = request.form['nombre']
    tipo = request.form['tipo']
    color = request.form['color']
    talla = request.form['talla']
    cantidad = request.form['cantidad']

    # Insertar datos en la base de datos
    sql = "INSERT INTO clothes (name, type, color, size, amount) VALUES (%s, %s, %s, %s, %s)"
    #cursor.execute(sql, (nombre, tipo, color, talla, cantidad))
    #db.commit()
    try:
        with connect_db() as db, db.cursor() as cursor:
            cursor.execute(sql, (nombre, tipo, color, talla, cantidad))
            db.commit()
    except Exception as e:
        # Manejar la excepción adecuadamente, por ejemplo, imprimir un mensaje de error
        print(f"Error al agregar prenda: {e}")
        #return render_template('error.html', mensaje='Error al agregar prenda')
    return render_template('exito.html', nombre=nombre)

if __name__ == '__main__':
    app.run(debug=True)
