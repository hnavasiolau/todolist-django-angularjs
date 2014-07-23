from django.db import models

class TodoListItem(models.Model):
    text = models.CharField(max_length=200)
    isCompleted = models.BooleanField(default=False)