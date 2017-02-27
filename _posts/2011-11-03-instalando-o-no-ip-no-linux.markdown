---
layout: post
title: Instalando o No-IP no Linux
date: '2011-11-03T18:34:00.000-07:00'
description: Instalando o No-IP no Linux
main-class: 'linux'
tags:
- Linux
twitter_text: Instalando o No-IP no Linux
introduction: Instalando o No-IP no Linux
---
Olá pessoal, durante a instalação do No-IP e da configuração do mesmo, tive alguns problemas, porém conseguí resolver todos, então decidí colocar um pequeno tutorial aqui para esclarecer as duvidas daqueles que por ventura estão ou terão algum problema nisso também.Vamos-lá!
Primeiro entro no site do No-IP
No-IP
Clique em “Create Account”preencha os dados para criação de uma conta e receberá um email de ativação na sua caixa de entrada do email que voçê cadastrou, após terminar o cadastro, entre no seu email e clique no 1º link correspondente a ativação da conta.
Depois logue na sua conta e clique em criar HOST “Add Host”, Obs.: existe opções pagas e gratuitas, escolha um domínio gratuito, o .no-ip.org e o no-ip.biz, são gratuitos, procure-os ou procure qualquer outro do gênero para seu DynDNS.
Após isso, caso voçê voçê tenha um IP Dinâmico, ou seja, aquele que muda, a cada nova conexão, voçê deve instalar o software para o GNU/Linux.
{% highlight bash %}
sudo apt-get install noip2
{% endhighlight %}
Caso voçê já tenha instalado e deseja reconfigurar, esse comando abaixo leva a mesma tela:
{% highlight bash %}
sudo dpkg-reconfigure noip2
{% endhighlight %}
1- Informe o email o qual voçê cadastrou
![Blog Linux](http://www.valentesolucoes.com.br/site/images/stories/blog/1-nome_do_usuario.png "Blog Linux")
2- Informe a senha cadastrada
![Blog Linux](http://www.valentesolucoes.com.br/site/images/stories/blog/2-Senha.png "Blog Linux")
3-Informe o tempo o qual voçê deseja que seja atualizado seu IP, na imagem consta 30 que é o máximo, porém eu recomendo 5
![Blog Linux](http://www.valentesolucoes.com.br/site/images/stories/blog/3-frequencia_de_atualiza%C3%A7%C3%A3o.png "Blog Linux")
4-Informe o HOST que voçê Adicionou, caso voçê deixe em branco será considerado todos os hosts que houver, caso haja mais de um
![Blog Linux](http://www.valentesolucoes.com.br/site/images/stories/blog/4-Host_ou_Lista_de_hosts.png "Blog Linux")
5-Informe qual placa de rede que será feita a conexão, caso haja uma  só,  pode deixar em branco, porém recomendo preencher com eth0
![Blog Linux](http://www.valentesolucoes.com.br/site/images/stories/blog/5-Dispositivo_de_Rede.png "Blog Linux")
6- nessa etapa, no meu caso, depois que eu marquei como SIM, aê sim  que  ele começou a atualizar o IP e iniciar automaticamente, diversos   tutoriais que tem na internet está como não, porém por experiência   própria eu marquei como SIM e deu certo.
![Blog Linux](http://www.valentesolucoes.com.br/site/images/stories/blog/6-Detectar_endere%C3%A7o_IP_externo.png "Blog Linux")
Caso haja algum erro, reconfigure a conexão com o comando, será  pedido o  login(email), a senha, depois marque o tempo(recomendo 5),  depois se  deseja carregar algum script, marque (y) e escreva noip2,  quando  solicitar o script.
{% highlight bash %}
sudo noip2 -C
{% endhighlight %}
Verifique na pasta abaixo,
{% highlight bash %}
/var/lib/noip2/
{% endhighlight %}
,se há o arquivo
noip2.conf, caso esteja com outro nome (no-ip2.conf)renomeia para noip2.conf, o comando para renomear é
{% highlight bash %}
mv no-ip.conf noip2.conf
{% endhighlight %}
deve-se estar dentro da pasta para renomear.
Para verificar informações da conexão, execute o comando
{% highlight bash %}
sudo noip2 -S
{% endhighlight %}
o sudo noip2 -S ou -C podem ser executados de qualquer lugar
Pronto, depois faça um teste, “derrube” sua conexão e após 5 minutos  de  conectado, execute o comando acima, ou tente acessar pelo browser  seu  host, ou até mesmo pingar no seu endereço do No-IP, para ver se ele   coresponde ao IP de sua conexão.
Até a próxima!
