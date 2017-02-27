---
layout: post
title: "Configurando a placa de rede"
date: '2011-11-14T18:16:00.000-08:00'
description: "Configurando a placa de rede"
main-class: 'linux'
tags:
- Linux
- Redes
twitter_text: "Configurando a placa de rede"
introduction: "Configurando a placa de rede"
---
Então, minha conexão possui autenticação no roteador e meu modem em modo bridge, porém um dia precisei configurar a autenticação no computador para poder disponibilizar via meu servidor de DynDNS com a porta 80 o acesso ao meu PC (da pasta /var/www), utilizando o Servidor Apache, para isso configuei meu Roteador também em modo Brigde e depois utilizei o comando
{% highlight bash %}
$ pppoeconf
{% endhighlight %}
após configurado, aê sim, ao digitar o endereço do meu DynDNS, batia na porta 80 do meu PC e não mais no Roteador (Utilizando o No-IP).Depois que utilizei, decidí voltar a configuração pro Roteador(reconfigurei o Roteador para modo Router e conectou), porém após reiniciar o PC, a máquina não conectava mais na Internet, então fiz o seguinte para reconectar:
1-vi as configurações da conexão
2-Desativei a placa de rede.
3-reconfigurei do modo exato, reativando-a (já sabia quais as configurações de IP e Máscara, pois utilizo muito isso).
4-Setei o DNS(na verdade entreguei a tarefa pro roteador, pois ele reconhece o DNS do Provedor que utilizo, automaticamente)
5-Setei o gateway como padrão(endereço do roteador)
6-revisei as configurações da placa de rede
7- e depois tentei pingar no Gooogle com limite de ping 4, para testar a conexão.
e então, conseguí reestabelecer conexão com a Internet.Porém toda vez que eu reiniciava meu PC, as configurações eram perdidas, cheguei até a criar um Script para não perder muito tempo:
{% highlight bash %}
#!/bin/bash
echo Livre Xpert TI irá reconfigurar sua rede, pressione ENTER para iniciar a configuração, ou Ctrl+c para desistir
read resposta
ifconfig
ifconfig eth0 down
ifconfig eth0 10.1.1.2 netmask 255.0.0.0 up
echo nameserver 10.1.1.1
route add default gw 10.1.1.1 dev eth0
ifconfig
ping -c4 www.google.com
{% endhighlight %}
Mas isso tava me enchendo o saco, então procurei minhas configurações de standart automático, e encontrei no seguinte endereço:
{% highlight bash %}
$ vim /etc/network/interfaces
{% endhighlight %}
E estava com a seguinte configuração:
{% highlight bash %}
auto lo
iface lo inet loopback
auto dsl-provider
iface dsl-provider inet ppp
pre-up /sbin/ifconfig eth0 up # line maintained by pppoeconf
provider dsl-provider
auto eth0
iface eth0 inet manual
{% endhighlight %}
E então alterei para:
{% highlight bash %}
auto lo
iface lo inet loopback
iface eth0 inet static
address 10.1.1.2
netmask 255.0.0.0
gateway 10.1.1.1
auto eth0
{% endhighlight %}
Pronto, não tive mais problema, fácil, né?Abraço a todos e até a próxima!
