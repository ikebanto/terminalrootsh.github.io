---
layout: post
title: Validar e Gerar CPF com PHP-GTK
date: '2013-11-02T07:47:00.000-07:00'
description: Validar e Gerar CPF com PHP-GTK
main-class: 'misc'
tags:
- PHP-GTK
image: http://4.bp.blogspot.com/-oUbG4rwfYow/UnUH12snyII/AAAAAAAACg8/kihCl4b1miU/s72-c/gerar-validar-cpf-php-gtk.png
twitter_text: Validar e Gerar CPF com PHP-GTK
introduction: Validar e Gerar CPF com PHP-GTK
---
![Blog Linux](http://4.bp.blogspot.com/-oUbG4rwfYow/UnUH12snyII/AAAAAAAACg8/kihCl4b1miU/s320/gerar-validar-cpf-php-gtk.png "Blog Linux")
Validando ou Gerando CPF com PHP-GTK
Faça o Download do opencpf-1.0.deb aqui nesse link:
 http://www.4shared.com/file/JXTmb_1Z/opencpf-10.html 
 
 1-Ter o PHP instalado, caso não tenha, execute no terminal: 
 {% highlight bash %}
# apt-get install php5
{% endhighlight %}
 
 2- Ter o PHP-GTK também instalado, se não tiver, consulte esse link: Como instalar o PHP-GTK 
 
 3-Talvez o Glade também (talvez, porque não testei, mas teste antes SEM), caso precise instalá-lo:
 {% highlight bash %}
# apt-get install glade
{% endhighlight %}
Funcionalidades do Programa(clique na imagem para ampliar):
![Blog Linux](http://3.bp.blogspot.com/-6ouAA_hxRjA/UnUKHaM5lQI/AAAAAAAAChI/Bxxgt7Q61MI/s640/all.jpg "Blog Linux")
Captura de Tela(ScreenShot do programa aberto no Glade, clique na imagem para ampliá-la):
![Blog Linux](http://1.bp.blogspot.com/-Ruqnxau3_Zw/UnUNEWJUUeI/AAAAAAAAChU/1e8_Dr22gpo/s400/Captura_de_tela-6.png "Blog Linux")
Arquivos necessários: 
cpf.glade(XML):
<iframe src="http://pastebin.com/raw/C01sx3vc" style="border:none;width:100%;"><iframe>
main.php:
<iframe src="http://pastebin.com/raw/knrH795m" style="border:none;width:100%;"><iframe>
isCpf.php:
<iframe src="http://pastebin.com/raw/5z6phsWy" style="border:none;width:100%;"><iframe>
Gerar.php:
<iframe src="http://pastebin.com/raw/gddVVYa2" style="border:none;width:100%;"><iframe>
 
 Abrir o programa(ou você pode criar um ícone no Painel para abrir com clique):
 {% highlight bash %}
# php-gtk2 main.php
{% endhighlight %}
Obs.: Necessário estar dentro da pasta onde está programa.Há um icone também que deve estar na mesma pasta, o nome da imagem é 'cpf3.png'
Caso vc deseje baixar todos os arquivos, baixe aqui:
http://www.4shared.com/archive/BFk0bDWt/Validador_e_Gerador_de_CPF_pro.html
Ou baixe só a imagem(mantenha as dimensões dela, caso contrário, NÃO FUNCIONARÁ!!!):
A Função PHP foi adaptada da vídeo-aula do David CHC:
http://www.davidchc.com.br/video-aula/php/criando-validacao-de-cpf-com-php/
Veja a vídeo aula:
