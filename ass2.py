from flask import Flask, render_template, send_from_directory
from requests import get
import os

PATH = os.path.dirname(os.path.abspath(__file__))
app = Flask("Assignment 2",template_folder=os.path.join(PATH, 'frontend'))

@app.route('/')
def index():
    ip = get('https://api.ipify.org').text
    return render_template("index.html", addr=ip)

@app.route('/assets/<path:filename>')
def serve_static(filename):
    #print (filename)
    return send_from_directory(os.path.join(PATH, 'frontend/assets'), filename)

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=5000)
