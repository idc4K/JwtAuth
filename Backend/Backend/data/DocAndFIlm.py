import uuid
from django.db import models
from .videoAndcategorie import *

class film(models.Model):
    id =  models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    titre = models.CharField(max_length=100)
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
    concerner = models.ForeignKey(video, on_delete=models.CASCADE,related_name="concerner_film")
    avoir_cat = models.ForeignKey(categorie,related_name="categorie_film")

class documentaire(models.Model):
    id =  models.UUIDField(primary_key=True, on_delete=models.CASCADE,default=uuid.uuid4, editable=False)
    titre = models.CharField(max_length=100)
    description = models.CharField(max_length=255);
    image = models.FileField(upload_to="serie/")
    durée = models.CharField(max_length=50)
    pays = models.CharField(max_length=50)
    realisateur = models.CharField(max_length=50)
    deletedocumentaire = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)
    deleted_at = models.DateTimeField(null=True)
    avoir = models.ForeignKey(video,on_delete=models.CASCADE,related_name="concerner_documentaire")
    type_cat = models.ForeignKey(categorie,on_delete=models.CASCADE,related_name="categorie_doc")
