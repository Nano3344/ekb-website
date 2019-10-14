<?php

if(isset($_POST['submit'])) {
  $name = $_POST['Name'];
  $betreff = $_POST['Betreff'];
  $email = $_POST['Email'];
  $nachricht = $_POST['Nachricht'];

  $emailFrom = "kontakt@ekb-energy.de";

  setcookie('Information', $name, $betreff, $email, $nachricht, time()+3600);

  $headers = "From: $emailFrom \r\n";
  $txt = "You have received an email from ".$name.".\n\n".$nachricht;

  mail($email, $betreff, $nachricht, $headers);
  header("Location: ../index.html");
}
