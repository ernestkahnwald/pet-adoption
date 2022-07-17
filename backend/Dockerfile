FROM python:3.10

ENV PYTHONUNBUFFERED=1

ENV PIP_NO_CACHE_DIR=off
ENV PIP_DISABLE_PIP_VERSION_CHECK=on
ENV PIP_DEFAULT_TIMEOUT=100

ENV POETRY_VIRTUALENVS_IN_PROJECT=false
ENV POETRY_VIRTUALENVS_CREATE=false
ENV POETRY_NO_INTERACTION=1
ENV POETRY_HOME="/opt/poetry"

ENV DJANGO_SETTINGS_MODULE=src.settings.dev

RUN apt-get update
RUN apt-get install --no-install-recommends -qy htop

WORKDIR /app

 COPY ./pyproject.toml ./poetry.lock ./

# Poetry
RUN pip install poetry
RUN poetry install

COPY . .
