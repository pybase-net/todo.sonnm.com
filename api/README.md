# API Gateway

## Development

1. Activate venv

```bash
cp .env.sample .env
source ./venv/bin/activate
flask run --host=localhost --port=1337 --debug
```

2. Deactivate

```sh
deactive
```

3. Styles

```sh
# Development
npm run serve
# Production
npm run build
```

## Materials

- [Use pipreqs instead of pip freeze](https://betterdatascience.com/python-pipreqs/)
- [Flask RESTful](https://flask-restful.readthedocs.io/en/latest/)
- [Flask Tutorial](https://www.youtube.com/watch?v=GMppyAPbLYk)
- [Flask RESTPlus](https://flask-restplus.readthedocs.io/en/stable/)
- [Marshmallow simplified object serialization](https://marshmallow.readthedocs.io/en/stable/)

## Cheatsheet

### Manage your dependency packages

```sh
# pipreqs
pip3 install pipreqs
# create requirements.txt in your project
pipreqs . # current path
pipreqs /your-project-path
```

### Working with database

- [flask-sql-alchemy](https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/quickstart/#configure-the-extension)
- [Using Flask SQL Alchemy](https://stackabuse.com/using-sqlalchemy-with-flask-and-postgresql/)

```sh
pip3 install Flask-SQLAlchemy
pipreqs .
```

### Working with environment

- [python-dotenv](https://pypi.org/project/python-dotenv/)

```sh
pip3 install python-dotenv
```