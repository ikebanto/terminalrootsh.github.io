---
layout: post
title: "Criando arquivos .tar.gz com senha"
date: '2014-12-20T04:05:00.002-08:00'
description: "Criando arquivos .tar.gz com senha"
main-class: 'linux'
tags:
- Linux
- Dicas
- GNU
image: "http://4.bp.blogspot.com/-fS4Dnfucykc/VJVlrg9hDUI/AAAAAAAABDE/cng8ePUSzuo/s72-c/Lock-GPG.square.png"
twitter_text: "Criando arquivos .tar.gz com senha"
introduction: "Criando arquivos .tar.gz com senha"
---
![Blog Linux](http://4.bp.blogspot.com/-fS4Dnfucykc/VJVlrg9hDUI/AAAAAAAABDE/cng8ePUSzuo/s320/Lock-GPG.square.png "Blog Linux")
Aqui vai uma dica para deixar seus arquivos compactados em tar.gz com senha, na verdade o arquivo será transformado num .gpg, segue:
Para compactar:
Cria o tar(-cf, C de Create) e (f de Files), logo (-cf Create Files, serve pra memorizar)
{% highlight bash %}
$ tar -cf nome_que_vc_escolher.tar arquivo_ou_pasta
{% endhighlight %}
Agora transforma ele em tar.gz
{% highlight bash %}
$gzip -9 arquivo_que_vc_criou.tar
{% endhighlight %}
e agora usa-se o gpg pôr senha:
{% highlight bash %}
$ gpg -c arquivo.tar.gz
{% endhighlight %}
Descompactando, é preciso pôr a senha pré criada, quando ele solicitar
{% highlight bash %}
$ gpg arquivo.tar.gz.gpg
{% endhighlight %}
Agora extrair(-xf X de eXtract e F de Files, eXtract Files)
{% highlight bash %}
$ tar -xf arquivo.tar.gz
{% endhighlight %}
Pronto!
