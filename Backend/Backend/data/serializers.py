from rest_framework import serializers
from .models import User
from django.contrib import auth
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import get_user_model 

from .DocAndFIlm import *
from .serie import *
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=68,min_length=8,write_only=True)
    first_name = serializers.CharField(max_length=120)
    last_name = serializers.CharField(max_length=120)
    
    class Meta:
        model = User
        fields = ['last_name','first_name','email','password']

    
    def validate(self,attrs):
        email = attrs.get('email','')
        first_name = attrs.get('first_name','')
        last_name = attrs.get('last_name','')
        if not first_name.isalnum() and not last_name.isalnum():
            serializers.ValidationError("first_name and last_name should only contain alpha numeric character")
     
        elif get_user_model().objects.filter(email=email).exists():
            serializers.ValidationError("Ce mail existe déjà differents")
        return attrs

    def create(self,validated_data):
         return User.objects.create_user(**validated_data)

class EmailVerificationSerializer(serializers.ModelSerializer):
    token = serializers.CharField(max_length=555)

    class Meta:
        model = User
        fields = ['token']

class loginuser(serializers.ModelSerializer):
    id = serializers.UUIDField(read_only=True)
    email = serializers.EmailField(max_length=50)
    password = serializers.CharField(max_length=20, write_only=True)
    first_name = serializers.CharField(max_length=100,read_only=True)
    tokens = serializers.CharField(max_length=255,read_only=True)
  
    class Meta:
        model = User
        fields = ['id','first_name','email','password','tokens']


    def validate(self,attrs):
        email = attrs.get('email','')
        password = attrs.get('password','')
        user = auth.authenticate(email=email,password=password)

        if not user:
            raise AuthenticationFailed('donnée incorrecte...')
        # if not user.is_verfied:
        #     raise AuthenticationFailed('compte non activé...')
        return user

class cruduser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','first_name','email','tokens']

class CreateFilm(serializers.ModelSerializer):
    class Meta:
        model = film
        fields = ['id','title','description','image','durée','pays','realisateur','actor','concerner','avoir_cat']


class CreateSerie(serializers.ModelSerializer):
    class Meta:
        model = serie
        fields = ['id','title','description','image','durée','pays','realisateur','actor','avoir_cat']