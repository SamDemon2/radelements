from rest_framework import serializers
from .models import *


class IndexSerializer(serializers.ModelSerializer):
    class Meta:
        model = Components
        fields = ("comp_id", "comp_name", "amount")


class CompSerializer(serializers.Serializer):
    device_name = serializers.CharField(max_length=255)
    device_need = serializers.IntegerField()


class UpdateSerializer(serializers.Serializer): # new
    comp_name = serializers.CharField(max_length=255)
    amount_add = serializers.IntegerField()



class ShowSerializer(serializers.Serializer):
    comp_name = serializers.CharField(max_length=255)
    in_stock = serializers.IntegerField()
    amount_need = serializers.IntegerField()
    cat = serializers.IntegerField()


class ReplaceSerializer(serializers.Serializer):
    replacement_choice = serializers.CharField(max_length=255)
