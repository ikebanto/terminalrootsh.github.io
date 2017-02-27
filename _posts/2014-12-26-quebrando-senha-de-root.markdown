---
layout: post
title: "Quebrando a senha de root"
date: '2014-12-26T09:10:00.002-08:00'
description: "Quebrando a senha de root"
main-class: 'linux'
tags:
- Linux
- GNU
image: "http://1.bp.blogspot.com/-xAtPNrIAZmA/VDsh_jH6FUI/AAAAAAAAA2I/hd13kwJ4_9I/s72-c/new-logo-tr.png"
twitter_text: "Quebrando a senha de root"
introduction: "Quebrando a senha de root"
---
![Blog Linux](http://1.bp.blogspot.com/-xAtPNrIAZmA/VDsh_jH6FUI/AAAAAAAAA2I/hd13kwJ4_9I/s320/new-logo-tr.png "Blog Linux")
A maneira mais fácil de se quebrar a senha de root no Linux é:
1° - Pegar um LiveCD de qualquer distribuição Linux e dar o boot por ele.
2° - Abrir o terminal e criar um usuário root(e criar uma senha)
{% highlight bash %}
# sudo passwd root
{% endhighlight %}
3° - baixar o usuário root
{% highlight bash %}
# su
{% endhighlight %}
4° - Verificar o endereço da partição que o Linux está localizado
{% highlight bash %}
# fdisk -l
{% endhighlight %}
5° - Criar uma pasta dentro de /mnt para poder montar o partição dentro dela
{% highlight bash %}
# mkdir /mnt/SUAPASTA
{% endhighlight %}
6° - Montar essa partição pra poder acessá-la
{% highlight bash %}
# mount /dev/sda* /mnt/SUAPASTA
{% endhighlight %}
7° - Entre na partição já montada, pra não acabar de confundindo e alterando o arquivo do LiveCD
{% highlight bash %}
# cd /mnt/SUAPASTA
{% endhighlight %}
8° - abra com seu editor preferido o arquivo shadow, nesse caso usei o gedit
{% highlight bash %}
# gedit /etc/shadow
{% endhighlight %}
9° - Altere a linha correspondente ao usuário ROOT, altere o que está root:NESTE_ESPAÇO_A_NOVASENHA:13360:0:99999:7:::, porém será um arquivo tipo o abaixo:
{% highlight bash %}
root:$1$CLDZNZCB$PbOINV7W3sMIvlaTsrkLi1:13360:0:99999:7::: 
{% endhighlight %}
10° - Salve o arquivo, desmonte a partição
{% highlight bash %}
# umount /mnt/SUAPASTA
{% endhighlight %}
Depois é só reiniciar o PC, sem o LiveCD, lógico, e usuar o root, se também tiver perdido a senha de algum usuario, este pode ser o procedimento tambeḿ.
Mole mole!
