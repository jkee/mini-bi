from flask import Flask

from api import api
import clickhouse

app = Flask(__name__)
app.register_blueprint(api)