from rest_framework import viewsets
from todolist.models import TodoListItem

class TodoListItemViewSet(viewsets.ModelViewSet):
    model = TodoListItem