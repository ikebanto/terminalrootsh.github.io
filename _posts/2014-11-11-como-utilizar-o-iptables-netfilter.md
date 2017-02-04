---
layout: post
title: Como utilizar o Iptables (Netfilter)
date: '2014-11-11T17:39:00.003-08:00'
description: Como utilizar o Iptables (Netfilter)
main-class: 'linux'
color: '#3b5998'
author: Marcos Oliveira
tags:
- Linux
- Servidores
- Redes
modified_time: '2014-11-11T17:39:45.061-08:00'
thumbnail: "//3.bp.blogspot.com/-kcbYnGSBR0g/VGK6LwOXfII/AAAAAAAABCE/UFqTL5kQeNk/s72-c/netfilter-iptables-traffic-shaping.jpg"
twitter_text: Como utilizar o Iptables (Netfilter)
introduction: Como utilizar o Iptables (Netfilter)
---

<p>
<div class="separator" style="clear: both; text-align: center;"><a href="https://3.bp.blogspot.com/-kcbYnGSBR0g/VGK6LwOXfII/AAAAAAAABCE/UFqTL5kQeNk/s1600/netfilter-iptables-traffic-shaping.jpg" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" src="//3.bp.blogspot.com/-kcbYnGSBR0g/VGK6LwOXfII/AAAAAAAABCE/UFqTL5kQeNk/s320/netfilter-iptables-traffic-shaping.jpg" /></a></div>
<p>E aê galera!?Eu estava configurando meu<span style="color: blue;"> Firewall</span> hoje e decidi escrever um Post sobre <span style="color: red;">Iptables</span> pra documentar algumas informações.</p>
<blockquote class="tr_bq"><b>Iptables é o nome da ferramenta do espaço do usuário que permite a criação de regras de firewall e NATs. Apesar de, tecnicamente, o iptables ser apenas uma ferramenta que controla o módulo netfilter(O <span style="color: purple;">netfilter</span> é um módulo que fornece ao sistema operacional Linux as funções de firewall, NAT e log dos dados que trafegam por rede de computadores.), o nome "iptables" é frequentemente utilizado como referência ao conjunto completo de funcionalidades do netfilter. O iptables é parte de todas as distribuições modernas do Linux.</b></blockquote><b>
</b><i><b>Ao reiniciar o computador as Regras de Firewall são perdidas, para isso é preciso criar um script para executar sempre que o computador for iniciado.</b></i>
<b>
</b><b>Para verificar quais regras estão criadas, se existir, o comando é:</b>
{% highlight bash %}
# iptables -L
{% endhighlight %}, se não retornar nada é porque o pacote não está instalado, então você pode instalá-lo pelo comando:
{% highlight bash %}
# apt-get install iptables
{% endhighlight %}
<b>
</b><b></b>
<p>Rejeitar pacotes de uma porta:</p>
{% highlight bash %}
# iptables -A INPUT -p tcp --dport 445 -j DROP
{% endhighlight %}

Aceitar pacotes de uma porta:
{% highlight bash %}
# iptables -A INPUT -p tcp --dport 445 -j ACCEPT
{% endhighlight %}
<b>
</b><b>Desativar o iptables, isso libera todas as portas:</b>
{% highlight bash %}
# iptables -F
{% endhighlight %}

Essa regra abaixo fecha todas as portas, porém voçê conecta a internet normalmente, mas aplicativos como Apache por exemplo não funcionará no localhost.
{% highlight bash %}
iptables -A INPUT -p tcp --syn -j DROP
{% endhighlight %}, aqui abaixo a mesma regra, porém para o protocolo UDP.{% highlight bash %}
# iptables -A INPUT -i ppp0 -p udp --dport 0:30000 -j DROP
{% endhighlight %}
<b>
</b><b>Lembrando que as tabelas do IPTABLES são lidas de cima pra baixo, ou seja, se você quiser fechar todas as portas e liberar somente o apache a porta 80, você precisa primeiro criar a regra que libera a porta 80 (ou as portas que você deseja), pra só depois fechar todas as outras, exemplo:</b>
{% highlight bash %}
# iptables -A INPUT -p tcp --destination-port 80 -j ACCEPT
{% endhighlight %}, depois:{% highlight bash %}
iptables -A INPUT -p tcp --syn -j DROP
{% endhighlight %}

