<?php
if (file_exists ('./generated/img.jpg')){
unlink('./generated/img.jpg');
}

$R = rand(0,255);
$G = rand(0,255);
$B = rand(0,255); 

$im = imagecreatetruecolor(1000, 100);
$text_color = imagecolorallocate($im, $R, $G, $B);

//font
$font = './fonts/Black.ttf';

imagettftext($im, 50.0, 0.0, 50, 50, $text_color, $font , 'Viel Erfolg bei den Wettkämpfen!');

// buffering
ob_start();

// output jpeg
imagejpeg($im, NULL, 85);

//string
$contents = ob_get_contents();

ob_end_clean();

//free up memory
imagedestroy($im);

// schreibe jpg datei
$fh = fopen("./generated/img.jpg", "a+" );
    fwrite( $fh, $contents );
fclose( $fh );
?> 