import pymysql

class ClothesModel:
    def __init__(self, db_config):
        self.db_config = db_config

    def connect_db(self):
        return ( pymysql.connect( **self.db_config ) )

    def get_all_clothes(self):
        sql = "SELECT * FROM clothes"
        with self.connect_db() as db, db.cursor() as cursor:
            cursor.execute(sql)
            return ( cursor.fetchall() )

    def add_clothes(self, nombre, tipo, color, talla, cantidad):
        sql = "INSERT INTO clothes (name, type, color, size, amount) VALUES (%s, %s, %s, %s, %s)"
        try:
            with self.connect_db() as db, db.cursor() as cursor:
                cursor.execute(sql, (nombre, tipo, color, talla, cantidad))
                db.commit()
        except Exception as e:
            print(f"Error al agregar prenda: {e}")

    def get_cloth_by_id(self, cloth_id):
        sql = "SELECT * FROM clothes WHERE id = %s"
        with self.connect_db() as db, db.cursor() as cursor:
            cursor.execute(sql, (cloth_id,))
            return ( cursor.fetchone() )

    def update_cloth(self, cloth_id, nombre, tipo, color, talla, cantidad):
        sql = "UPDATE clothes SET name=%s, type=%s, color=%s, size=%s, amount=%s WHERE id=%s"
        with self.connect_db() as db, db.cursor() as cursor:
            cursor.execute(sql, (nombre, tipo, color, talla, cantidad, cloth_id))
            db.commit()

    def delete_cloth(self, cloth_id):
        sql = "DELETE FROM clothes WHERE id = %s"
        with self.connect_db() as db, db.cursor() as cursor:
            cursor.execute(sql, (cloth_id,))
            db.commit()

