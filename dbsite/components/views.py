from django.shortcuts import redirect
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from .utils import *


class CompAPIView(generics.ListAPIView):
    queryset = Components.objects.all()
    serializer_class = IndexSerializer
    # permission_classes = (IsAuthenticated, )


class DeviceAPI(APIView):
    # permission_classes = (IsAuthenticated,)
    def get(self, request):
        values = Devices.objects.values_list("device_name", flat=True)
        return Response({"device_names": values})

    def post(self, request):
        comp_ids = []
        amount_need = []
        serializer = CompSerializer(data=request.data)
        serializer.is_valid()
        name = request.data["device_name"]
        device_need = request.data["device_need"]

        device_id = Devices.objects.get(device_name=name).device_id
        connection_data = Connection.objects.filter(device_id=device_id).values()
        for con in connection_data:
            comp_ids.append(con["comp_id"])
            amount_need.append(con["amount_need"])

        amount_need_all = [i * device_need for i in amount_need]

        comps_data = Components.objects.filter(comp_id__in=comp_ids).values_list("comp_name", "amount", "category")

        data = OrderData.objects.all()
        data.delete()

        for i in range(len(amount_need_all)):
            data_instance = OrderData.objects.create(comp_name=comps_data[i][0], in_stock=comps_data[i][1], amount_need=amount_need_all[i], cat=comps_data[i][2], enough=1)
            data_instance.save()

        return redirect("show")


class ShowOrderAPI(APIView):
    # permission_classes = (IsAuthenticated,)
    def get(self, request):
        info = OrderData.objects.all()
        comp_name = []
        in_stock = []
        amount_need = []
        cat = []
        order_data = OrderData.objects.all().values()
        for component in order_data:
            comp_name.append(component["comp_name"])
            in_stock.append(component["in_stock"])
            amount_need.append(component["amount_need"])
            cat.append(component["cat"])

        for i in range(len(in_stock)):
            if in_stock[i] < amount_need[i]:
                comp_name_ = comp_name[i]
                cat_rep = cat[i]
                Replace.objects.all().delete()
                OrderData.objects.filter(comp_name=comp_name_).update(enough=0)
                comp_for_rep = Components.objects.filter(
                    Q(amount__gte=amount_need[i]) & Q(category_id=cat_rep)).values("comp_name", "amount")
                for c in comp_for_rep:
                    Replace.objects.create(comp_name=c["comp_name"], in_stock=c["amount"], cat=cat_rep)
                return redirect("replace")

        for i in range(len(comp_name)):
            amount = Components.objects.filter(comp_name=comp_name[i]).values("amount")[0]["amount"]
            print(amount)
            amount -= amount_need[i]
            OrderData.objects.filter(comp_name=comp_name[i]).update(in_stock=amount)
            Components.objects.filter(comp_name=comp_name[i]).update(amount=amount)

        return Response({"order_data": ShowSerializer(info, many=True).data})


class ReplaceAPI(APIView):
    # permission_classes = (IsAuthenticated, )
    def get(self, request):
        # comps_to_replace = Replace.objects.all().values_list("comp_name", flat=True)
        comp_name = OrderData.objects.filter(enough=0).values("comp_name")[0]["comp_name"]
        comps_to_replace = Replace.objects.values("comp_name", "in_stock")

        return Response({"status": 200, "comp_to_replace": comp_name, "data": comps_to_replace})

    def post(self, request):
        serializer = ReplaceSerializer(data=request.data)
        serializer.is_valid()
        comp_name = request.data["replacement_choice"]
        in_stock = Components.objects.filter(comp_name=comp_name).values("amount")
        OrderData.objects.filter(enough=0).update(enough=1, comp_name=str(comp_name), in_stock=in_stock)
        return redirect("show")


class UpdateDBAPI(APIView):
    # permission_classes = (IsAuthenticated,)
    def get(self, request):
        values = Components.objects.values_list("comp_name", flat=True)
        categories = Category.objects.values_list("cat_name", flat=True)
        print(values)
        return Response({"status": 200, "comp_names": values, "categories": categories})

    def post(self, request):
        serializer = UpdateSerializer(data=request.data)
        serializer.is_valid()
        print(request.data)
        for comp in request.data:
            amount_add = int(comp["amount_add"])
            try:
                comp_name = comp["comp_name"]
                component = Components.objects.get(comp_name=comp_name)
                new_amount = component.amount + amount_add
                Components.objects.filter(comp_name=comp_name).update(amount=new_amount)
            except:
                component = Category.objects.get(cat_name=comp["category"])
                category = component.cat_id
                Components.objects.create(comp_name=comp["comp_name"], category_id=category, amount=comp["amount_add"])

        return redirect("home")


class AddNewDeviceAPI(APIView):
    def get(self, request):
        components = Components.objects.values_list("comp_name", flat=True)
        # print(components)
        return Response({"status": 200, "data": components})

    def post(self, request):
        serializer = AddNewDeviceSerializer(data=request.data)
        serializer.is_valid()
        device_name = request.data["device_name"]
        comp_data = request.data["comp_data"]
        try:
            device = Devices.objects.get(device_name=device_name)
            print(device)
            return Response({"status": 400, "response": "Device already exists"})
        except:
            Devices.objects.create(device_name=device_name)
            device_id = Devices.objects.get(device_name=device_name).device_id
            for component in comp_data:
                comp_name = component["comp_name"]
                amount_need = component["amount_need"]
                comp_id = Components.objects.get(comp_name=comp_name).comp_id
                Connection.objects.create(device_id=device_id, comp_id=comp_id, amount_need=amount_need)

            return Response({"status": 200, "response": "Device has been successfully added to database! "})

