from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

# when someone sends a GET to / render sign_form.html
@app.route('/', methods=['GET'])
def home():
    return render_template('pages/index.html')

@app.route('/events', methods=['GET'])
def events():
	return render_template('pages/events.html')

app.run(debug=True)