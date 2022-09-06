from django.shortcuts import render
from rest_framework import generics,status,permissions
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .utils import Util
from .models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view,permission_classes
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
import jwt
from django.conf import settings
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view,permission_classes
from .DocAndFIlm import *
from .serie import *
class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    def post(self,request):
        user = request.data
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data = serializer.data
        
        user = User.objects.get(email=user_data['email'])
        token = RefreshToken.for_user(user).access_token

        current_site = get_current_site(request).domain
        relativeLink = reverse('verifyEmail')
        absurl = 'http://'+current_site+relativeLink+"?token="+str(token)
        email_body = "Hi"+" "+user.first_name+" use link to verify your mail \n"+absurl
        data = {'email_body':email_body,'to_email':user.email,'email_subject':'verify your mail'}
       
        Util.send_mail(data)
        return Response(user_data, status=status.HTTP_201_CREATED)



class VerifyEmail(generics.GenericAPIView):
    serializer_class = EmailVerificationSerializer

    token_param_config = openapi.Parameter(
        'token', in_=openapi.IN_QUERY, description='Description', type=openapi.TYPE_STRING)

    @swagger_auto_schema(manual_parameters=[token_param_config])

    def get(self, request):
        token = request.GET.get('token')
        try:
            payload = jwt.decode(token, settings.SECRET_KEY,algorithms=["HS256"])
            user = User.objects.get(id=payload['user_id'])
            if not user.is_verfied:
                user.is_verfied = True
                user.save()
            return Response({'email': 'Successfully activated'}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError as identifier:
            return Response({'error': 'Activation Expired'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as identifier:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)


# LOGIN USER
class Login(generics.GenericAPIView):
	serializer_class = loginuser
	def post(self,request):
		serializer = self.serializer_class(data=request.data)
		serializer.is_valid(raise_exception=True)
		return Response({"user": serializer.data},status=status.HTTP_200_OK)
# Create your views here.

class UserAPIView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = cruduser

    def get_object(self):
        return self.request.user


@api_view(['GET'])
@csrf_exempt
# @permission_classes([IsAuthenticated,autorisation])	
def viewallfilm(request):
	serializer_class = CreateFilm
	# org = OrganismeFormation.objects.all()
	donnee = film.objects.all()
    
	serializer = serializer_class(donnee, many=True)
	# serializer.data[10] = org
	return Response(serializer.data)
@api_view(['GET'])
@csrf_exempt
# @permission_classes([IsAuthenticated,autorisation])	
def viewallserie(request):
	serializer_class = CreateSerie
	# org = OrganismeFormation.objects.all()
	donnee = serie.objects.all()
    
	serializer = serializer_class(donnee, many=True)
	# serializer.data[10] = org
	return Response(serializer.data)


@api_view(['GET'])
@csrf_exempt
# @permission_classes([IsAuthenticated,autorisation])	
def viewalldocumentaire(request):
	serializer_class = CreateDocumentaire
	# org = OrganismeFormation.objects.all()
	donnee = documentaire.objects.all()
    
	serializer = serializer_class(donnee, many=True)
	# serializer.data[10] = org
	return Response(serializer.data)

@api_view(['GET'])
@csrf_exempt
# @permission_classes([IsAuthenticated,autorisation])	
def viewlogo(request):
	serializer_class = GetLogo
	# org = OrganismeFormation.objects.all()
	donnee = logo.objects.all()
    
	serializer = serializer_class(donnee, many=True)
	# serializer.data[10] = org
	return Response(serializer.data)

# @api_view(['GET'])
# @csrf_exempt
# def get_current_user(request):
#     serializer = cruduser(request.user)
#     return Response(serializer.data)
