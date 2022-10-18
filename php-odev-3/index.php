<?php
if($_POST){
    $sayi = $_POST['sayi'];
    if($sayi == ""){
        echo "Lütfen bir sayı giriniz boş değer gönderilemez.";
    }else{
        if($sayi % 3 == 0){
            echo $sayi. " Sayısı 3'e bölünür";
        }else{
            $bolsayi = $sayi;
            while ($bolsayi % 3 != 0){
                $bolsayi++;
            }
            echo $sayi. " Sayısı 3'e bölünmez bölünebilecek ilk sayı " . $bolsayi. " dır";
        }
    }
}

$afterNum = $number;
$afterNum++;
while ($afterNum % 3 !== 0) {
    $afterNum++;
}
?>

<!doctype html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form method="post" action="">
        <label>
            Sayı giriniz: <input type="number" name="sayi">
        </label>
        <button type="submit">Dene!</button>
    </form>
</body>
</html>