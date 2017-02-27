---
layout: post
title: Como deixar o Iceweasel em Português do Brasil no Debian Jessie
date: '2015-06-05T17:55:00.001-07:00'
description: Como deixar o Iceweasel em Português do Brasil no Debian Jessie
main-class: 'debian'
tags:
- Debian
- Dicas
- Iceweasel
image: http://1.bp.blogspot.com/-2olnkFxhyk8/VXJEl7hBt7I/AAAAAAAAACE/GgGUgg5zjjE/s72-c/ICEWEASEL001.png
twitter_text: Como deixar o Iceweasel em Português do Brasil no Debian Jessie
introduction: Como deixar o Iceweasel em Português do Brasil no Debian Jessie
---
![Blog Linux](http://1.bp.blogspot.com/-2olnkFxhyk8/VXJEl7hBt7I/AAAAAAAAACE/GgGUgg5zjjE/s320/ICEWEASEL001.png "Blog Linux")
Se você acabou de instalar o Debian Jessie 8, certifique-se que você já  atualizou os repositórios. Feito isso, abra o Terminal (Aplicações,  Acessórios, Terminal), na GUI MATE.
 Adquira as permissões de root:
{% highlight bash %}
$ su
{% endhighlight %}
Instale o pacote de atualizações do Iceweasel para Português do Brasil.
{% highlight bash %}
# apt-get install iceweasel-l10n-pt-br
{% endhighlight %}
Pronto! Agora é só reiniciar o Iceweasel. 
Baseado em: http://blog.tiagopassos.com/
