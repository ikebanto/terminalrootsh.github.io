---
layout: post
title: "Instalando, logando e efetuando comandos básicos no PostGreSQL."
date: '2011-10-30T13:06:00.000-07:00'
description: "Instalando, logando e efetuando comandos básicos no PostGreSQL."
main-class: 'misc'
tags:
- PostGreSQL
twitter_text: "Instalando, logando e efetuando comandos básicos no PostGreSQL."
introduction: "Instalando, logando e efetuando comandos básicos no PostGreSQL."
---
Vamos começar do início:
Instalando o PostGreSQL
{% highlight bash %}
apt-get install postgresql-8.3
apt-get install postgresql-server-dev-8.3
apt-get install phppgadmin
{% endhighlight %}
Logando pela primeira vez no PostGreSQL,
para poder logar com senha sem que haja erro:
{% highlight bash %}
gedit /etc/postgresql/8.3/main/pg_hba.conf
{% endhighlight %}
trocar isso:
{% highlight bash %}
# Database administrative login by UNIX sockets
local   all         postgres                          ident sameuser
{% endhighlight %}
por isso:
{% highlight bash %}
# Database administrative login by UNIX sockets
local   all         postgres                          password
{% endhighlight %}
Reiniciar o postgreSQL
{% highlight bash %}
/etc/init.d/postgresql-8.3 restart
{% endhighlight %}
Para logar com o usuário postgres:
{% highlight bash %}
# su postgres
{% endhighlight %}
Para criar um novo usuário:
{% highlight bash %}
$ CREATEUSER -P nome-do-usuário
{% endhighlight %}
Obs.:Voçê também pode fazer alterações pelo phpPGadmin
http://localhost/phppgadmin , caso encontre alguma dificuladade, mas primeiro deve criar o usuario e pôr a senha para logar.
Agora, “opcionalmente” mais medidas de segurança “podem/devem” ser tomadas:
Edite o arquivo {% highlight bash %}
/etc/postgresql/8.3/main/pg_hba.conf
{% endhighlight %}, responsável por configurar como e quem se conecta e autentica ao banco de dados;
Onde há:
{% highlight bash %}
local all postgres ident sameuser
{% endhighlight %}
Substitua por:
{% highlight bash %}
local all postgres md5 sameuser
{% endhighlight %}
Logando no PostGre:
{% highlight bash %}
psql -U postgres -W
Senha para usuário postgres:
Bem vindo ao psql 8.3.14, o terminal iterativo do PostgreSQL.
Digite:  \copyright para mostrar termos de distribuição
\h para ajuda com comandos SQL
\? para ajuda com comandos do psql
\g ou terminar com ponto-e-vírgula para executar a consulta
\q para sair
postgres=#
{% endhighlight %}
Criando novos usuarios:
{% highlight bash %}
CREATE USER marcos\g
CREATE ROLE
postgres=#
{% endhighlight %}
Obs.: Antes vc deve logar com o usuario padrão “postgres” e criar um banco de dados com o nome do usuario que deseja criar.
Comando para criar um Banco de Dados:
{% highlight bash %}
CREATE DATABASE usuario \g
CREATE DATABASE
postgres=#
{% endhighlight %}
Criando tabela:
{% highlight bash %}
marcos=> CREATE TABLE tabela (login varchar(20) null, senha varchar(20) null)\g
CREATE TABLE
marcos=>
{% endhighlight %}
Inserindo dados na tabela criada:
{% highlight bash %}
marcos=> INSERT INTO tabela VALUES ('marcos', 'senha123')\g
INSERT 0 1
marcos=>
{% endhighlight %}
Executando o comando de criar novos usuarios:
{% highlight bash %}
postgres=# CREATE USER livrexpert\g
CREATE ROLE
postgres=#
{% endhighlight %}
Obs.:Durante instalação pra quem tem o Debian NetInstall instalado, provavelmente seu sistema irá solicitar o CD para completar a instalação:
Troca de mídia: por favor, insira o disco nomeado
'Debian GNU/Linux 5.0.3 _Lenny_ - Official i386 CD Binary-1 20090905-08:23'
na unidade '/cdrom/' e pressione enter
