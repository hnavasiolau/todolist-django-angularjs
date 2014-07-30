from django.db import models

class TodoList(models.Model):
	name = models.CharField(max_length=100)

class TodoListItem(models.Model):	
	todoList = models.ForeignKey(TodoList)
	text = models.CharField(max_length=200)
	completed = models.BooleanField(default=False)