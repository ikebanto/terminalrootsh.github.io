---
layout: post
title: Como instalar o GDM3 ou configurar o LightDM no Debian
date: '2016-05-07T07:44:00.000-07:00'
description: Como instalar o GDM3 ou configurar o LightDM no Debian
main-class: 'debian'
tags:
- Debian
- MATE
image: https://1.bp.blogspot.com/-sWB8pqV8XP4/Vy38s1URx6I/AAAAAAAAAcY/L9dHbyzm2dU-35CX2G_MGvUYa1l0UearACKgB/s72-c/gm3.jpg
twitter_text: Como instalar o GDM3 ou configurar o LightDM no Debian
introduction: Como instalar o GDM3 ou configurar o LightDM no Debian
---
![Blog Linux](https://1.bp.blogspot.com/-sWB8pqV8XP4/Vy38s1URx6I/AAAAAAAAAcY/L9dHbyzm2dU-35CX2G_MGvUYa1l0UearACKgB/s400/gm3.jpg "Blog Linux")
Por padrão o Debian 8 Jessie MATE vem o com o gerenciador de sessão (login) o LightDM instalado (veja imagem abaixo):
![Blog Linux](https://1.bp.blogspot.com/-OTDKx47yJIc/Vy39IZvsvpI/AAAAAAAAAcc/JstJ7Qg5_Qscw3BsWH0JQeZ_7dJkTInNwCLcB/s400/lightDM.png "Blog Linux")
Nesse vídeo há procedimentos de o que fazer após instalação do Debian 8 Jessie, mas não há esa dica, você pode incluí-la:
<iframe allowfullscreen="" frameborder="0" height="300" src="https://www.youtube.com/embed/mifEI1pBx4s" width="400"><iframe>
Apesar de ser configurável e ser um ótimo Display Manager, há quem goste de uma forma diferente de logar no sistema. Um dos
gerenciadores mais utilizados e preferidos dos linusers é o GDM3 (veja imagem abaixo):
![Blog Linux](https://1.bp.blogspot.com/-sWB8pqV8XP4/Vy38s1URx6I/AAAAAAAAAcY/L9dHbyzm2dU-35CX2G_MGvUYa1l0UearACKgB/s400/gm3.jpg "Blog Linux")
Para instalar o GMD3 siga os passos abaixo:
Logue como root:
{% highlight bash %}
$ su
{% endhighlight %}
E rode o apt-get para instalá-lo:
{% highlight bash %}
apt-get install gdm3 -y
{% endhighlight %}
Durante a instalação você será questionado para se deseja tornar o gdm3 como padrão de login, selecione o gdm3 e prossiga a instalação, mas
caso você tenha errado na seleção, você também pode fazer posteriormente, rodando o comando:
{% highlight bash %}
dpkg-reconfigure gdm3
{% endhighlight %}
Para mudar a imagem do seu usuário ao logar no sistema , basta você ir no Painel Principal do MATE e seguir o caminho e mudar sua foto:
Sistema > Preferências > Sobre mim
Para mudanças no GDM3 você precisa editar esse arquivo:
/etc/gdm3/greeter.gconf-defaults
Mais informações sobre GDM3 em: https://wiki.debian.org/GDM
Caso você não gostou do GDM3 quer o LightDM mas quer efetuar algumas alterações sem precisar instalar o Greeter:
Definir o LightDM como padrão:
{% highlight bash %}
dpkg-reconfigure lightdm
{% endhighlight %}
Ver as configurações definidas pra ele:
{% highlight bash %}
/usr/sbin/lightdm --show-config
{% endhighlight %}
Para exibir os usuários e suas respectivas imagens em vez de escrever o nome, edite o arquivo: 
{% highlight bash %}
nano /etc/lightdm/lightdm.conf
{% endhighlight %}
descomente a linha greeter-hide-users e deixe-a assim:
{% highlight bash %}
greeter-hide-users=false
{% endhighlight %}
Para mudar a imagem de fundo, tenha conhecimento de o caminho é:
{% highlight bash %}
/usr/share/images/desktop-base/
{% endhighlight %}
E para mudá-la use o comando:
{% highlight bash %}
update-alternatives --config desktop-background
{% endhighlight %}
Mais informações sobre LightDM em: https://wiki.debian.org/LightDM
