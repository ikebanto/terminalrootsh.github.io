---
layout: post
title: "Utilizando FTP por comando"
date: '2015-01-04T12:39:00.001-08:00'
description: "Utilizando FTP por comando"
main-class: 'linux'
tags:
- Linux
- Servidores
- GNU
- Redes
image: "http://1.bp.blogspot.com/-xAtPNrIAZmA/VDsh_jH6FUI/AAAAAAAAA2I/hd13kwJ4_9I/s72-c/new-logo-tr.png"
twitter_text: "Utilizando FTP por comando"
introduction: "Utilizando FTP por comando"
---
![Blog Linux](http://1.bp.blogspot.com/-xAtPNrIAZmA/VDsh_jH6FUI/AAAAAAAAA2I/hd13kwJ4_9I/s320/new-logo-tr.png "Blog Linux")
 Sabemos que o melhor software gráfico para manipular arquivos via FTP é o FileZilla, porém sabemos que pra fazermos scripts em Shell, precisamos ter um vasto conhecimento em comandos para poder executálos, segue uma lista de comandos úteis para FTP que precisamos saber.
FTP significa File Transfer Protocol (Protocolo de Transferência de Arquivos), e é uma forma bastante rápida e versátil de transferir arquivos (também conhecidos como ficheiros), sendo uma das mais usadas na Internet.Pode referir-se tanto ao protocolo quanto ao programa que implementa este protocolo (Servidor FTP, neste caso, tradicionalmente aparece em letras minúsculas, por influência do programa de transferência de arquivos do Unix).Caso você deseje tornar seu computador um servidor FTP, para poder acessá-lo e pegar os arquivos do seu PC via FTP, você precisa instalar o ProFTPD (em Debians e Debians-Like, obs.: precisar configurar o arquivo de configuração para restringir acessos e depois reiniciá-lo, não vou pôr aqui, pois o post é somente sobre os comandos do FTP, mas você pode pesquisar na internet, é bem simples!):{% highlight bash %}
# apt-get install proftpd
{% endhighlight %}
Para conectar ao FTP de um servidor, executaremos conforme exemplo abaixo, para Hostname ou IP, respectivamente, será solicitado o usuário e a senha:
{% highlight bash %}
# ftp algumsite.com.br
# ftp 192.168.1.107
{% endhighlight %}
Listar os arquivos: {% highlight bash %}
ftp> ls
{% endhighlight %}Fazer Download de um arquivo: {% highlight bash %}
ftp> get index.php
{% endhighlight %}Fazer Upload de um arquivo: {% highlight bash %}
ftp> put arquivo.html
{% endhighlight %}Entrar num diretório: {% highlight bash %}
ftp> cd pasta
{% endhighlight %}Deletar um arquivo: {% highlight bash %}
ftp> delete arquivo.php
{% endhighlight %}Sair(Deslogar): {% highlight bash %}
ftp> exit
{% endhighlight %}
Entre outros menos utilizados!
