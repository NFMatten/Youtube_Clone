from django.db import models
from authentication.models import User
from .models import Reply
# Create your models here.
class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Reply, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)