from flask import Flask, request, render_template, redirect, url_for
import dataset

app = Flask(__name__)

# Connnect to database
db = dataset.connect('sqlite:///file.db')

# when someone sends a GET to / render sign_form.html
@app.route('/', methods=['GET'])
def sign_form():
    return render_template('pages/index.html')

app.run(debug=True)