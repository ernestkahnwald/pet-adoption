from django.http.request import HttpRequest
from django.contrib.auth import get_user_model, login as dj_login, logout as dj_logout


User = get_user_model()


def login(request: HttpRequest, user: User) -> None:
    dj_login(
        request,
        user,
        backend='apps.accounts.backends.EmailOrUsernameModelBackend',
    )


def logout(request: HttpRequest) -> None:
    dj_logout(request)
