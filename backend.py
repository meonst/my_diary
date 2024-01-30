from flask import Flask, request
from flask_cors import CORS, cross_origin
from datetime import datetime
app = Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/api")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route("/insert", methods = ['POST'])
def select():
    import sqlite3
    
    
    
    files = request.files['file']
    # print(request.form['file'].__len__)
    for file in files:
        print(file.__name__)
    
    with sqlite3.connect("database.db") as connection:
        cursor = connection.cursor()
        sql_command = "INSERT INTO entries VALUES(null, ?, null, ?)"
        cursor.execute(
            sql_command, (request.form['content'], datetime.now())
        )
    return "Success"


    