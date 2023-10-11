from django.contrib import admin
from .views import *

from django.contrib import admin
from django.utils.safestring import mark_safe

from .models import *


class ComponentsAdmin(admin.ModelAdmin):
    list_display = ("comp_name", "amount")
    list_display_links = ("comp_name", "amount")
    fields = ("comp_name", "amount")


admin.site.register(Components, ComponentsAdmin)

