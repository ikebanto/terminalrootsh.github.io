---
layout: post
title: Como configurar o inetd.conf para habilitar uma porta
date: '2011-12-20T19:52:00.000-08:00'
description: Como configurar o inetd.conf para habilitar uma porta
main-class: 'linux'
tags:
- Debian
- Linux
- Servidores
- Redes
twitter_text: Como configurar o inetd.conf para habilitar uma porta
introduction: Como configurar o inetd.conf para habilitar uma porta
---
Quando você abre uma porta no Iptables, não significa que existirá um Daemon(um programa rodando em background gerenciado pelo sistema) para aquela porta.Para habilitar um Daemon para tal porta é necessário configurarmos o inetd.O inetd é um Daemon (geralmente os Daemons terminam com a letra "d", exemplo: o daemon do TCP é o tcdp, ou seja, um programa que gerencia o TCP), e o arquivo de configuração dele é o "inetd.conf".Precisei habilitar a inicialização do serviço de leitura de Sockets(usado em ligações de redes de computadores para um fim de um elo bidirecional de comunicação entre dois programas), e para isso precisava de uma porta "livre", a porta 8080 já tem um serviço pré-definido, de webcaching.
Se você visualisar o arquivo de serviços
{% highlight bash %}
gedit /etc/services
{% endhighlight %}
verás que na linha correspondente a porta 8080 terá seguinte informação
{% highlight bash %}
nome      porta/protocolo        apelido     #comentário 
http-alt 8080/tcp webcache # WWW caching service
http-alt 8080/udp   # WWW caching service
{% endhighlight %}
mas se verificar no nmap 127.0.0.1, mesmo que inicie algo nessa porta, não conseguira escutar nela, pois é necessário configurar o inetd.conf.Para editá-lo, abra-o com seu editor de preferência, para editar precisa ser root
{% highlight bash %}
su
gedit /etc/inetd.conf
{% endhighlight %}
assim que o mesmo estiver aberto, crie uma nova linha, sem comentário(sem o #) e inclua a porta 8080 (você também pode usar outra porta, mesmo se não houver nome para ela, só criar o nome no /etc/services) da seguinte maneira(serviço, tipo de soquete, protocolo, opções, usuário, caminho do serviço e o serviço opc.):
{% highlight bash %}
Meu_Servico    stream    tcp    nowait      root   /usr/bin/php5   /usr/bin/php5 -i
{% endhighlight %}
isso quer dizer que: dei o nome de "Meu_Servico"; informei que o tipo de socket será "stream"; o protocolo será "tcp"; a opção será "nowait"(para outros serviços que não seja tcp, usa-se "wait"); o nome do usuaŕio "marcos"(se quiser o root, deve digitá-lo nesse campo); o caminho do programa, nesse caso eu pus "/usr/bin/php" como exemplo, mas se você quiser deixar para qualquer programa, basta deixá-lo em branco; e o último campo é opcional, serve pra passar argumentos pro programa servidor que será rodado(ex.: /bin/bash -i, rodará em modo interativo.).
Obs.: Se você não for mais usar a porta, precisa comentar a linha utilizando o "#" na frente.
Após habilitar e salvar, agora basta reiniciar o inetd, no Debian (Não sei se também nas Debian-Likes(Ubuntu, Backtrack, Linux Mint) é o mesmo modo(caminho) de reiniciar), o comando é:
{% highlight bash %}
# /etc/init.d/openbsd-inetd restart
{% endhighlight %}, se você rodar um telnet na porta 8080, verás que já estará escutando:
{% highlight bash %}
# telnet localhost 8080
{% endhighlight %}
ao rodar esse comando, será encaminhado ao subshell, então dê um exit, para retornar ao Shell.
Pronto, agora a porta estará esperando pelo serviço.Espero que gostem e comentem!
