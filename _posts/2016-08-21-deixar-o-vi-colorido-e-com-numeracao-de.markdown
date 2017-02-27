---
layout: post
title: "" Deixar o VI colorido e com numeracao de linhas""
date: '2016-08-21T10:17:00.000-07:00'
description: "" Deixar o VI colorido e com numeracao de linhas""
main-class: 'misc'
tags:
- Dicas
- VIM
image: "https://2.bp.blogspot.com/-CCmYioKkjh4/V7JIp1SHcqI/AAAAAAAAAx4/DCnEYi7VlCsPiqM5URlGkJI51qIRk3o4wCLcB/s72-c/vim_console.png"
twitter_text: "" Deixar o VI colorido e com numeracao de linhas""
introduction: "" Deixar o VI colorido e com numeracao de linhas""
---
![Blog Linux](https://2.bp.blogspot.com/-CCmYioKkjh4/V7JIp1SHcqI/AAAAAAAAAx4/DCnEYi7VlCsPiqM5URlGkJI51qIRk3o4wCLcB/s320/vim_console.png "Blog Linux")
Dica rápida:
{% highlight bash %}
vi /etc/vim/vimrc
{% endhighlight %}  
Com o arquivo aberto, corra com o cursor até abaixo da linha set ruler, pressione "i" sem as aspas e digite as linhas:  
{% highlight bash %}
set nu
syntax on 
{% endhighlight %}
Via: PedroHNeto
