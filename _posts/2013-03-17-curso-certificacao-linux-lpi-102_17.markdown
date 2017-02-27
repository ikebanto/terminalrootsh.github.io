---
layout: post
title: 'Curso Certificação Linux LPI-102: Utilitários e Ferramentas do TCP/IP'
date: '2013-03-17T06:51:00.000-07:00'
tags:
- Linux
- LPI
image: http://3.bp.blogspot.com/-80LEOjyKtRM/UUXJBDInHmI/AAAAAAAABNM/TtKGBucfO5s/s72-c/network-server.png
blogger_id: tag:blogger.com,1999:blog-2422865715758349944.post-956388634911497222
blogger_orig_url: http://www.terminalroot.com.br/2013/03/curso-certificacao-linux-lpi-102_17.html
---
![Blog Linux](http://3.bp.blogspot.com/-80LEOjyKtRM/UUXJBDInHmI/AAAAAAAABNM/TtKGBucfO5s/s1600/network-server.png "Blog Linux")
Principais ferramentas do TCP/IP no Linux:digpingtraceroutewhoistelnetftphost
Dig:
 O comando dig tem como função primária retornar o dns da rede, mas também pode ser usado para pegar o ip de um host ou retornar o nome do host de um ip dado.
{% highlight bash %}
# dig [endereço]
{% endhighlight %}
exemplo:
{% highlight bash %}
# dig www.marcospinguim.blogspot.com
; > DiG 9.7.3 > www.marcospinguim.blogspot.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 43684
;; flags: qr rd ra; QUERY: 1, ANSWER: 4, AUTHORITY: 0, ADDITIONAL: 0
;; QUESTION SECTION:
;www.marcospinguim.blogspot.com. IN A
;; ANSWER SECTION:
www.marcospinguim.blogspot.com. 595 IN CNAME blogspot.l.googleusercontent.com.
blogspot.l.googleusercontent.com. 205 IN A 74.125.234.107
blogspot.l.googleusercontent.com. 205 IN A 74.125.234.108
blogspot.l.googleusercontent.com. 205 IN A 74.125.234.106
;; Query time: 362 msec
;; SERVER: 10.1.1.1#53(10.1.1.1)
;; WHEN: Sun Mar 17 10:07:12 2013
;; MSG SIZE rcvd: 139
{% endhighlight %}
Ping:
 Ele usa o protocolo ICMP obrigatório ECHO_REQUEST datagrama de obter uma ECHO_RESPONSE ICMP de um host ou gateway. ECHO_REQUEST datagramas (pings ``'') tem um cabeçalho de IP e ICMP, seguido por um struct timeval e, em seguida, um número arbitrário de almofada ``'' bytes usados ​​para preencher o pacote.
{% highlight bash %}
# ping [opções] [endereço(HOST ou IP)]
{% endhighlight %}
exemplo(a opção -c testa o número x de vezes):
{% highlight bash %}
# ping www.marcospinguim.blogspot.com
PING blogspot.l.googleusercontent.com (74.125.234.107) 56(84) bytes of data.
64 bytes from gru03s08-in-f11.1e100.net (74.125.234.107): icmp_req=1 ttl=57 time=407 ms
^C^C
^C64 bytes from 74.125.234.107: icmp_req=2 ttl=57 time=803 ms
--- blogspot.l.googleusercontent.com ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 999ms
rtt min/avg/max/mdev = 407.638/605.599/803.561/197.963 ms
marcos@debian:~$ ping -c4 www.marcospinguim.blogspot.com
PING blogspot.l.googleusercontent.com (74.125.234.107) 56(84) bytes of data.
64 bytes from gru03s08-in-f11.1e100.net (74.125.234.107): icmp_req=1 ttl=57 time=655 ms
64 bytes from gru03s08-in-f11.1e100.net (74.125.234.107): icmp_req=2 ttl=57 time=271 ms
64 bytes from gru03s08-in-f11.1e100.net (74.125.234.107): icmp_req=3 ttl=57 time=19.1 ms
64 bytes from gru03s08-in-f11.1e100.net (74.125.234.107): icmp_req=4 ttl=57 time=117 ms
--- blogspot.l.googleusercontent.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3052ms
rtt min/avg/max/mdev = 19.196/266.186/655.958/242.392 ms
{% endhighlight %}
Traceroute:
 Rastreia os rotear pacotes tomadas a partir de uma rede IP em seu caminho para um determinado host. Ele utiliza o protocolo IP tempo de vida (TTL) de campo e as tentativas de obter uma resposta ICMP TIME_EXCEEDED de cada gateway ao longo do caminho para o host.
{% highlight bash %}
# traceroute [opções] [endereço]
{% endhighlight %}
exemplo:
{% highlight bash %}
#traceroute www.marcospinguim.blogspot.com
traceroute to www.marcospinguim.blogspot.com (74.125.234.204), 30 hops max, 60 byte packets
1 10.1.1.1 (10.1.1.1) 2.166 ms 2.645 ms 3.109 ms
2 r1-pw-aguda.ibys.com.br (201.94.192.2) 372.024 ms 372.491 ms 372.796 ms
3 192.168.23.6 (192.168.23.6) 373.232 ms 373.732 ms 375.454 ms
4 192.168.23.114 (192.168.23.114) 374.144 ms 374.629 ms 374.938 ms
5 198.32.122.29 (198.32.122.29) 376.465 ms 376.936 ms 377.643 ms
6 209.85.243.202 (209.85.243.202) 377.300 ms 160.056 ms 94.374 ms
7 72.14.239.184 (72.14.239.184) 25.485 ms 25.838 ms 28.137 ms
8 gru03s15-in-f12.1e100.net (74.125.234.204) 28.621 ms 28.956 ms 30.290 ms
{% endhighlight %}
Whois:
 Whois se refere a um serviço para consultar a informação sobre um domínio de Internet, quem é o dono do domínio, quando expira o domínio, quem é o registrador do domínio, seus DNS-s. Através desta web ou de qualquer web que ofereça a busca de domínios, ou serviço whois se pode ver via web.
{% highlight bash %}
# whois objeto[@servidor]
{% endhighlight %}
exemplo(nesse caso não retornou dados):
{% highlight bash %}
whois www.marcospinguim.blogspot.com
No match for "WWW.MARCOSPINGUIM.BLOGSPOT.COM".
>>> Last update of whois database: Sun, 17 Mar 2013 13:17:29 UTC <<<
{% endhighlight %}
Telnet:
 O comando telnet é usado para se comunicar com outro host usando o protocolo TELNET. Se o telnet é invocado sem o argumento host, ele entra em modo de comando, indicado por seu prompt (telnet>) Neste modo, ele aceita e executa os comandos listados abaixo. Se ele é chamado com argumentos, ele executa um comando de abertura com esses argumentos.
{% highlight bash %}
# telnet [endereço] [porta]
{% endhighlight %}
exemplo(nesse caso não retornou dados):
{% highlight bash %}
$ telnet www.marcospinguim.blogspot.com
telnet: could not resolve www.marcospinguim.blogspot.com/telnet: Name or service not known
{% endhighlight %}
FTP:
Clique aqui para mais informações sobre FTP
Host:
 É um utilitário simples para a realização de pesquisas de DNS. É normalmente usado para converter nomes em endereços IP e vice-versa. Quando não há argumentos ou opções são dadas, anfitrião imprime um breve resumo de seus argumentos de linha de comando e opções.
{% highlight bash %}
# host [opções] [endereço] [servidor]
{% endhighlight %}
exemplo:
{% highlight bash %}
$ host www.marcospinguim.blogspot.com
www.marcospinguim.blogspot.com is an alias for blogspot.l.googleusercontent.com.
blogspot.l.googleusercontent.com has address 74.125.234.107
blogspot.l.googleusercontent.com has address 74.125.234.108
blogspot.l.googleusercontent.com has address 74.125.234.106
blogspot.l.googleusercontent.com has IPv6 address 2800:3f0:4001:803::100c
{% endhighlight %}
Até a próxima!
