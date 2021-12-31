<?php
    $conn = mysqli_connect('localhost', 'root', '', 'chat');
    if(!$conn){
        echo "Database connected (not) ". mysqli_connect_error();
    }
?>