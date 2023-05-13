import flask
from flask import Flask, url_for
from environment import VERSION, NODE_ENV

app = Flask(__name__)


@app.context_processor
def context_processor():
    main_styles = f'css/main.{NODE_ENV}.css'
    return dict(main_styles=main_styles)


@app.route('/')
def get_version():  # put application's code here
    return flask.render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
