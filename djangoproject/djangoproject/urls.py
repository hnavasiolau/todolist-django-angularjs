from django.conf.urls import patterns, url, include
from rest_framework import routers
from todolist import views

router = routers.DefaultRouter()
router.register(r'todolist', views.TodoListViewSet)
router.register(r'todolistitem', views.TodoListItemViewSet)

urlpatterns = patterns('',
    url(r'^', include(router.urls))
)
