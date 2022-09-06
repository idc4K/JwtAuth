
from django.urls import path
from .views import *

from . import views

urlpatterns = [
    path('Register/', RegisterView.as_view(), name="register"),
    path('Verify/', VerifyEmail.as_view(), name="verifyEmail"),
    path('Login/', Login.as_view(), name="login"),
    path('user/',UserAPIView.as_view()),

    path('GetAllFilm/',views.viewallfilm),
    path('GetAllSerie/',views.viewallserie),
    path('GetAllDocumentaire/',views.viewalldocumentaire),
    path('GetLogo/',views.viewlogo),
    
]
