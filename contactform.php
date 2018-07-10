<?php

if(isset($_POST['submit'])) {
  $name = $_POST['Name'];
  $betreff = $_POST['Betreff'];
  $email = $_POST['Email'];
  $nachricht = $_POST['Nachricht'];

  $mailTo = $email;
  $headers = "From: ".$email;
  $txt = "You have received an email from ".$name.".\n\n".$nachricht;

  mail($mailTo, $betreff, $nachricht, $headers);
  header("Location: Kontakt.html?mailsend");
}
