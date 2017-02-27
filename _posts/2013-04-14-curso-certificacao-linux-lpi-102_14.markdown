---
layout: post
title: "'Curso Certificação Linux LPI-102: Configurando Conexões PPPoE no Linux'"
date: '2013-04-14T09:18:00.000-07:00'
description: "'Curso Certificação Linux LPI-102: Configurando Conexões PPPoE no Linux'"
main-class: 'linux'
tags:
- Linux
- LPI
- Redes
image: "http://2.bp.blogspot.com/-JFIx4QoJa-Q/UWqtgQeaooI/AAAAAAAABag/3ZRS3N5pviM/s72-c/figura-1.jpg"
twitter_text: "'Curso Certificação Linux LPI-102: Configurando Conexões PPPoE no Linux'"
introduction: "'Curso Certificação Linux LPI-102: Configurando Conexões PPPoE no Linux'"
---
 PPPoE (sigla em inglês para Point-to-Point Protocol over Ethernet) é um protocolo de rede para conexão de usuários em uma rede Ethernet para alcançar a Internet. Seu uso é típico nas conexões de um ou múltiplos usuários em uma rede LAN à Internet através de uma linha DSL, de um dispositivo wireless (sem fio) ou de um modem de cabo broadband comum. O protocolo PPPoE deriva do protocolo PPP. O PPPoE estabelece a sessão e realiza a autenticação com o provedor de acesso a Internet. 
 A maioria dos modems ADSL vendidos no Brasil são roteadores, no entanto existem alguns modelos que só funcionam no modo Bridge, ou seja, no Windows® por exemplo, você usaria um discador para conectar-se.Você precisará de um provedor, usuário e senha para autenticação, e também, naturalmente, uma placa de rede para ligar ao modem. 
 
Comando para configurar o pppoe
 {% highlight bash %}
# pppoeconf
{% endhighlight %}
 
Atenção: O pacote pppoe e pppoeconf já vem instalados por padrão, mas se não estiver, instale-o com:
 {% highlight bash %}
# apt-get install pppoe pppoeconf
{% endhighlight %}
 
   
![Blog Linux](http://2.bp.blogspot.com/-JFIx4QoJa-Q/UWqtgQeaooI/AAAAAAAABag/3ZRS3N5pviM/s320/figura-1.jpg "Blog Linux")
  
 
Um programa com uma interface semi-gráfica baseada em texto lhe guiará através dos passos para a configuração, que são elas:
 Confirmar se sua placa de rede foi detectada. Digitar seu nome de usuário (fornecido pelo provedor). Digitar sua senha (fornecida pelo provedor). Se você já possui uma conexão PPPoE configurada, ele perguntará se você deseja modificar sua configuração atual. Responda o padrão em todas as perguntas (basta digitar enter), ou mude, caso saiba o que está fazendo. Limited MSS problem - choose "Yes".
 O programa perguntará se você deseja ativar a conexão durante o boot, provavelmente você vai querer responder Sim.
 Finalmente, perguntará se você deseja estabilizar a conexão imediatamente. 
Pronto isto, provavelmente você sua conexão com a internet já estará funcionando.
Controle manual da conexão
Para iniciar sua conexão (se já não estiver ativa), digite num terminal:
{% highlight bash %}
# pon dsl-provider
{% endhighlight %}
Icones/parar.png Para parar a conexão (se estiver ativa), digite no terminal:
{% highlight bash %}
# poff dsl-provider
{% endhighlight %}
Problemas
Se sua conexão parecer não funcionar, tente ver o log. Para isto, digite num terminal:
{% highlight bash %}
# plog
{% endhighlight %}
Problemas com o boot
Se você tiver que rodar o pppoeconf a cada boot por que a conexão não está sendo ativada, você pode tentar:
{% highlight bash %}
# /etc/network/interfaces
{% endhighlight %}
Edite o arquivo como abaixo: 
{% highlight bash %}
# added by pppoeconf
auto eth0
iface eth0 inet manual
pre-up /sbin/ifconfig eth0 up # line maintained by pppoeconf
auto dsl-provider
iface dsl-provider inet ppp
provider dsl-provider
{% endhighlight %}
Para configurações com autenticação no modem ou roteador, o certo é: 
{% highlight bash %}
{% endhighlight %}{% highlight bash %}
auto lo
iface lo inet loopback
iface eth0 inet static
address 10.1.1.2
netmask 255.0.0.0
gateway 10.1.1.1
auto eth0 
{% endhighlight %}ou, manualmente com um pequeno script: 
{% highlight bash %}
#!/bin/bash
echo vamos reconfigurar sua rede, pressione ENTER para iniciar a configuração, ou Ctrl+c para desistir
read resposta
sudo ifconfig
sudo ifconfig eth0 down
sudo ifconfig eth0 10.1.1.2 netmask 255.0.0.0 up
echo nameserver 10.1.1.1
sudo route add default gw 10.1.1.1 dev eth0
sudo ifconfig
ping -c4 www.google.com
{% endhighlight %} Se isto não funcionar, edite o arquivo /etc/rc.local, e antes da ultima linha ("exit 0"), adicione: 
ifconfig eth0 up
pon dsl-provider
Logs de erro
você tiver problemas com sua conexão, talvez encontre algumas informações úteis nos logs do sistema
{% highlight bash %}
# dmesg
{% endhighlight %}
Fonte: wiki.ubuntu-br.org
