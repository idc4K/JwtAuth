
from django.urls import path
from .views import *




urlpatterns = [
    path('Register/', RegisterView.as_view(), name="register"),
    path('Verify/', VerifyEmail.as_view(), name="verifyEmail"),
    path('Login/', Login.as_view(), name="login"),
   
]
