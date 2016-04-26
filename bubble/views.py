from django.shortcuts import render
from django.http import HttpResponse
from django.views import generic

# Create your views here.

class ScatterView(generic.TemplateView):
    template_name = 'bubble/scatter.html'

class IdeaView(generic.TemplateView):
    template_name = 'bubble/idea_page.html'


