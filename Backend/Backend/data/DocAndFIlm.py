import uuid
from django.db import models
from .videoAndcategorie import *

class film(models.Model):
    id =  models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255);
    image = models.FileField(upload_to="serie/")
    durée = models.CharField(max_length=50)
    pays = models.CharField(max_length=50)
    realisateur = models.CharField(max_length=50)
    actor = models.CharField(max_length=50)
    deletefilm = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)
    deleted_at = models.DateTimeField(null=True)
    concerner = models.OneToOneField(video, on_delete=models.CASCADE,related_name="concerner_film")
    avoir_cat = models.ForeignKey(categorie,on_delete=models.CASCADE,related_name="categorie_film")

    def __str__(self):
        return self.title
class documentaire(models.Model):
    id =  models.UUIDField(primary_key=True,default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    image = models.FileField(upload_to="serie/")
    durée = models.CharField(max_length=50)
    pays = models.CharField(max_length=50)
    realisateur = models.CharField(max_length=50)
    deletedocumentaire = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)
    deleted_at = models.DateTimeField(null=True)
    avoir = models.OneToOneField(video,on_delete=models.CASCADE,related_name="concerner_documentaire")
    type_cat = models.ForeignKey(categorie,on_delete=models.CASCADE,related_name="categorie_doc")

    def __str__(self):
        return self.title



class imagecarousel(models.Model):
    id =  models.UUIDField(primary_key=True,default=uuid.uuid4, editable=False)
    image = models.FileField(upload_to="imagecarousel/")
   