---
layout: post
title: Como utilizar o Samba por comando e modo gráfico
date: '2011-12-09T15:56:00.000-08:00'
description: Como utilizar o Samba por comando e modo gráfico
main-class: 'linux'
tags:
- Debian
- Linux
- Redes
twitter_text: Como utilizar o Samba por comando e modo gráfico
introduction: Como utilizar o Samba por comando e modo gráfico
---
Instale o protocolo samba:
{% highlight bash %}
# apt-get install samba
{% endhighlight %}
Por comando vc deve utilizar o comando tipo esse exemplo, supondo que o ip da máquina Windows seja 192.168.1.107:
{% highlight bash %}
# smbclient -L 192.168.1.101 -U marcos
{% endhighlight %}
Será listados os itens compartilhados, então você acessá-los com o comando simples:
{% highlight bash %}
# mount -t smbfs //servidor/arquivos /mnt/smb
{% endhighlight %}
Caso haja algum problema rode o comando {% highlight bash %}
# testparm
{% endhighlight %}, ele exibirá um dump das configurações após lhe solicitar um [enter].Nesse caso você deverá configurar um Samba com PDC (Primary Domain Controller, Controlador de Domínio Primário) , se tudo tiver certo exibirá um "ROLE_DOMAIN_PDC".Caso contrário configure o samba no arquivo {% highlight bash %}
# /etc/samba/smb.conf
{% endhighlight %} com as configurações tipo do exemplo abaixo:
{% highlight bash %}
[global]
netbios name = SERVIDOR
workgroup = DOMINIO
server string = Samba %v
dns proxy = no
log file = /var/log/samba/log.%m
max log size = 1000
syslog = 0
panic action = /usr/share/samba/panic-action %d
domain master = yes
domain logons = yes
preferred master = yes
logon path =
os level = 33
wins support = yes
{% endhighlight %}
Por modo gráfico, abra o Nautilus (uma pasta qualquer no seu Linux) e aperte Ctrl+L e digite:
{% highlight bash %}
smb://192.168.1.107
{% endhighlight %}e navegue nos itens compartilhados.
Os acessos as pastas e arquivos do Windows vão depender das configurações efetuadas no Windows:
-se as pastas estão compartilhadas
-se está para solicitar senha
-...
Além desse pacote, voçê pode, se quiser, instalar outros que te ajudem caso precise de acessos e configurações do Samba em modo gráfico, dessa forma voçê pode instalar esse conjunto abaixo:
{% highlight bash %}
# apt-get install samba smbclient swat samba-doc
{% endhighlight %}
O script de instalação faz duas perguntas. A primeira é se o servidor deve rodar em modo daemon ou sob o inetd. Responda "daemons" para que o servidor rode diretamente. Isso garante um melhor desempenho, melhor segurança e evita problemas diversos de configuração relacionados ao uso do inetd, serviço que está entrando em desuso.
Em seguida ele pergunta: "Gerar a base de dados para senhas /var/lib/samba/passdb.tdb?". É importante responder que "Sim", para que ele crie o arquivo onde serão armazenadas as senhas de acesso. Como explica o script, "Caso você não o crie, você terá que reconfigurar o samba (e provavelmente suas máquinas clientes) para utilização de senhas em texto puro", o que é um procedimento trabalhoso, que consiste em modificar chaves de registro em todas as máquinas Windows da rede e modificar a configuração de outros servidores Linux. Muito mais fácil responder "Sim" e deixar que ele utilize senhas encriptadas, que é o padrão. :)
Com os pacotes instalados, use os comandos:
{% highlight bash %}
# /etc/init.d/samba start
# /etc/init.d/samba stop
{% endhighlight %}
... para iniciar e parar o serviço. Por padrão, ao instalar o pacote é criado um link na pasta "/etc/rc5.d", que ativa o servidor automaticamente durante o boot. Para desativar a inicialização automática, use o comando:
{% highlight bash %}
# update-rc.d -f samba remove
{% endhighlight %}
Para reativá-lo mais tarde, use:
{% highlight bash %}
# update-rc.d -f samba defaults
{% endhighlight %}
Você pode verificar qual é a versão do Samba instalada usando o comando "smbd -V", como em:
{% highlight bash %}
# smbd -V
{% endhighlight %}
Para compartilhar pastas do Linux na rede, você pode utilizar o Swat, para isso voçê deve criar um usuário samba antes e liberar a porta do serviço para acesso pelo browser, para criar um usuario samba, ativar a porta 901 do localhost , segue respectivamente os comandos abaixo, mais informações dos comandos use o "man comando", aqui é só uma luz para você poder utilizar:
Logar no swat:
{% highlight bash %}
# smbpasswd -a marcos
http://127.0.0.1:901/(No seu navegador, será solicitada a senha do samba, se não houver use do seu usuário para acesso ao seu Linux)
{% endhighlight %}
Para que a alteração efetuada no Swat entre em vigor, reinicie o inetd com o comando:
{% highlight bash %}
# /etc/init.d/inetd restart
{% endhighlight %}
Obs.:O Swat não usa encriptação de senha, ou seja, se alguém sniffar sua conexão, verá sua senha nos pacotes do TCP/IP, para que isso não ocorra voçê pode acessá-lo pelo túnel SSH, da seguinte forma:
{% highlight bash %}
# ssh -f -N -L901:192.168.1.107:901 -l login 192.168.1.107
{% endhighlight %}
Para criar compartilhamento use o shares:
{% highlight bash %}
http://127.0.0.1:901/shares
{% endhighlight %}
Por enquanto é só, até a próxima!
