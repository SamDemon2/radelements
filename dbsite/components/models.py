from django.db import models


class Components(models.Model):
    comp_id = models.AutoField(primary_key=True)
    cat = models.IntegerField()
    comp_name = models.CharField(max_length=255)
    amount = models.IntegerField()

    def __str__(self):
        return self.comp_name


class Devices(models.Model):
    device_id = models.AutoField(primary_key=True)
    device_name = models.CharField(max_length=255)

    def __str__(self):
        return self.device_name


class Category(models.Model):
    cat_id = models.AutoField(primary_key=True)
    cat_name = models.CharField(max_length=255)

    def __str__(self):
        return self.cat_name


class Connection(models.Model):
    device_id = models.IntegerField()
    comp_id = models.IntegerField()
    amount_need = models.IntegerField()


class OrderData(models.Model):
    comp_name = models.CharField(max_length=255)
    in_stock = models.IntegerField()
    amount_need = models.IntegerField()
    cat = models.IntegerField()
    enough = models.BooleanField(default=True)


class Replace(models.Model):
    comp_name = models.CharField(max_length=255)
    cat = models.IntegerField()

    def __str__(self):
        return self.comp_name


