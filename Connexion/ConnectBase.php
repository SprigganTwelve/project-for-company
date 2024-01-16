<?php
session_start();
?>


<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="indexStyle.css" />
    <title>Connexion</title>
  </head>
  <body>

    
    <div class="container">
      <span> Link Infint</span>
      <div class="loader"></div>
      <div class="connexion">
        <h1>Connexion</h1>
        <div class="inputspace">
          <form action="ConnectBase.php" method="POST">
            <label for="adresse">Adresse:</label>
            <input required name="adresse" type="email" />
            <label for="password">Password :</label>
            <input required name="password" type="password" />
            <input type="submit" />
            <a href="../NewAccount/CreateAccount.php" target="_blank">Create a new account</a>
            <a href="../PasswordFall/Password.html" target="_blank">forgotten password</a>
          </form>
        </div>
      </div>
    </div>
   <?php 
         if($_POST){
        try{
        $dataBaseConnexion = new PDO("mysql:host=localhost;dbname=connexion","root","");
        $resq = $dataBaseConnexion->prepare('select * from information');
        $resq->setFetchMode(PDO::FETCH_ASSOC);
        $resq->execute();
        $table = $resq->fetchAll();

        for($i=0;$i < count($table);$i++){
          if($table[$i]['adresse'] === trim(rtrim($_POST['adresse']))){
           if(($table[$i]['password']) == md5(trim(rtrim($_POST['password'])))){        
              $_SESSION['user_id']=$table[$i]['id'];
              $resq->closeCursor();
              header("Location:../home_page/homepage.php");
           }
           } 
        }
      }
      catch(PDOExecption $e){
        $e->detMessage();
      }
      }
      ?>
      <script src="loader.js"></script>
  </body>
</html>

   
