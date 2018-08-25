<?php

if(isset($_POST['submit'])) {
  $name = $_POST['Name'];
  $betreff = $_POST['Betreff'];
  $email = $_POST['Email'];
  $nachricht = $_POST['Nachricht'];

  $emailFrom = "kontakt@ekb-energy.de";

  setcookie('Information', $name, $betreff, $email, $nachricht, time()+3600);

  $mailTo = "malik.ebers@web.de";
  $headers = "From: $emailFrom \r\n";
  $txt = "You have received an email from ".$name.".\n\n".$nachricht;

  mail($mailTo, $betreff, $nachricht, $headers);
  header("Location: ../index.html");
}
