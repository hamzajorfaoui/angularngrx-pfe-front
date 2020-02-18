export class Aside
{
    public static content = [
    
     {
        'id':2,
        'icone':'fas fa-user-tie',
        'titre':'Professeur',
        'active':false,
        'itemsid':[
           4,
           5
        ]
    },
    {
       'id':3,
       'icone':'far fa-building',
       'titre':'Departement',
       'active':false,
       'itemsid':[
          6,
          7,
          11
       ]
   },
   {
      'id':4,
      'icone':'fas fa-user-graduate',
      'titre':'Etudiant',
      'active':false,
      'itemsid':[
         8,
         12
      ]
  },
   {
      'id':5,
      'icone':'far fa-newspaper',
      'titre':'Actualité',
      'active':false,
      'itemsid':[
         9,
         10
      ]
  }

    ]
    public static items = [
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
        , 
        {
            id:6,
            titre:"Gestion departements",
            link:"/dashboard/departement/gestion",
            plus:""
        }
        , 
        {
            id:7,
            titre:"Gestion Filiéres",
            link:"/dashboard/filiere/gestion",
            plus:""
        }
        , 
        {
            id:8,
            titre:"Gestion Etudiant",
            link:"/dashboard/etudiant/gestion",
            plus:""
        }
        , 
        {
            id:9,
            titre:"Gestion Annonces",
            link:"/dashboard/actualite/annonce/gestion",
            plus:""
        }
        , 
        {
            id:10,
            titre:"Gestion Actualités",
            link:"/dashboard/actualite/gestion",
            plus:""
        }
        , 
        {
            id:11,
            titre:"Gestion matiere",
            link:"/dashboard/filiere/matiere/gestion",
            plus:""
        }
        , 
        {
            id:12,
            titre:"Chercher Etudiant",
            link:"/dashboard/etudiant/chercher",
            plus:""
        }
    ]
   



}