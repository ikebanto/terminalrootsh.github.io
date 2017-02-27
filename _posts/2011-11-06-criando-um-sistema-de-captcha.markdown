---
layout: post
title: Criando um sistema de Captcha
date: '2011-11-06T16:37:00.000-08:00'
description: Criando um sistema de Captcha
main-class: 'misc'
tags:
- PHP
image: http://1.bp.blogspot.com/-Cl22VgHu6qM/TrcoWxPPl-I/AAAAAAAAAI0/lnE2MZx097M/s72-c/captcha.php.png
twitter_text: Criando um sistema de Captcha
introduction: Criando um sistema de Captcha
---
![Blog Linux](http://1.bp.blogspot.com/-Cl22VgHu6qM/TrcoWxPPl-I/AAAAAAAAAI0/lnE2MZx097M/s1600/captcha.php.png "Blog Linux")
Existem varias formas de se fazer isso, algumas formas tiveram problema acredito por causa da biblioteca GD, se vc não as tem instaladas:
{% highlight bash %}
# su
# apt-get install php5-gd
{% endhighlight %}
  O código abaixo está todo comentado para causar o entendimento.
{% highlight bash %}
//INICIAR A SESSION
session_start();
//INICIAR O HEADER
header('Content-Type: image/png');
//puxar a imagem, vc deve ter essa imagem na pasta, pois ela servirá de base.
$image = imagecreatefrompng("captcha.png") or die ("Não foi possível iniciar a imagem.");
//carregar a fonte, tem de ser no formato gdf, neste caso, google-a
$fonte  = imageloadfont("anonymous.gdf");
//quantidade de caracteres, shuffle para embaralhar e 4 caracteres somente q eu escolhi
$texto  = substr(str_shuffle("AaBbCcDdEeFfGgHhIiJjKkLlMmNnPpQqRrSsTtUuVvYyXxWwZz23456789"),0,4);
//salvar a session
$_SESSION['capcad'] = $texto;
//indicar a cor da fonte
$cor = imagecolorallocate($image,0,0,0);
//junção da imagem com o texto, os numeros referenciam a posição da imagem
imagestring($image, $fonte, 50, 10, $texto, $cor);
//mostrar imagem
imagepng($image);
//liberar memória
imagedestroy($image);
?>
{% endhighlight %}
é nois!
