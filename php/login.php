<html>
<head>
    <title>Login Form</title>
</head>
<body>

<?php

if (!isset($_POST['submit'])){
?>
<!-- HTML Login Formular -->
    <form action="<?=$_SERVER['PHP_SELF']?>" method="post">
        Username: <input type="text" name="username" /><br />
        Password: <input type="password" name="password" /><br />

        <input type="submit" name="submit" value="Login" />
    </form>

<?php
} else {
    require_once("db_const.php");
    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    # Überprüfe Datenbankverbindung
    if ($mysqli->connect_errno) {
        echo "<p>MySQL error no {$mysqli->connect_errno} : {$mysqli->connect_error}</p>";
        exit();
    }

    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * from users WHERE username LIKE '{$username}' AND password LIKE '{$password}' LIMIT 1";
    $result = $mysqli->query($sql);
    if (!$result->num_rows == 1) {
        echo "<p>Falsche username/password Kombination</p>";
    } else {
        echo "<p>Erfolgreich eingeloggt!</p><p>Persönliche Bestleistung:</p>";
		while($row = $result->fetch_assoc()) {
        echo "<p>Sprint: ".$row["running"]."</p><p>Weitwurf: ".$row["throwing"]."</p><p>Schwimmen: ".$row["swimming"]."</p><p>Weitsprung: ".$row["jumping"]."</p><p>";
		}
       
    }
}
?>      
</body>
</html>