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
        'icone':'fas fa-user-tie',
        'titre':'Professeur',
        'active':false,
        'itemsid':[
           4,
           5
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
            titre:"Chercher un Professeur",
            link:"/dashboard/prof/chercher",
            plus:""
        }
        , 
        {
            id:5,
            titre:"Gestion des Professeurs",
            link:"/dashboard/prof/gestion",
            plus:""
        }
    ]
   



}