
from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenVerifyView



urlpatterns = [
    path('Register/', RegisterView.as_view(), name="register"),
    path('Verify/', VerifyEmail.as_view(), name="verifyEmail"),
    path('Login/', Login.as_view(), name="login"),
      path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
