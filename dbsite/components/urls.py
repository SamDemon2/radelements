from django.urls import path

from components.views import *

urlpatterns = [
    path("", CompAPIView.as_view(), name="home"),
    path("add/", DeviceAPI.as_view(), name="device"),
    path("show/", ShowOrderAPI.as_view(), name="show"),
    path("replace/", ReplaceAPI.as_view(), name="replace")
]
