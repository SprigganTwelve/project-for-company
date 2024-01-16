<?php
session_start();

if($_SESSION["user_id"]){
}else {
}
$id = $_SESSION['user_id'];
 $dataBase = new PDO("mysql:host=localhost;dbname=connexion","root","");
 $dataImage = $dataBase->query("select * from information where id=$id");
 $dataImage = $dataImage->fetch(PDO::FETCH_ASSOC);
 $imageName = $dataImage['image'];
 $name = $dataImage['name']." ".$dataImage['firstName']

?>

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" class="style" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <title>Homepage</title>
  </head>
  <body>


    
   
    <div class="loader"></div>
    
    <div class="container">
    

      <div class="slider">
          <div id="setimage">

          <?php      
echo '<div style="background:url(image/'.$imageName.'); background-size:cover;"></div>
<strong style="margin-left:80px;">'.$name.'</strong> <strong>Mon Compte </strong>';
          ?>
          </div>
          <section id="acc">Acceuil</section>
          <section class="Product">Produits</section>
          <section id="CC">Contact</section>
          <section class ="sub">Abonnement</section>
          <section>Deconnexion</section>

      </div>
  

          
          <div class="Accueil">
     
            <div class="head">
                <span id= 'menu' class="material-symbols-outlined">
                  menu
                </span>
                <span id="currentOption">
                <span class="material-symbols-outlined">
home
</span> 
                </span>

            </div>

            
            <div class="componement"> 
                <div><img src="../resources/logo_v1.svg" alt="logo ver.1" ></div>
                    <nav>
                      <span>Bienvenue à infinity link là où vos accès internet sont plus libre et flexible</span>
                    </nav>
                
                                
            </div>
                            
    </div>
 
  </div>

    <script src="action.js"></script>
  </body>

</html>
