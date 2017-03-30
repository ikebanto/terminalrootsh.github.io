---
layout: post
title: "Como ver a estrutura de diretórios em árvore"
date: '2014-10-19T14:19:00.004-07:00'
image: '/assets/img/shell-script/tree-output-2.png'
description: "Veja a árvore de diretórios completa."
main-class: 'linux'
tags:
- Linux
- Comandos
---

![Como ver a estrutura de diretórios em árvore](/assets/img/shell-script/tree-output-2.png "Como ver a estrutura de diretórios em árvore")

Se você usa Debian e similares, instale assim
{% highlight bash %}
apt-get install tree
{% endhighlight %}

## Sinopse
{% highlight bash %}
tree 
tree /path/to/directory 
tree [options]
tree [options] /path/to/directory 
{% endhighlight %}

Para listar o conteúdo do __/etc__ em um formato de árvore
{% highlight bash %}
tree /etc 
{% endhighlight %}

## Mais informacões
{% highlight bash %}
man tree
{% endhighlight %}
