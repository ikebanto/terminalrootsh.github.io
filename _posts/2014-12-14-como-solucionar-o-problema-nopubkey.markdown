---
layout: post
title: "Como solucionar o problema NO_PUBKEY"
date: '2014-12-14T09:08:00.000-08:00'
description: "Como solucionar o problema NO_PUBKEY"
main-class: 'debian'
tags:
- Debian
- Dicas
- Debian-Likes
image: "http://4.bp.blogspot.com/-H6_V0gK4vEo/UXQARkiMTqI/AAAAAAAABd4/bSsCox2Ji-w/s72-c/debian-desktop-300x261.png"
twitter_text: "Como solucionar o problema NO_PUBKEY"
introduction: "Como solucionar o problema NO_PUBKEY"
---
![Blog Linux](http://4.bp.blogspot.com/-H6_V0gK4vEo/UXQARkiMTqI/AAAAAAAABd4/bSsCox2Ji-w/s320/debian-desktop-300x261.png "Blog Linux")
Tive esse problema ao tentar converter FLV para MP3 no Debian Squeeze. Percebi que estava com a versão do FFMPEG testing, então precisava instalá-lo diretamente do repositório de multimidia.que gera o erro abaixo ao tentar autualizar com apt-get update:
{% highlight bash %}
{% endhighlight %}
{% highlight bash %}
W: GPG error: http://www.debian-multimedia.org squeeze Release:
The following signatures couldn't be verified because the public key is not available: NO_PUBKEY 07DC563D1F41B907
{% endhighlight %}
1-adicione a linha do repositório no final do arquivo do source.list(>>):
{% highlight bash %}
echo 'deb http://www.las.ic.unicamp.br/pub/debian-multimedia/ stable main' >> /etc/apt/sources.list
{% endhighlight %}
2-Depois instale o debian-keyring package:
{% highlight bash %}
apt-get install debian-keyring
{% endhighlight %}
3-Depois execute esse comando, onde [numero-da-chave] é o número que vc obteve do erro
{% highlight bash %}
gpg --keyring /usr/share/keyrings/debian-keyring.gpg -a --export [numero-da-chave] |apt-key add -
{% endhighlight %}
4-Agora rode novamente o update e o erro não existirá mais
{% highlight bash %}
apt-get update
{% endhighlight %}
Comente!
