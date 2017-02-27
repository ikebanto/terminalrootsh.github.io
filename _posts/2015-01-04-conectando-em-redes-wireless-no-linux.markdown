---
layout: post
title: Conectando em Redes Wireless no Linux por comando
date: '2015-01-04T12:29:00.000-08:00'
description: Conectando em Redes Wireless no Linux por comando
main-class: 'linux'
tags:
- Linux
- GNU
- Redes
image: http://4.bp.blogspot.com/-vIA-uEngJP0/VKmigv3lVoI/AAAAAAAABIA/ha1OOENhyPI/s72-c/wifi.jpg
twitter_text: Conectando em Redes Wireless no Linux por comando
introduction: Conectando em Redes Wireless no Linux por comando
---
![Blog Linux](http://4.bp.blogspot.com/-vIA-uEngJP0/VKmigv3lVoI/AAAAAAAABIA/ha1OOENhyPI/s320/wifi.jpg "Blog Linux")
Nesse post vou iniciar um processo de rede wireless para executarmos por comando,  comando é bom, pois poderemos criar Scripts em Shell, caso precisarmos, no final desse post tem um modo mais simples, mais vou explicar primeiramente "tudo na unha".
Obs.: Esse processo é para:
Region:Brazil
Channel:Automatic(que no caso conectou no Canal 1)
Rate:54Mbps(802.11g)
Mode:Automatic(managed)
Router
SSID Broadcast
Security Type:WEP
Security Option:Automatic
WEP Key Format:Hexadecimal(pode ser a ASCII também)
Key Type:64bits
para 1 chave, mas esses dados são podem estar diferentes, o mais importante é que seja WEP, pois WAP e WAP2 é outro processo(que será de outro post) e utilizaremos o wpa_passphrase e wpa_supplicant.
Primeiramente temos de verificar se tem algum aplicativo gráfico rodando, se houver, precisamos parar, remover o modo de incialização e remover ele(pode ser o Network Manager ou WICD).
{% highlight bash %}
# su
# /etc/init.d/network-manager stop
# update-rc.d -f network-manager remove
# apt-get remove network-manager
{% endhighlight %}
Em distros similares a Debian precisamos também precisa do root, ao invés do sudo, isso é importante.
Certifique-se que sua interface tá configurada pra receber o IP, máscara, gateway..de forma automática:
{% highlight bash %}
# gedit /etc/network/interfaces
{% endhighlight %}
esse arquivo tem de haver as linhas descomentadas:
{% highlight bash %}
auto wlan
iface wlan0 inet dhcp
{% endhighlight %}
Agora verificamos se há a placa wireless ativa, porém provavelmente seu ESSID estará vazio(ESSID:off/any), pois não não o definimos, porém verificaremos quais ESSID estão disponíveis (listar as redes wireless disponíveis):
{% highlight bash %}
# iwconfig
# iwlist wlan0 scan
{% endhighlight %}
Também verificaremos que estamos sem número IP e sem máscara:
{% highlight bash %}
# ifconfig
{% endhighlight %}
Então desativamos a plava wireless, e ativamos setando o IP e a máscara de acordo com nossa rede(o ponto de acesso, Access Point), em alguns casos, não precisa setar o IP manualmente, pois o Roteador entregará o IP automaticamente e a Interface está setada pra pegar automaticamente via DHCP, conforme nas configurações de network/interfaces, citada acima:
{% highlight bash %}
# ifconfig wlan0 down
# ifconfig wlan0 192.168.1.220 netmask 255.255.255.0 up
# route add default gw 192.168.1.1 dev wlan0
{% endhighlight %}
Se na listagem da rede esta com (Encryption key:off) significa estar SEM senha, basta executar esse comando para conectar:
{% highlight bash %}
# iwconfig wlan0 essid NOME
{% endhighlight %}
Se na listagem da rede esta com (Encryption key:on) significa estar COM senha, basta executar esse comando para conectar:
{% highlight bash %}
# iwconfig wlan0 essid NOME key SENHA
{% endhighlight %}
Isso foi o processo "na unha", ou seja, se você reiniciar o PC essas configrações serão perdidas, para vc automatizar esse processo, para não precisar todavia ter de reconfigurar, você pode pôr tudo no /etc/network/interfaces, assim:
{% highlight bash %}
# gedit /etc/network/interfaces
{% endhighlight %}
e deverá configurar o arquivo que se abriu, e nem precisará fazer toda a etapa acima:
{% highlight bash %}
auto lo
iface lo inet loopback
auto wlan0
iface wlan0 inet static
address INFORME_O_IP
netmask INFORME_A_MASCARA
gateway INFORME_O_GATEWAY
wireless-rate INFORME_O_RATE_(exemplo: 54M)
wireless-essid INFORME_ESSID
wireless-mode INFORME_O_RATE_(exemplo: managed)
wireless-key INFORME_A_SENHA
{% endhighlight %}
Ok, até apróxima que é para WAP e WAP2 e depois como quebrar essas chaves, caso existam.
