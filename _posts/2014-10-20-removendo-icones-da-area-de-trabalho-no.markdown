---
layout: post
title: Removendo ícones da área de trabalho no MATE
date: '2014-10-20T12:24:00.001-07:00'
image: '/assets/img/mate/Mate-logo.png'
description: Removendo ícones da área de trabalho no MATE
main-class: 'misc'
tags:
- MATE
- Dicas
---
![Blog Linux]( "Blog Linux")
Mostrar ou ocultar ícones da área de trabalhoPor padrão, MATE mostra vários ícones no desktop: o conteúdo do seu diretório desktop, computador, home e diretórios de rede, a lixeira e as unidades montadas. Você pode mostrar ou escondê-los individualmente ou todos de uma vez usando dconf.Ocultar todos os ícones do desktop$ dconf write /org/mate/desktop/background/show-desktop-icons false 
Ocultar ícones individuais
Ocultar ícone do computador: 
$ dconf write /org/mate/caja/desktop/computer-icon-visible false 
Ocultar ícone do diretório do usuário: 
$ dconf write /org/mate/caja/desktop/home-icon-visible false 
Ocultar ícone da rede: 
$ dconf write /org/mate/caja/desktop/network-icon-visible false 
Ocultar ícone da lixeira: 
$ dconf write /org/mate/caja/desktop/trash-icon-visible false 
Ocultar volumes montados:
$ dconf write /org/mate/caja/desktop/volumes-visible false 
Substitua 
{% highlight bash %}
false
{% endhighlight %} 
por
 {% highlight bash %}
 true
 
{% endhighlight %} 
 para os ícones reaparecerem. 
Mais informações: https://wiki.archlinux.org/index.php/MATE
