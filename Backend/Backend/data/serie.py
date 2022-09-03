import uuid
from django.db import models


class Serie(models.Model):
    id =  models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    titre = models.CharField(max_length=100)
    description = models.CharField(max_length=255);
    image = models.FileField(upload_to="serie/")
    durée = models.CharField(max_length=50)
    pays = models.CharField(max_length=50)
    realisateur = models.CharField(max_length=50)
    actor = models.CharField(max_length=50)
    deleteserie = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)
    deleted_at = models.DateTimeField(null=True)
