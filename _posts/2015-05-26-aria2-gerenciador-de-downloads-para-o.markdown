---
layout: post
title: "Aria2, Gerenciador de Downloads para o Terminal"
date: '2015-05-26T18:04:00.000-07:00'
description: "Aria2, Gerenciador de Downloads para o Terminal"
main-class: 'linux'
tags:
- Linux
- Dicas
image: "http://1.bp.blogspot.com/-WDiSSXJXnhI/VWUX2rUVngI/AAAAAAAABS4/1x0oPvzbEkk/s72-c/aria2-377x250.png"
twitter_text: "Aria2, Gerenciador de Downloads para o Terminal"
introduction: "Aria2, Gerenciador de Downloads para o Terminal"
---
![Blog Linux](http://1.bp.blogspot.com/-WDiSSXJXnhI/VWUX2rUVngI/AAAAAAAABS4/1x0oPvzbEkk/s320/aria2-377x250.png "Blog Linux")
Aria2 é um gerenciador de download leve com suporte para HTTP / HTTPS, FTP, BitTorrent e Metalink.
Tem um monte de opções para personalizar os downloads, permite pausar  um download e, em seguida, continuá-lo, você pode baixar a partir de  múltiplos protocolos, tem todas as características de um BitTorrent.
Instalação (pra quem tiver o sudo instalado, utilize-o):Em Debian, Ubuntu, Mint,…:
{% highlight bash %}
apt-get install aria2
{% endhighlight %}
Fedora e derivados:
{% highlight bash %}
yum install aria2
{% endhighlight %}
Arch e similares:
{% highlight bash %}
pacman -S aria2
{% endhighlight %}
Utilização:Download de arquivo:{% highlight bash %}
aria2c [url]
{% endhighlight %}
Limitando a velocidade do download (vc pode substituir 45k pela taxa que deseja, podendo ser em bytes, kilobytes e megabytes):
{% highlight bash %}
aria2c --max-overall-download-limit=45K http://sourceforge.net/projects/terminalroot/files/terminalroot.tar.gz
{% endhighlight %}
Para pausar um download, basta enviar um Ctrl + C, e para reiniciar do local que pausou, basta começar com -c:
{% highlight bash %}
aria2c -c [diretorio_arquivo_pausado]
{% endhighlight %}
Baixar vários arquivos:
{% highlight bash %}
aria2c -Z [url1] [url2] [...]
{% endhighlight %}
Mais informações no site do projeto: http://aria2.sourceforge.net/
