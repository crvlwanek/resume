import requests
import os
from flask import Flask

os.environ.get("strava_client_secret")

access_token = "67a3ef15f7ba72011ac1d036a4a2f404642615ee"

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"