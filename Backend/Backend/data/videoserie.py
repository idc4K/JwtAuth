import uuid
from django.db import models
from .serie import *

class video_serie(models.Model):
    id =  models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    video_serie = models.FileField(upload_to="videos_serie/",null=True)
    deletevideo = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)
    deleted_at = models.DateTimeField(null=True)
    appartenir = models.ForeignKey(serie, on_delete=models.CASCADE,related_name="appartenir_serie",null=True)


