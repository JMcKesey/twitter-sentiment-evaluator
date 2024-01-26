import json
from flask import Flask, render_template, request
import tweepy

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process', methods=['POST']) 
def process(): 
    data = request.form.get('data')
    return data

# retrieving bearer token
with open("twitter_keys.json") as infile:
    json_obj = json.load(infile)
    token = json_obj["bearer_token"]
    client = tweepy.Client(bearer_token=token)
    

if __name__ == '__main__':
    app.run(debug=True)