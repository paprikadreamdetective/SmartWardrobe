from flask import Flask, render_template, request, redirect, jsonify, url_for, session
from model import ClothesModel

app = Flask(__name__)
#app.secret_key = '12345'
#usuarios = {'usuario1': 'contrasena1', 'usuario2': 'contrasena2'}
'''
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
'''

db_config = {
    'host': '192.168.100.136',
    'user': 'soulg',
    'password': '11110000',
    'database': 'closet',
    'port': 3306
}

clothes_model = ClothesModel(db_config)

@app.route('/')
def index():
    clothes = clothes_model.get_all_clothes()
    return render_template('index.html', clothes=clothes)

@app.route('/login', methods=['POST'])
def login():
    usuario = request.form['campoDatos1']
    password = request.form['campoDatos2']
    print(f'c1: {usuario}, c2: {password}')
    if usuario == "admin" and password == "12345":
        return ( render_template( 'main_menu.html' ) )
    else:
        return ('Credenciales incorrectas. <a href="/">Volver al inicio de sesión</a>')

@app.route('/logout')
def logout():
    session.pop('usuario', None)
    return redirect(url_for('index'))

@app.route('/add_form_page')
def add_form_page():
    return render_template('add_form_page.html')

@app.route('/add_form', methods=['POST'])
def agregar_prenda():
    nombre = request.form['nombre']
    tipo = request.form['tipo']
    color = request.form['color']
    talla = request.form['talla']
    cantidad = request.form['cantidad']

    clothes_model.add_clothes(nombre, tipo, color, talla, cantidad)
    return redirect(url_for('index'))

@app.route('/edit_form_page/<int:cloth_id>')
def edit_form_page(cloth_id):
    cloth = clothes_model.get_cloth_by_id(cloth_id)
    return render_template('edit_form_page.html', cloth=cloth)

@app.route('/edit_form/<int:cloth_id>', methods=['POST'])
def editar_prenda(cloth_id):
    nombre = request.form['nombre']
    tipo = request.form['tipo']
    color = request.form['color']
    talla = request.form['talla']
    cantidad = request.form['cantidad']

    clothes_model.update_cloth(cloth_id, nombre, tipo, color, talla, cantidad)
    return redirect(url_for('index'))

@app.route('/delete/<int:cloth_id>')
def eliminar_prenda(cloth_id):
    clothes_model.delete_cloth(cloth_id)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
