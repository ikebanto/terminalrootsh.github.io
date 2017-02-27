---
layout: post
title: "Conectando por comando com chave WPA/WPA2 a Wireless"
date: '2014-12-14T09:12:00.002-08:00'
tags:
- Debian
- Linux
- Redes
blogger_id: tag:blogger.com,1999:blog-2422865715758349944.post-4366284281068248445
blogger_orig_url: http://www.terminalroot.com.br/2014/12/conectando-por-comando-com-chave.html
---
Bem, no outro post Conectando em Redes Wireless no Linux por comando mostrei como conectar por comando em chave WEP que é bem simples, nesse post aqui vou explicar para chaves WAP ou WAP2, vamos utilizar a mesma lógica porém um pouco menos fácil.Primeiramente precisamos nos certificar que o roteador está configurado corretamente:
Region:Brazil
Channel:Automatic(que no caso conectou no Canal 1)
Rate:54Mbps(802.11g)
Security Type:WPA-PSK/WPA2-PSK
Security Option:WPA2-PSK
Encryption:Automatic(que pegou o TKIP).
PSK Passphrase:SUA_SENHA
e também que o pacote wpa_supplicant está instalado:
{% highlight bash %}
# su
# apt-get install wpasupplicant
{% endhighlight %}
, caso sua distribuição tenha o sudo instalado, dê preferência em utilizar o root (# su).Então após listar as redes disponíveis com o "iwlist wlan0 scan" verifique o nome do ESSID da rede que deseja se conectar, certifique-se da senha e execute os comandos abaixo:
{% highlight bash %}
# wpa_passphrase NOME SENHA > /etc/wpa_supplicant/wpa_supplicant.conf
# wpa_supplicant -i wlan0 -c /etc/wpa_supplicant/wpa_supplicant.conf -B -D wext
{% endhighlight %}
Configure sua placa wireless inicialmente com um IP somente para setar a rede.
{% highlight bash %}
# ifconfig wlan0 down
# ifconfig wlan0 192.168.1.107 netmask 255.255.255.0 up
{% endhighlight %}
Como o DNS em conexões pppOe está setado no local da autenticação, basta direcionar seu DNS local pra lá, no caso o Gateway(se sua autenticação estiver sendo em sua máquina, verifique com o seu PROVEDOR quais os dados de DNS), em alguns casos pode até pular esta parte:
{% highlight bash %}
# echo nameserver 192.168.1.1
{% endhighlight %}
Defina o Gateway, que no caso será o mesmo:
{% highlight bash %}
# route add default gw 192.168.1.1 dev wlan0
{% endhighlight %}
Para tornar inicializável, edite o arquivo "/etc/network/interfaces", com o código abaixo:
{% highlight bash %}
auto lo
iface lo inet loopback
auto wlan0
iface wlan0 inet dhcp
wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
{% endhighlight %}
Verifique que informamos acima que pegará o IP via DHCP(automaticamente), caso não seja seu caso, verifique o post Conectando em Redes Wireless no Linux por comando como configurar como static(Estático), porém considerando que seu Roteador está como DHCP, finalize com o comando abaixo:
{% highlight bash %}
# dhclient wlan0
{% endhighlight %}
Verifique agora se restabeleceu a conexão, em alguns casos ainda é preciso reiniciar o serviço de rede, para isso, rode esse comando:
{% highlight bash %}
# /etc/init.d/networking restart
{% endhighlight %}
Caso você não deseje usar comando e sim um aplicativo gráfico que voçê pode sair clicando e ele fazer tudo, instale o WICD ou o Network Manager:{% highlight bash %}
# apt-get install wicd
# apt-get install network-manager
{% endhighlight %}
Prontinho, com isso você deverá conectar!Abraços e até a próxima onde explicarei como quebrar as chaves WEP e WPA/WPA2, e depois como criar uma antena USB para alta conectividade com ferramentas caseiras!
