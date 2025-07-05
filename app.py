from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/roll', methods=['POST'])
def roll_dice():
    data = request.get_json()
    die_type = int(data['die'])
    result = random.randint(1, die_type)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
