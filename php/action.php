        
        <?php
echo $_POST['uname'];
$server='localhost';
$username='root';
$password='123';
$dbname='user';
var_dump($GLOBALS);
$connect= new mysqli_connect($server, $username, $password, $dbname);
$uname=$_POST['uname'];
$psw=$_POST['psw'];

if(isset($_REQUEST['insert'])){

$sql="INSERT INTO perfil(email,senha)VALUES($uname, $psw)";

$result=$connect($sql) or die(mysqli_error());
   


    
   mysqli_free_result($result);
   mysqli_close($connect);
   
}
     
?> 