from flask import Flask
from environment import VERSION

app = Flask(__name__)


@app.route('/')
def get_version():  # put application's code here
    return f'API Version : {VERSION}'


if __name__ == '__main__':
    app.run()
