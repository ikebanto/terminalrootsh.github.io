---
layout: post
title: "Como executar um script ao iniciar sessão no Debian"
date: '2015-08-04T08:44:00.001-07:00'
description: "Como executar um script ao iniciar sessão no Debian"
main-class: 'debian'
tags:
- Debian
- MATE
- Dicas
image: "http://4.bp.blogspot.com/-2slbFwk2sqI/VcDaJpzO8GI/AAAAAAAABmw/U-lTIWISAM8/s72-c/xsession.jpg"
twitter_text: "Como executar um script ao iniciar sessão no Debian"
introduction: "Como executar um script ao iniciar sessão no Debian"
---
![Blog Linux](http://4.bp.blogspot.com/-2slbFwk2sqI/VcDaJpzO8GI/AAAAAAAABmw/U-lTIWISAM8/s400/xsession.jpg "Blog Linux")
Há situações que você precisa que iniciar um script ao iniciar sessão. Existem várias formas pŕaticas para fazer isso, aqui vou mostrar de algumas maneiras, começando pelas mais simples.
Se você criou um script e deseja que ele execute sempre que você iniciar uma nova sessão basta vc colocar o caminho da execução dentro do arquivo .xsessionrc na sua pasta raíz, lógico que esse script precisa ter permissão de execução: chmod +x script
Nesse post Enviando e-mail via Terminal , mostrei como enviar e-mail pelo terminal , mas suponhamos que você , por questão de segurança , deseje obter um e-mail sempre que iniciar uma sessão no seu perfil, então você criou esse script (altere a variavel local destinatario pra o e-mail que você deseja receber a notificação):
#!/bin/bash
# Enviar e-mail ao iniciar sessão
sendsession(){
 local distro="$(cat /etc/issue | awk '{print $1,$2,$3}')";
 local nome="$(echo $USER | sed 's/./\U&amp;/')";
 local data="$(date +%d/%m/%Y)";
 local hora="$(date +%H:%M:%S)";
 local conteudo="$nome, sua máquina $distro Iniciou sessão no dia $data às $hora.";
 local assunto="Nova sessão no $distro";
 local destinatario="SEUEMAIL@gmail.com";
 echo "$conteudo" | mutt -s "$assunto" $destinatario;
 exit 0
 
}
sendsession
então você salva no diretório que você deseja com as devidas permissões:
{% highlight bash %}
chmod +x ~/scripts/enviar.sh
{% endhighlight %}
Depois é só criar um arquivo ~/.xsessionrc e pôr o caminho da execução do script:
{% highlight bash %}
echo "/home/user/scripts/enviar.sh" > ~/.xsessionrc
{% endhighlight %}
Pronto, agora sempre que uma sessão foi iniciada no seu perfil, você receberá uma e-mail informando-o!
o Xsession é para informações de sessão , se você usar o ~/.initrc só funcionará quando o X for iniciado e não a sessão , ou seja , quando reinciar a máquina ou ligar (partir do modo texto para o gráfico, "startx"), logo , usar o .xsessionrc convém mais, até porque se alguém encerrar sessão e quiser entrar no seu perfil, sem reiniciar a máquina , você também receberá o e-mail :) .
Você também pode usar pela Interface Gráfica , todas as GUIs modernas possuem , procure por "Aplicativos de sessão" na pesquisa da sua GUI ou tente encontrar em Preferencias. No MATE Desktop por exemplo o caminho no MENU PRINCIPAL é:
Sistema > Preferencias > Aplicativos de sessão.
Clique em [ADICIONAR], abrirá uma nova janela, preencha os dados como você deseja de acordo com o exemplo da imagem abaixo e clique em [ADICIONAR] de novo, e pronto, funcionará do mesmo jeito:
   [IMG1] 
![Blog Linux](http://1.bp.blogspot.com/-k9MhRm-Y26w/VcDce4cj5YI/AAAAAAAABm8/kSEQukO0VzE/s640/Captura_de_tela.png "Blog Linux")
  
Outra forma é você criar um script inicializável do sistema e não só do seu usuário, mas precisa ser ROOT , exemplo:
Crie um daemon baseado no exemplo que o próprio Debian possui em /etc/init.d/skeleton e altere de acordo com as informações do seu script , o mais importante é alterar a linha que possui DAEMON=/usr/sbin/daemonexecutablename para o caminho do seu script e se quis, exemplo:
{% highlight bash %}
vi /etc/init.d/enviar
{% endhighlight %}
### BEGIN INIT INFO
# Provides: enviar
# Required-Start: $remote_fs $syslog
# Required-Stop: $remote_fs $syslog
# Default-Start: 2 3 4 5
# Default-Stop: 0 1 6
# Short-Description: Envia e-mail
# Description: Sempre que inciar sessão
### END INIT INFO
# Author: Foo Bar 
DESC="Descrição do Serviço"
DAEMON=/usr/sbin/enviar
Veja que usei o caminho /usr/sbin/enviar , logo preciso mover o arquivo para lá!
Depois você precisa pôr o daemon na para rodar na inicialização:
Assim:
{% highlight bash %}
# update-rc.d enviar defaults
{% endhighlight %}
Ou assim, melhor assim se você possui o Jessie 8:
{% highlight bash %}
# insserv enviar
{% endhighlight %}
Caso você deseje retirá da incialização:
Assim:
{% highlight bash %}
# update-rc.d -f enviar remove
{% endhighlight %}
Ou assim, melhor assim se você possui o Jessie 8:
{% highlight bash %}
# insserv -r enviar
{% endhighlight %}
ou
{% highlight bash %}
# insserv --remove enviar
{% endhighlight %}
Via:
https://wiki.debian.org/XWindowSystem
https://wiki.debian.org/Xinitrc
https://wiki.debian.org/Daemon
