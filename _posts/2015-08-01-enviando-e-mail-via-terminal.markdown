---
layout: post
title: Enviando e-mail via Terminal
date: '2015-08-01T16:31:00.000-07:00'
description: Enviando e-mail via Terminal
main-class: 'linux'
tags:
- Linux
- Servidores
- GNU
- Terminal
- Comandos
image: http://1.bp.blogspot.com/-Zq2kg1SBjJI/Vb1WAVTm7KI/AAAAAAAABjw/8OFK1d5j7V4/s72-c/e-mail.jpg
twitter_text: Enviando e-mail via Terminal
introduction: Enviando e-mail via Terminal
---
![Blog Linux](http://1.bp.blogspot.com/-Zq2kg1SBjJI/Vb1WAVTm7KI/AAAAAAAABjw/8OFK1d5j7V4/s1600/e-mail.jpg "Blog Linux")
ENVIANDO E-MAIL VIA TERMINAL
Primeiramente você precisar ter o mutt instalado , clique aqui para saber mais sobre o mutt (em Inglês):
Para instalar o Mutt , no Debian , basta usar o gerenciador de pacotes apt-get , mas caso você possua outra distro , tente com o seu gerenciador de pacotes correspondente , ou então baixe-o aqui e compile:
Para instalar no Debian:
{% highlight bash %}
$ su
# apt-get install mutt
{% endhighlight %}
Durante a instalação , aparecerão duas telas, na primeira só aperte [ENTER] na segunda , use o 'No configuration' , pois o ideal aqui é só enviar e-mails , o mutt é muito poderoso e possui configurações para servidor.
depois crie na raíz do seu diretório pessoal um arquivo com o nome .muttrc , eu usei o vi , mas você pode usar seu editor preferido:
{% highlight bash %}
vi ~/.muttrc
{% endhighlight %}
Salve esse arquivo dentro dele com suas configurações ( seu nome, seu e-mail e sua senha ) , exemplo para o Gmail:
# Nome do Remetente
set realname="Seu Nome" 
# Email do Remetente
set from="seuemail@gmail.com;"
# Usuario da conta de email
set my_user=seuemail@gmail.com
# Senha da conta de email
set my_pass='SUA SENHA'
# Autenticacao no servidor smtp de email, nesse caso do gmail.com
set smtp_url=smtps://$my_user:$my_pass@smtp.gmail.com
# Camada de segurança, requerida pelo gmail.com
set ssl_force_tls = yes
Agora é só enviar os e-mails, envio de e-mail simples , o echo envia o Conteúdo depois do pipe | envia com o comando mutt e o utiliza o -s na frente do Assunto, e no final o destinatário:
{% highlight bash %}
echo "Conteúdo teste" | mutt -s "Assunto teste" destinatario@email.com
{% endhighlight %}
Envio de e-mail com anexo , o -a informa o(s) anexo(s) , se houver mais de um , também separe por espaços , neste exemplo estou enviando dois arquivos anexos:
Obs.: Observe que após o nome do último arquivo a anexar deve-se colocar '--' (dois traços) para depois informar o(s) destinatário(s).
{% highlight bash %}
$ echo 'Teste com anexo' | mutt -s 'Assunto teste com anexo' -a meuscript.sh logs.tar.gz -- destinatario@email.com
{% endhighlight %}
Via: http://erasmosena.com/erasmo/enviando-e-mail-via-terminal/
