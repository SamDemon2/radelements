from django.urls import path
from components.views import *
from dbsite.yasg import urlpatterns as doc_urls

urlpatterns = [
    path("api/v1/complist/", CompAPIView.as_view(), name="home"),
    path("api/v1/add/", DeviceAPI.as_view(), name="device"),
    path("api/v1/show/", ShowOrderAPI.as_view(), name="show"),
    path("api/v1/replace/", ReplaceAPI.as_view(), name="replace")
]

urlpatterns += doc_urls
