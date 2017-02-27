---
layout: post
title: "Personalize seu shell na entrada de seu logon"
date: '2015-03-18T18:15:00.000-07:00'
description: "Personalize seu shell na entrada de seu logon"
main-class: 'linux'
tags:
- Linux
- Dicas
- Terminal
image: "http://2.bp.blogspot.com/-2jvtfB82t-k/VWPJFiu0SDI/AAAAAAAABP0/VQ9cp__3hiU/s72-c/Linux-console.png"
twitter_text: "Personalize seu shell na entrada de seu logon"
introduction: "Personalize seu shell na entrada de seu logon"
---
![Blog Linux](http://2.bp.blogspot.com/-2jvtfB82t-k/VWPJFiu0SDI/AAAAAAAABP0/VQ9cp__3hiU/s320/Linux-console.png "Blog Linux")
Você pode deixar seu Shell mais interessante e até mesmo deixar lembretes nele, basta você editar seu .bashrc:
 Crie um script com informações/lembretes/… que você deseja:
 Exemplo:
 {% highlight bash %}
$ vi /home/$USER/saudacao.sh
{% endhighlight %}
 Dae você pode pôr algo assim:
 
#!/bin/bash
clear #limpa a telafiglet Terminal Root #comandos para identificar o turno
hora=`date +%k`
if [ $hora -ge 6 ] &amp;&amp; [ $hora -lt 12 ];then
TURNO=”Bom Dia”; fi;
if [ $hora -ge 12 ] &amp;&amp; [ $hora -lt 18 ];then
TURNO=”Boa Tarde”; fi;
if [ $hora -ge 18 ] &amp;&amp; [ $hora -lt 24 ];then
TURNO=”Boa Noite!”; fi;
if [ $hora -ge 0 ] &amp;&amp; [ $hora -lt 6 ];then
TURNO=”Boa Noite!”; fi;
#cumprimentos
echo “$TURNO $USER Seja bem vindo a $HOSTNAME”
echo “Hoje são `date +%A` `date +%d` de `date +%B` de `date +%Y`”
echo “A hora atual é `date +%k:%M`”Salvá-lo e dar permissão de excução:
 {% highlight bash %}
$ chmod +x /home/$USER/saudacao.sh
{% endhighlight %}
 Depois é só pôr no seu .bashrc:
 {% highlight bash %}
$ vi /home/$USER/.bashrc
{% endhighlight %}
 Após a última linha você deve pôr o caminho do script que executará o  que você deseja (também pode pôr o comando ali mesmo), no entanto, é  mais recomendável chamar um script externo.
 {% highlight bash %}
/home/$USER/./saudacao.sh
{% endhighlight %}
 Pronto, toda vez que você abrir o Shell, haverá tais informações!
 Obs.: no Script informado eu coloquei o figlet, para mais informações sobre ele consulte esse link: Como gerar desenhos de nomes pelo terminal
Post baseado em: http://www.vivaolinux.com.br/artigo/Personalize-seu-shell-na-entrada-de-seu-logon
