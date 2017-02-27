---
layout: post
title: "Algumas dicas de CSS 3"
date: '2011-11-03T15:59:00.000-07:00'
description: "Algumas dicas de CSS 3"
main-class: 'html'
tags:
- CSS
twitter_text: "Algumas dicas de CSS 3"
introduction: "Algumas dicas de CSS 3"
---
Criar textos com sombras, exemplo:
{% highlight bash %}
text-shadow:2px 2px #000000;
{% endhighlight %}
Criar bordas arredondadas, antes tem de por a propriedade border:Xpx cor;, caso nao seja algo já com bordas, ex.:
{% highlight bash %}
border-radius:10px;
{% endhighlight %}
Arredondar a bordar superior esquerda, exemplo:
{% highlight bash %}
border-top-left-radius:30px;
{% endhighlight %}
Arredondar a bordar inferior direita, exemplo:
{% highlight bash %}
border-bottom-right-radius:30px;
{% endhighlight %}
Sombreamento em bordas(divs por exemplo):
{% highlight bash %}
box-shadow:0px 0px 20px #000000;
{% endhighlight %}
para sombreamento interno, usa-se a propriedade INSET, ex.:
{% highlight bash %}
box-shadow:inset 0 0 10px #666;
{% endhighlight %}
entre outras que serão postadas.
