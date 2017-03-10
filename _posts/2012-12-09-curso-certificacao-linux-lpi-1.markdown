---
layout: post
title: "Curso Certificação Linux LPI-1: Gerenciamento de pacotes no Debian"
date: '2012-12-09T14:45:00.000-08:00'
image: '/assets/img/lpi/deb/debian-packages.png'
description: "Debian é uma organização voluntária que constrói distribuições consistentes de pacotes binários pré-compilados de software livre e distribui-os a partir do seu arquivo."
main-class: 'linux'
tags:
- Debian
- Linux
---

![Curso Certificação Linux LPI-1: Gerenciamento de pacotes no Debian](/assets/img/lpi/deb/debian-packages.png "Curso Certificação Linux LPI-1: Gerenciamento de pacotes no Debian")

[Debian](http://www.debian.org/) é uma organização voluntária que constrói distribuições __consistentes__ de pacotes binários pré-compilados de software livre e distribui-os a partir do seu arquivo. [O arquivo Debian](http://deb.debian.org/debian/) é oferecido por [muitos sites mirror remotos](http://www.debian.org/mirror/) para acesso através de métodos HTTP e FTP. Também está disponível em [CD-ROM/DVD](http://www.debian.org/CD/).

![Blog Linux](/assets/img/lpi/deb/deb1.png "Blog Linux")

O sistema de gestão de pacotes Debian, __quando utilizado de modo apropriado__, oferece ao utilizador o instalar de __conjuntos consistentes de pacotes binários__ no sistema a partir do arquivo. Actualmente, existem 54025 pacotes disponíveis para a arquitectura amd64. O sistema de gestão de pacotes Debian tem um histórico rico e muitas opções de escolha para o programa cliente do utilizador e de método de acesso ao arquivo. Actualmente, recomendamos o seguinte:

* __apt-get__ para todas as operações de linha de comandos, incluindo a instalação e remoção de pacotes, e dist-upgrade.

* __aptitude__ para uma interface de texto interactiva para gerir os pacotes instalados e procurar os pacotes disponíveis.



![Blog Linux](/assets/img/lpi/deb/deb2.png "Blog Linux")
![Blog Linux](/assets/img/lpi/deb/deb3.png "Blog Linux")
![Blog Linux](/assets/img/lpi/deb/deb5.png "Blog Linux")
![Blog Linux](/assets/img/lpi/deb/deb4.png "Blog Linux")

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="356" marginheight="0" marginwidth="0" mozallowfullscreen="mozallowfullscreen" scrolling="no" src="http://www.slideshare.net/slideshow/embed_code/15561295" style="border-width: 1px 1px 0; border: 1px solid #CCC; margin-bottom: 5px;" webkitallowfullscreen="webkitallowfullscreen" width="427"></iframe>
{% highlight bash %}
aptana aptitude
apt-cache aptitude-create-state-bundle
apt-cdrom aptitude-curses
apt-config aptitude-run-state-bundle
aptdcon apt-key
apt-extracttemplates apt-listchanges
apt-ftparchive apt-mark
apt-get apt-sortpkgs
{% endhighlight %}

<iframe allowfullscreen="allowfullscreen" frameborder="0" height="356" marginheight="0" marginwidth="0" mozallowfullscreen="mozallowfullscreen" scrolling="yes" src="http://www.debian.org/doc/manuals/apt-howto/ch1.pt-br.html" style="border-width: 1px 1px 0; border: 1px solid #CCC; margin-bottom: 5px;" webkitallowfullscreen="webkitallowfullscreen" width="590"></iframe>

## Página Oficial do Debian so Gerenciamento de Pacotes
[Gestão de pacotes Debian](https://www.debian.org/doc/manuals/debian-reference/ch02.pt.html)