Para acessar pacotes de determinados IPs de uma rede interna, ou de uma determinada rede, você usar os comandos abaixo:
{% highlight bash %}
# iptables -A INPUT -p tcp --syn -s 192.168.1.107/255.255.255.0 -j ACCEPT
iptables -A INPUT -p tcp --syn -s 192.168.0.0/255.255.255.0 -j ACCEPT
{% endhighlight %}, aceitar as requisições do IP 192.168..107 e no comando seguinte, aceitará todas as requisições da rede interna, se logo depois vc fechar tudo pra internet, a regra de aceitar será válida, o inverso não.
<b>
</b><b>Para configurações de compartilhamento, seria regras de NAT,assim:</b>
<b>
</b><i><b>Para compartilhar a conexão do modem com a rede local:</b></i>
{% highlight bash %}
# modprobe iptable_nat
iptables -t nat -A POSTROUTING -o ppp0 -j MASQUERADE
echo 1 > /proc/sys/net/ipv4/ip_forward
{% endhighlight %}
<b>
</b><i><b>Para compartilhar uma conexão via ADSL ou cabo instalada na eth0:</b></i>
{% highlight bash %}
# modprobe iptable_nat
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
echo 1 > /proc/sys/net/ipv4/ip_forward
{% endhighlight %}
<b>
</b><i><b>Para desativar o compartilhamento, você deve usar o comando :</b></i>
{% highlight bash %}
# iptables -t nat -F.
{% endhighlight %}

Uma observação é que estas regras não incluem um servidor DHCP, você deve configurar os clientes com endereço IP fixo ou então ativar o serviço DHCPD na sua distribuição.Será necessário também configurar os DNS, se não souber os endereços do seu provedor, você pode usar os DNS públicos do Google 8.8.8.8 e 8.8.4.4, mais informações sobre esses DNS Clique Aqui.

Mais uma linha interessante de se adicionar, que protege contra pacotes danificados (usados em ataques DoS por exemplo) é:{% highlight bash %}
# iptables -A FORWARD -m unclean -j DROP
{% endhighlight %}, (esta linha deve ser adicionada antes das demais).
Depois de todas as regras criadas, voçê criar um script em Shell e gravar na pasta /usr/bin/ com o nome que você deseja e poderá executar esse nome no terminal que automaticamente, será criadas as regras, lembrando que para isso tem de estar com permissão de execução e deve ser o usuário root.Você também pode torná-lo inicializável, em Debian e Debian-Likes(Ubuntu, Linux Mint,...) com o comando:{% highlight bash %}
update-rc.d nome_do_script defaults
{% endhighlight %}, para excluir basta trocar o defaults por remove.

Para fazer um forward(Redirecionamento, exemplo: uma solicitação de jogo na porta 27020, você quer que seja direcionada ao PC 192.168.1.107 da sua rede)com Iptables.
{% highlight bash %}
# modprobe iptable_nat
iptables -t nat -A PREROUTING -i etho -p tcp --dport 22 -j DNAT --to-dest 192.168.1.107
iptables -A FORWARD -p tcp -i eth0 --dport 22 -d 192.168.1.107 -j ACCEPT
{% endhighlight %}
<p>Você pode repetir o comando várias vezes para direcionar varias portas diferentes para várias máquinas. Naturalmente uma mesma porta não pode ser fowardada duas vezes.Para um range de portas, o Counter Strike pode usar mesmo da 27015 até 27030, se você não qual porta dessa range do seu colega está aberta, então você pode abrir esta faixa de portas assim:</p>
{% highlight bash %}
# iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 27015:27030 -j DNAT --to-dest 192.168.1.107
iptables -A FORWARD -p tcp -i eth0 --dport 27015:27030 -d 192.168.1.107 -j ACCEPT
{% endhighlight %}
<b>
</b><b>Eu crie um script em PHP para verificar quais portas estão abertas da porta 1 até a 1024, se gue abaixo:</b>
{% highlight bash %}
$servidor="127.0.0.1";    
for($i=1;$i<1024;$i++){
$con = fsockopen($servidor, $i, $errono, $errostr, 3);
if($con){
echo 'A porta '.$i.' está aberta!
';
}
}
fputs($con, "Portas");
fclose($con);
{% endhighlight %}
<b>
</b><b>Mas você pode utilizar o <u><span style="color: blue;">Nmap</span></u> para verificar quais portas estão abertas no seu micro, para instalá-lo no Debian e Debian-Likes, basta:</b>
{% highlight bash %}
# apt-get install nmap
{% endhighlight %}, para analisar em rede interna use o IP interno, para análise à internet use seu IP externo, para loopback use:
{% highlight bash %}
# nmap 127.0.0.1
{% endhighlight %}
<b>
</b><b>Há também um serviço online que tem como você efetuar testes de portas e de invasões, eu uso muito ele, é o <a href="http://www.grc.com/">http://www.grc.com/</a></b>
<blockquote class="tr_bq"><b>-clique em Services</b>
<p>-depois clique em ShieldsUP</p>
<p>-depois clique em proceed</p>
<p>-clique em "Proceed"</p>
<b>- e inicie o teste clicando em "All Service Ports".</b></blockquote><b>
</b><b>É isso aê, espero que gostem e comentem.</b>
<span style="font-size: x-small;"><b>Fonte:<i>www.hardware.com.br</i></b></span>

</p>
