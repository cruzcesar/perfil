<?php

/*$servername = "localhost";
$username = "cbrsoluc_cesar";
$password = "Bazan_12345";
$dbname = "cbrsoluc_empresa";
*/

/*se cambia de linea para subir a la nube */
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "perfil";




$con = new mysqli($servername, $username, $password, $dbname);
$con ->query("SET NAMES 'utf8'");

if ($con->connect_error) {
    die("Fallo la Conexion: " . $con->connect_error);
} 
?>