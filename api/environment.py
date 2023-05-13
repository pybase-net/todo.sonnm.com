# environment variables
import os
from dotenv import load_dotenv
# load environment
load_dotenv()  # take environment variables from .env.
VERSION = os.getenv('VERSION') or '0.1'
