<?php

$checkName= 'ok';
$checkFirstName = 'ok';
$code='ok';

    if($_POST){

       $base = new PDO("mysql:host=localhost;dbname=connexion","root","");

      if(isset($_POST['submit'])){

      if(preg_match("#[A-Z][^1-9\$\.=\+_\[)(\}\{@\^\\\/!ù%\*~\:;,\#\?£]*#", $_POST['name'])){

        $checkName = 'ok';

          if(preg_match("#[^1-9\$\.=\+_\[)(\}\{@\^\\\/!ù%\*~\:;,\#°\?]*#", $_POST["firstName"])){

            $checkFirstName = 'ok';

            if($_POST['password'] === $_POST['passwordconfirm']){

                $nameImage = $_FILES['image']['name'];

                echo $nameImage;

                $name = trim(rtrim($_POST['name']));
                $firstName = trim(rtrim($_POST['firstName']));
                $adresse = trim(rtrim($_POST['email']));
                $password = md5(trim(rtrim($_POST['password'])));
                $resq = $base->prepare("insert into information(name,firstName,adresse,password,image) values('$name','$firstName','$adresse','$password','$nameImage')");
                $resq->execute();
                $code = 'ok';

                move_uploaded_file($_FILES["image"]["tmp_name"],"../home_page/image/".$nameImage);
                
                header("Location:../connexion/connectBase.php") ;

            }else{

              $code = 'no';

            }
          }else{

            $checkFirstName = 'no';

          }
        }else{

          $checkName='no';

        }
      }

    }
  
?>





<html lang="en">
  <head>

    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Password</title>

  </head>
  <body>

    <div class="container">
      <div class="items">

        <form action="CreateAccount.php" method="POST"  enctype="multipart/form-data">
          <h1>Create a new account</h1>

          <label for="name">Name:</label>
          <input name="name" placeholder="your name" type="text" />
          <?php if($checkName=='no'): ?>
            <span style = "color:red;font-size:20px">Begin with a upper letter/dont use number</span>
          <?php endif; ?>


          <label for="firstName" >First name:</label>
          <input required  name="firstName" placeholder="your first name" type="text" />
          <?php if($checkFirstName=='no'): ?>
            <span style = "color:red;font-size:20px">dont use number or special caratere</span>
          <?php endif; ?>


          <label for="email">Email:</label>
          <input  required name="email" placeholder="your Email "type="email" />


          <label for="password">password</label>
          <input required name="password" placeholder="your password" type="password" />
          <?php if($code=='no'): ?>
            <span style = "color:red;font-size:20px">Verify your password</span>
          <?php endif; ?>


          <label for="passwordconfirm">confirm your password</label>
          <input required name="passwordconfirm" type="password" placeholder="confirm" />
          <?php if($code=='no'): ?>
            <span style = "color:red;font-size:20px">Verify your confirm</span>
          <?php endif; ?>

          <label  for="image">Add image</label>
          <input style="display:none" name="image" id="image" type="file" />

          <input required name="submit" id ="submit" type="submit" />

        </form>

      </div>

    </div>
 
    <script></script>
  </body>

</html>
