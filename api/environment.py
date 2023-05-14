# environment variables
import os
from dotenv import load_dotenv

# load environment
load_dotenv()  # take environment variables from .env.
VERSION = os.getenv('VERSION') or '0.1'
NODE_ENV = os.getenv('NODE_ENV') or 'production'
DATABASE_URI = os.getenv('DATABASE_URI')
