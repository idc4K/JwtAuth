
from django.urls import path
from .views import *

from . import views

urlpatterns = [
    path('Register/', RegisterView.as_view(), name="register"),
    path('Verify/', VerifyEmail.as_view(), name="verifyEmail"),
    path('Login/', Login.as_view(), name="login"),
    path('DetailUsers/<str:pk>/',views.detailuser),
    
]
