from rest_framework import viewsets
from todolist.models import TodoList
from todolist.models import TodoListItem
from rest_framework import filters

class TodoListViewSet(viewsets.ModelViewSet):
    model = TodoList

class TodoListItemViewSet(viewsets.ModelViewSet):
    model = TodoListItem
    filter_backends = (filters.DjangoFilterBackend,)
    filter_fields = ('todoList',)