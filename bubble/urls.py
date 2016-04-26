from django.conf.urls import url
from . import views

app_name = 'bubble'

urlpatterns = [
    url(r'^scatter/$', views.ScatterView.as_view(), name='scatter'),
    url(r'^idea/$', views.IdeaView.as_view(), name='idea'),

]
