import sys
import os

from pathlib import Path


# Django keys -----------------------------------------------------------------
SECRET_KEY = os.environ.get('SECRET_KEY')
# -----------------------------------------------------------------------------

# General ---------------------------------------------------------------------
# DEBUG = False
APP_URL = 'http://localhost:8080'
# -----------------------------------------------------------------------------

# Path ------------------------------------------------------------------------
BASE_DIR = Path(__file__).resolve().parent.parent.parent
SRC_DIR = BASE_DIR / 'src'
APPS_DIR = SRC_DIR / 'apps'
MISC_DIR = SRC_DIR / 'misc'

sys.path.insert(0, str(SRC_DIR))
sys.path.insert(0, str(APPS_DIR))
sys.path.insert(1, str(MISC_DIR))
# -----------------------------------------------------------------------------

# Apps ------------------------------------------------------------------------
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    # 'corsheaders',
]
# -----------------------------------------------------------------------------

# Requests --------------------------------------------------------------------
ALLOWED_HOSTS = []
INTERNAL_IPS = []

ROOT_URLCONF = 'src.urls'
WSGI_APPLICATION = 'src.wsgi.application'

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    # 'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
# -----------------------------------------------------------------------------

# Database --------------------------------------------------------------------
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'peta',
        'USER': 'peta',
        'PASSWORD': 'peta',
        'HOST': 'postgres',
        'PORT': 5432,
        'ATOMIC_REQUESTS': False,
    },
}

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
# -----------------------------------------------------------------------------

# Auth ------------------------------------------------------------------------
LOGIN_REDIRECT_URL = '/'

AUTHENTICATION_BACKENDS = (
    'apps.accounts.backends.EmailOrUsernameModelBackend',
)

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]
# -----------------------------------------------------------------------------

# i18n ------------------------------------------------------------------------
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True
# -----------------------------------------------------------------------------

# Static ----------------------------------------------------------------------
STATIC_URL = 'static/'
# -----------------------------------------------------------------------------

# Templates -------------------------------------------------------------------
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]
# -----------------------------------------------------------------------------

# DRF -------------------------------------------------------------------------
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
    ),
    # 'DEFAULT_PERMISSION_CLASSES': (
    #     'rest_framework.permissions.IsAuthenticated',
    # ),
}
# -----------------------------------------------------------------------------

# Security --------------------------------------------------------------------
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True

CSRF_COOKIE_NAME = 'pa-csrftoken'
CSRF_TRUSTED_ORIGINS = []
CSRF_ALLOWED_ORIGINS = []
# CSRF_USE_SESSIONS = True
# -----------------------------------------------------------------------------

# Logs ------------------------------------------------------------------------
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'level': 'DEBUG',
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        '': {
            'handlers': ['console'],
            'level': 'DEBUG',
            'propagate': True,
        },
    },
}
# -----------------------------------------------------------------------------
