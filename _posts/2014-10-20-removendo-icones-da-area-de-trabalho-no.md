---
layout: post
title: "Removendo ícones da área de trabalho no MATE"
date: '2014-10-20T12:24:00.001-07:00'
image: '/assets/img/mate/Mate-logo.png'
description: "Por padrão, MATE mostra vários ícones no desktop: o conteúdo do seu diretório desktop, computador, home e diretórios de rede, a lixeira e as unidades montadas."
main-class: 'misc'
tags:
- MATE
- Dicas
---

![Removendo ícones da área de trabalho no MATE](/assets/img/mate/Mate-logo.png "Removendo ícones da área de trabalho no MATE")

> Mostrar ou ocultar ícones da área de trabalho

Por padrão, [MATE](https://mate-desktop.org/pt/) mostra vários ícones no desktop
* o conteúdo do seu diretório desktop
* computador
* home
* diretórios de rede
* lixeira 
* e as unidades montadas.

Você pode __mostrar__ ou __escondê-los__ individualmente ou todos de uma vez usando __dconf__.

## Ocultar todos os ícones do desktop
{% highlight bash %}
dconf write /org/mate/desktop/background/show-desktop-icons false
{% endhighlight %}

## Ocultar ícones individuais

Ocultar ícone do computador
{% highlight bash %}
dconf write /org/mate/caja/desktop/computer-icon-visible false
{% endhighlight %}

Ocultar ícone do diretório do usuário
{% highlight bash %}
dconf write /org/mate/caja/desktop/home-icon-visible false
{% endhighlight %} 

Ocultar ícone da rede
{% highlight bash %} 
dconf write /org/mate/caja/desktop/network-icon-visible false
{% endhighlight %}

Ocultar ícone da lixeira
{% highlight bash %}
dconf write /org/mate/caja/desktop/trash-icon-visible false
{% endhighlight %}

Ocultar volumes montados
{% highlight bash %}
dconf write /org/mate/caja/desktop/volumes-visible false
{% endhighlight %}

Substitua __false__ por __true__ para os ícones reaparecerem.

Mais informações: https://wiki.archlinux.org/index.php/MATE
