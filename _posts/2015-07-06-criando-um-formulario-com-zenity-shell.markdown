---
layout: post
title: Criando um Formulário com Zenity (Shell)
date: '2015-07-06T18:34:00.002-07:00'
description: Criando um Formulário com Zenity (Shell)
main-class: 'bash'
tags:
- Shell Script
- Terminal
- Comandos
image: http://1.bp.blogspot.com/-1TubM4glm5g/VZsrvQ__8TI/AAAAAAAAFwA/9PAvH33eDBs/s72-c/form_zenity.png
twitter_text: Criando um Formulário com Zenity (Shell)
introduction: Criando um Formulário com Zenity (Shell)
---
![Blog Linux](http://1.bp.blogspot.com/-1TubM4glm5g/VZsrvQ__8TI/AAAAAAAAFwA/9PAvH33eDBs/s640/form_zenity.png "Blog Linux")
É uma explicação básica sobre isso, serve pra você desenvolver sua imaginação e criar novas soluções pra você mesmo e pra toda a comunidade. Primeiramente para que funcione é necessário que você possua o Zenity instalado, verifique se você possui em seu compuador:
{% highlight bash %}
$ which zenity
{% endhighlight %}
Se retornar isso:
{% highlight bash %}
/usr/bin/zenity
{% endhighlight %}
O Zenity está instalado, mas caso não esteja, nas distros Debian, basta rodar:
{% highlight bash %}
$ su
{% endhighlight %}
{% highlight bash %}
# apt-get install zenity
{% endhighlight %}
Em outras distros tente com o gerenciador de pacote correspondente: yum, pacman,...
Depois é só rodá-lo:
{% highlight bash %}
$ sh formulario.sh
{% endhighlight %}
Código do Script
Documentação do Zenity
