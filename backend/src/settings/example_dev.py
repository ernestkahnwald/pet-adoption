from .common import *


DEBUG = True

ALLOWED_HOSTS.append('*')
INTERNAL_IPS = ALLOWED_HOSTS.copy()
CSRF_TRUSTED_ORIGINS = ['http://localhost:3000']
