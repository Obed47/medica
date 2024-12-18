from django.urls import path,include
from app import views
from .views import UserProfileListCreate, UserProfileDetail,UserView, UpdateUserProfileView

from rest_framework.routers import SimpleRouter

route = SimpleRouter()


route.register("register",UserView,basename='register')


urlpatterns = [
    
    path('api/',include(route.urls)),
    
    path('', views.home, name="home"),
   
    path('register', views.register, name="register"),
    path('api/login', views.logIn, name="login"),
    path('logout', views.logOut, name="logout"),
    path('password_reset', views.send_verification_code, name="password_reset"),
    path('verify_code', views.verify_code, name="verify_code"),
    path('api/userprofiles', UserProfileListCreate.as_view(), name="userprofile-list-create"),
    path('api/userprofiles/<int:pk>/', UserProfileDetail.as_view(), name="userprofile-detail"),
    path('update-profile/', UpdateUserProfileView.as_view(), name='update-profile') 
]


