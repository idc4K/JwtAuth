from django.contrib import admin
from .models import *
from .serie import *
from .DocAndFIlm import *
from .videoAndcategorie import *
from .videoserie import *
class AffichageUser(admin.ModelAdmin):
    list_display = ('id','username','first_name','email','phone_number','avatar','is_active','is_superuser','user_type','is_staff','is_verified','password','created_at','updated_at','deleted_at')
    search_fields = ['last_name']

class AffichageSerie(admin.ModelAdmin):
    list_display = ('id','title','description','image','durée','pays','realisateur','actor','deleteserie','avoir_cat','created_at','updated_at','deleted_at')
    search_fields = ['title']
class AffichageFilm(admin.ModelAdmin):
    list_display = ('id','title','description','image','durée','pays','realisateur','actor','deletefilm','concerner','avoir_cat','created_at','updated_at','deleted_at')
    search_fields = ['title']

class AffichageDocumentaire(admin.ModelAdmin):
    list_display = ('id','title','description','image','durée','pays','realisateur','deletedocumentaire','avoir','type_cat','created_at','updated_at','deleted_at')
    search_fields = ['title']

class Videos(admin.ModelAdmin):
    list_display = ('id','title','video','deletevideo','created_at','updated_at','deleted_at')
    search_fields = ['title']
class VideoSerie(admin.ModelAdmin):
    list_display = ('id','title','video_serie','deletevideo','created_at','appartenir','updated_at','deleted_at')
    search_fields = ['title']

admin.site.register(User,AffichageUser)
admin.site.register(film,AffichageFilm)
admin.site.register(serie,AffichageSerie)
admin.site.register(documentaire,AffichageDocumentaire)
admin.site.register(video,Videos)
admin.site.register(video_serie,VideoSerie)
# Register your models here.


