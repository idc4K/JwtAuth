from __future__ import unicode_literals
import uuid
from django.db import models
from django.core.mail import send_mail

from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

from django.contrib.auth.base_user import AbstractBaseUser
# from django.utils.translation import ugettext_lazy as _

from django.utils.translation import gettext_lazy as _ 
from rest_framework_simplejwt.tokens import RefreshToken



# classe de modification de gestion des utilisateur par defaut de django
class UserManager(BaseUserManager):

    def create_user(self,email,username=None,first_name=None,password=None):
        if email is None:
            raise TypeError('le mail est obligatoire')
        user=self.model(email=self.normalize_email(email),username=username,first_name=first_name)
        user.user_type= 'is_client'
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_admin(self,email,username,first_name=None,password=None):
        if email is None:
            raise TypeError('Le mail est obligatoire')
        if username is None:
            raise TypeError('Le nom est obligatoire')
        user = self.model(username=username,email=self.normalize_email(email),first_name=first_name)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,email,password=None,username=None,first_name=None):
        user = self.create_admin(
            email,
            username,
            first_name,
            password=password,
          
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user
    def email_user(self, *args, **kwargs):
        send_mail(
        '{}'.format(args[0]),
        '{}'.format(args[1]),
        '{}'.format(args[2]),
        [self.email],
        fail_silently=False,
    )

# classe de personnalisé de la table User par defaut de Django

class User(AbstractBaseUser, PermissionsMixin):
    id =  models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(_('user name'), max_length=30, blank=True)
    email = models.EmailField(_('email address'), unique=True)
    first_name = models.CharField(_('first name'), max_length=30, blank=True)
    user_type = models.CharField(_('user type'), max_length=30, blank=True,null=True)
    phone_number = models.CharField(_(""), max_length=70,null=True)
    is_active = models.BooleanField(_('active'), default=True)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    objects = UserManager()

    USERNAME_FIELD = 'email' 
    REQUIRED_FIELDS = ['username','first_name']

    session_token = models.CharField(max_length=10, default=0)

    is_verified = models.BooleanField(default=False)
    
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)
    deleted_at = models.DateTimeField(null=True)
     

    # fontction personalisé pour envoie des messages à l'utilisateur
    def email_user(self, *args, **kwargs):
        send_mail(
        '{}'.format(args[0]),
        '{}'.format(args[1]),
        '{}'.format(args[2]),
        [self.email],
        fail_silently=False,
    )

    objects = UserManager()

    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access':  str(refresh.access_token)
        }
    def __str__(self):
        return self.username


    

        