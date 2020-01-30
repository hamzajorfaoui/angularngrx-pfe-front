export class Aside
{
    public static content = [
     {
         'id':1,
         'icone':'fas fa-home',
         'titre':'Dashbord',
         'active':false,
         'itemsid':[
            1,
            2,
            3
         ]
     },
     {
        'id':1,
        'icone':'fas fa-shopping-cart',
        'titre':'Ecommerce',
        'active':false,
        'itemsid':[
           4,
           5,
           6,
           7
        ]
    }
    ]
    public static items = [
        {
            id:1,
            titre:"Manage admins",
            link:"/base/admins",
            plus:""
        }, 
        {
            id:2,
            titre:"Manage Uers",
            link:"/base/admins",
            plus:""
        }, 
        {
            id:3,
            titre:"Manage Orders",
            link:"#",
            plus:""
        }, 
        {
            id:4,
            titre:"Products",
            link:"#",
            plus:""
        }
        , 
        {
            id:5,
            titre:"Products detail",
            link:"#",
            plus:""
        }, 
        {
            id:6,
            titre:"Orders",
            link:"#",
            plus:""
        }, 
        {
            id:7,
            titre:"Orders detail",
            link:"#",
            plus:""
        }
    ]
   



}