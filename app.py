import os
from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

# when someone sends a GET to / render sign_form.html
@app.route('/', methods=['GET'])
def home():
    return render_template('pages/index.html')

@app.route('/events', methods=['GET'])
def events():
	return render_template('pages/events.html')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
