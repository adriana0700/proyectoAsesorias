<?php

include 'global.php';
$conexion = mysqli_connect(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mostrar datos</title>
</head>
<body>
    <table>
        <tr>
            <td>id</td>
            <td>nombre</td>
            <td>apellido</td>
            <td>telefono</td>
            <td>email</td>
            <td>contrasena</td>
        </tr>
        <?php
        //consulta para mostrarloc campos nombre, apellido y correo y ordenar de forma ascendente el nombre
        $filtarCorreo= "SELECT *FROM tbl_registro_usuario where email like '%@gmail.com'";
        //ejecutar cnsulta
        $ordenarCorreo= mysqli_query($conexion,  $filtarCorreo);
        while($mostrar=mysqli_fetch_array($ordenarCorreo)){
         ?>
        <tr>
            <td><?php echo $mostrar['id']?></td>
            <td><?php echo $mostrar['nombre']?></td>
            <td><?php echo $mostrar['apellido']?></td>
            <td><?php echo $mostrar['telefono']?></td>
            <td><?php echo $mostrar['email']?></td>
            
        </tr>
    <?php
    }
     ?>
    </table>
</body>
</html>