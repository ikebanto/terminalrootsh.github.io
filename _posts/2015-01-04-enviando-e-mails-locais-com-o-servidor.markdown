---
layout: post
title: Enviando E-mails locais com o Servidor Postfix
date: '2015-01-04T13:01:00.003-08:00'
description: Enviando E-mails locais com o Servidor Postfix
main-class: 'linux'
tags:
- Linux
- Servidores
- GNU
image: http://2.bp.blogspot.com/-9mcW4bAoHWs/VKmqMceQFFI/AAAAAAAABIk/CRofz2UzqOA/s72-c/tux-mail-1ty.gif
twitter_text: Enviando E-mails locais com o Servidor Postfix
introduction: Enviando E-mails locais com o Servidor Postfix
---
![Blog Linux](http://2.bp.blogspot.com/-9mcW4bAoHWs/VKmqMceQFFI/AAAAAAAABIk/CRofz2UzqOA/s320/tux-mail-1ty.gif "Blog Linux")
O Postfix é um agente de transferência de emails (MTA), um software livre para envio e entrega de emails. Rápido e fácil de administrar, é uma alternativa segura ao Sendmail, muito utilizado em servidores UNIX.
Ele é uma espécie de meio termo entre a simplicidade do Qmail e a fartura de recursos do Exim. Entre os três, ele é o mais rápido e o mais simples de configurar, o que faz com que ele seja atualmente o mais popular e o que possui mais documentação disponível. O Postfix também possui um excelente histórico de segurança, sendo considerado por muitos tão seguro quanto o Qmail.
Existem fortes motivos para não usar o Sendmail ou o Qmail em novas instalações, mas temos uma boa briga entre o Postfix e o Exim. Escolhi abordar o Postfix aqui simplesmente por que, entre os dois, ele é mais popular, o que torna mais simples encontrar documentação e conseguir ajuda quando tiver dúvidas.
Instalando o Postfix
{% highlight bash %}
$ su
# apt-get install postfix
{% endhighlight %}, durante a Instalação ele deverá perguntar: Qual o tipo geral de configuração, marque o item Internet Site
![Blog Linux](http://2.bp.blogspot.com/-cGPNLef_KXE/TwRli2xcVxI/AAAAAAAAAUo/g3sOziSO9Ds/s320/InternetSite.png "Blog Linux")
e o nome/endereço do Servidor, digite o nome que você deseja:
![Blog Linux](http://3.bp.blogspot.com/-HYxBeYkMNzU/TwRl8DQu1SI/AAAAAAAAAU0/v7ZueSxZ25M/s320/marcospinguim.png "Blog Linux")
, para as demais perguntas, deixe as opções defaults como já vêm pré-marcadas.
Obs.:Na pergunta: força atualizações síncronas na fila de email ? Marque como não:
![Blog Linux](http://3.bp.blogspot.com/-3-A5g_TScFQ/TwRmA5f72mI/AAAAAAAAAVA/ueFVxyB3JHo/s320/marcar_nao.png "Blog Linux")
Configuração Inicial
Edite o arquivo {% highlight bash %}
# vi /etc/postfix/main.cf
{% endhighlight %} e inclua as configurações abaixo:
{% highlight bash %}
mydomain = marcospinguim.com.br
myhostname = host.$mydomain
myorigin = $mydomain
mydestination = $myhostname, $mydomain
mynetworks = 127.0.0.0/8 192.168.1.1/24
home_mailbox = Maildir/
{% endhighlight %}
mydomain: O nome do domínio do servidor de e-mail.
myhostname: O nome da máquina do servidor de e-mail.
myorigin: Especifica como ficará a terminação do e-mail após o @.
mydestination: Os nomes dos domínios que o servidor de e-mail é responsável.
mynetworks: Especifica a qual rede que o servidor de e-mail irá trabalhar.
home_mailbox: Especifica o diretório onde ficará as mensagens de e-mail.
Após isso recarregue as informações no Postfix:
{% highlight bash %}
# /etc/init.d/postfix reload
{% endhighlight %}
Testando o Envio de E-mails:
No meu PC existe um usuario com o nome [marcos] e outro com o nome [eric], teste com os usuarios da sua máquina, se não houver crie-os com useradd, neste exemplo abaixo o usuário [marcos] enviou um e-mail para o usuário [eric], lógico que estou logado como root, mas usei o comando [MAIL from:] e especifiquei o usuário que envia o e-mail, para critério de teste.
Destaquei os comandos que vc deve executar para isso em VERMELHO:
{% highlight bash %}
# telnet localhost 25
Trying ::1...
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
220 host.marcospinguim.com.br ESMTP Postfix (Ubuntu)
HELO smtp.marcospinguim.com.br
250 host.marcospinguim.com.br
MAIL from: marcos
250 2.1.0 Ok
RCPT to: eric
250 2.1.5 Ok
DATA
354 End data with .
Este post sobre Postfix no blog é loucooooo!
.
250 2.0.0 Ok: queued as A8F958F5DE
QUIT
221 2.0.0 Bye
Connection closed by foreign host.
{% endhighlight %}
Instalar o pacote SASL
Este recurso é importante hoje em dia, pois sem encriptação, seus e-mails (incluindo o login e senha) são transmitidos em texto plano pela rede e podem ser Sniffados. Uma vez ativo o recurso no servidor, basta marcar a opção no cliente de e-mails.
{% highlight bash %}
apt-get install sasl2-bin
{% endhighlight %} , agora abra novamente o arquivo main.cf e inclua as linhas abaixo nele:
{% highlight bash %}
smtpd_sasl_auth_enable = yes
broken_sasl_auth_clients = yes
smtpd_sasl_authenticated_header = yes
smtpd_helo_required = yes
smtpd_recipient_restrictions = 
permit_mynetworks,
permit_sasl_authenticated,
reject_unauth_destination
{% endhighlight %}
Depois ative ele abrindo o arquivo de configuração:
{% highlight bash %}
# vi /etc/default/saslauthd
{% endhighlight %} e inclua o código abaixo no arquivo, na verdade essa linhas já existirão, mas você deve alterá-las para ficar assim:
Obs.:As linhas não estão uma abaixo da outra, procure-as e altere:
{% highlight bash %}
START=yes
OPTIONS="-c -m /var/spool/postfix/var/run/saslauthd -r"
{% endhighlight %}, salve e feche o arquivo. Agora rode esse comando no terminal para verificar se o usuário postfix existe:{% highlight bash %}
# groups postfix
{% endhighlight %} , se retornar postfix : postfix , rode esse comando:{% highlight bash %}
# usermod -G sasl postfix
{% endhighlight %}, se verificar novamente com o comando groups postfix, agora retornará postfix : postfix sasl , caso não ocorra, dê um reload no postfix (/etc/init.d/postfix reload).
Crie o arquivo smtpd.conf no diretório "/etc/postfix/sasl" e adicione as seguintes linhas abaixo:
{% highlight bash %}
pwcheck_method: saslauthd
mech_list: plain login
{% endhighlight %}
Terminado as configurações, reinicie o Postfix e o serviço de autenticação:
{% highlight bash %}
# /etc/init.d/postfix restart
# /etc/init.d/saslauthd restart
{% endhighlight %}
Você pode ainda implementar uma criptogrfia TLS e criar o certificado, dá uma pesquisada na Internet. 
Lendo os e-mails
Para poder ler as mensagens de e-mail recebidas, será usado o Servidor POP3:
{% highlight bash %}
# apt-get install courier-pop-ssl
{% endhighlight %}
Testando o Servidor POP3
Para verificar se o Servidor POP3 está funcionando, use o Telnet para ler as mensagens de e-mail recebidas:lembra que o [marcos] enviou mensagem para o usuário [eric] ? Agora o [eric] irá ler. Verifique os trechos em VERMELHO que são comandos para verificar os emails
{% highlight bash %}
# telnet localhost 110
Trying ::1...
Connected to localhost.
Escape character is '^]'.
+OK Hello there.
USER eric
+OK Password required.
PASS informe_aqui_a_senha
+OK logged in.
LIST
+OK POP3 clients that break here, they violate STD53.
1 517
.
RETR 1
+OK 517 octets follow.
Return-Path: 
X-Original-To: eric
Delivered-To: eric@marcospinguim.com.br
Received: from smtp.marcospinguim.com.br (localhost [127.0.0.1])
by host.marcospinguim.com.br (Postfix) with SMTP id A8F958F5DE
for ; Wed,  4 Jan 2012 12:01:31 -0200 (BRST)
Message-Id: 
Date: Wed,  4 Jan 2012 12:01:31 -0200 (BRST)
From: marcos@marcospinguim.com.br
To: undisclosed-recipients:;
Este post sobre Postfix no blog é loucooooo!
.
QUIT
+OK Bye-bye.
Connection closed by foreign host.
{% endhighlight %}
 Obs.: Percebam que as mensagem são arquivos e ficam nas pasta Maildir/cur dos usuários (/home/usuario/Maildir/cur).
Pronto, espero que gostem e comentem!
