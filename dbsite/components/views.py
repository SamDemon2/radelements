from django.http import HttpResponseNotFound
from django.shortcuts import render, redirect
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from .utils import *
import sqlite3

menu = [
    {"title": "All components", "url_name": "home"},
    {"title": "Select device", "url_name": "device"},
    {"title": "Show order", "url_name": "show"},

]


class CompAPIView(generics.ListAPIView):
    queryset = Components.objects.all()
    serializer_class = IndexSerializer
    permission_classes = (IsAuthenticated, )


# class CompListAPIView(generics.ListAPIView):
#     def custom_query(self):
#         with sqlite3.connect("db.sqlite3") as connection:
#             cur = connection.cursor()
#             query = """SELECT comp_id, comp_name, cat_name, amount FROM components_components
#                         INNER JOIN components_category ON components_components.cat = components_category.cat_id"""
#             cur.execute(query)
#             result = cur.fetchall()
#             return result
#


def index(request):
    components = Components.objects.all()
    return render(request, "components/index.html", {"title": "Main page", "menu": menu, "components": components})


class DeviceAPI(APIView):
    def post(self, request):
        comp_ids = []
        amount_need = []
        amount = []
        comps = []
        comp_cat = []
        serializer = CompSerializer(data=request.data)
        serializer.is_valid()
        name = request.data["device_name"]
        print(request.data)
        device_need = request.data["device_need"]
        print(name)
        print(device_need)
        print("hello")

        with sqlite3.connect("db.sqlite3") as connection:
            cur = connection.cursor()
            cur.execute(f"SELECT device_id FROM components_devices WHERE device_name = '{name}'")

            device_id = cur.fetchone()[0]
            cur.execute(f"SELECT comp_id, amount_need FROM components_connection WHERE device_id={device_id}")

            for comp_id in cur.fetchall():
                comp_ids.append(comp_id[0])
                amount_need.append(comp_id[1])

            amount_need_all = [i * device_need for i in amount_need]

            for comp_id in comp_ids:
                cur.execute(f"SELECT comp_name, amount FROM components_components WHERE comp_id={comp_id}")
                answer = cur.fetchone()
                comps.append(answer[0])
                amount.append(answer[1])

            for comp in comps:
                cur.execute(f"SELECT cat FROM components_components WHERE comp_name='{comp}' ")
                comp_cat.append(cur.fetchone()[0])

            cur.execute("DELETE FROM components_orderdata")
            connection.commit()

            for i in range(len(comps)):
                cur.execute("""INSERT INTO components_orderdata(comp_name, in_stock, amount_need, cat, enough)
                                VALUES(?,?,?,?,?)""", (comps[i], amount[i], amount_need_all[i], comp_cat[i], 1))
            connection.commit()
            return redirect("show")


class ShowOrderAPI(APIView):

    def get(self, request):
        info = OrderData.objects.all()
        comp_name = []
        in_stock = []
        amount_need = []
        cat = []
        with sqlite3.connect("db.sqlite3") as connection:
            cur = connection.cursor()
            cur.execute("SELECT * FROM components_orderdata")
            for answer in cur.fetchall():
                comp_name.append(answer[1])
                in_stock.append(answer[2])
                amount_need.append(answer[3])
                cat.append(answer[4])
            # print(comp_name)
            for i in range(len(in_stock)):
                if in_stock[i] < amount_need[i]:
                    comp_name_ = comp_name[i]
                    cat_rep = cat[i]
                    Replace.objects.all().delete()
                    OrderData.objects.filter(comp_name=comp_name_).update(enough=0)
                    cur.execute(f"SELECT comp_name FROM components_components WHERE cat={cat_rep} and amount > {amount_need[i]}")
                    comp_for_rep = cur.fetchall()
                    for c in comp_for_rep:
                        cur.execute(f"INSERT INTO components_replace( comp_name, cat) VALUES(?, ?)", (c[0], cat_rep))
                    return redirect("replace" + "/1")
            count = 0
            for comp in comp_name:
                new_amount = in_stock[count] - amount_need[count]
                count += 1
                cur.execute(f"UPDATE components_components SET amount = ? WHERE comp_name='{comp}' ", (new_amount,))
        return Response({"order_data": ShowSerializer(info, many=True).data})


class ReplaceAPI(APIView):
    # def get(self, request):
    #     return Response({"menu": menu})
    def post(self, request):
        serializer = ReplaceSerializer(data=request.data)
        serializer.is_valid()
        comp_name = request.data["replacement_choice"]
        in_stock = Components.objects.filter(comp_name=comp_name).values("amount")
        # return redirect("home")
        OrderData.objects.filter(enough=0).update(enough=1, comp_name=str(comp_name), in_stock=in_stock)
        return redirect("show")


class UpdateDBAPI(APIView):
    def post(self, request):
        serializer = UpdateSerializer(data=request.data)
        serializer.is_valid()
        for comp in request.data:
            amount_add = comp["amount_add"]
            try:
                comp_name = comp["comp_name"]
                component = Components.objects.get(comp_name=comp_name)
                new_amount = component.amount + amount_add
                Components.objects.filter(comp_name=comp_name).update(amount=new_amount)
            except:
                component = Category.objects.get(cat_name=comp["category"])
                category = component.cat_id
                Components.objects.create(comp_name=comp["new_comp_name"], cat=category, amount=comp["amount_add"])

        return redirect("home")


def pageNotFound(request, exception):
    return HttpResponseNotFound("<h1>Page not found</h1>")
