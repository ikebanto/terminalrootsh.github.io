---
layout: post
title: Tabela com alguns comandos do PostGreSQL
date: '2011-11-19T20:26:00.000-08:00'
description: Tabela com alguns comandos do PostGreSQL
main-class: 'misc'
tags:
- PostGreSQL
twitter_text: Tabela com alguns comandos do PostGreSQL
introduction: Tabela com alguns comandos do PostGreSQL
---
PostGreSQL
É um sistema gerenciador de banco de dados objeto relacional (SGBDOR), desenvolvido como projeto de código aberto.Hoje, o PostgreSQL é um dos SGBDs (Sistema Gerenciador de Bancos de Dados) de código aberto mais avançados, contando com recursos como:
Consultas complexas;
Chaves estrangeiras
Integridade transacional;
Controle de concorrência multi-versão;
Suporte ao modelo híbrido objeto-relacional;
Gatilhos;
Visões;
Linguagem Procedural em várias linguagens (PL/pgSQL, PL/Python, PL/Java, PL/Perl) para Procedimentos armazenados;
Indexação por texto;
Estrutura para guardar dados Georeferenciados PostGIS;
Instalação do PostGreSQL
Obs.:Instala o Servidor 
{% highlight bash %}
apt-get install postgresql-8.3
apt-get install postgresql-server-dev-8.3
apt-get install phppgadmin
{% endhighlight %}
     Logando pela primeira vez, edite o arquivo: 
gedit /etc/postgresql/8.3/main/pg_hba.conf   trocar isso:
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
     Logando   
{% highlight bash %}
su postgres
{% endhighlight %}
     Para criar um novo usuário:
Obs.:Voçê também pode fazer alterações pelo phpPGadmin
http://localhost/phppgadmin , caso encontre alguma dificuladade,
mas primeiro deve criar o usuario e pôr a senha para logar.   
{% highlight bash %}
CREATEUSER -P nome-do-usuário
{% endhighlight %}
     Outra maneira de logar   
{% highlight bash %}
psql -U postgres -W
{% endhighlight %}
     Criando novos usuários   
{% highlight bash %}
CREATE USER marcos\g
{% endhighlight %}
     Criando um banco de dados   
{% highlight bash %}
CREATE DATABASE usuario \g
{% endhighlight %}
     Criando uma tabela   
{% highlight bash %}
CREATE TABLE tabela (login varchar(20) null, senha varchar(20) null)\g
{% endhighlight %}
     Inserindo dados numa tabela   
{% highlight bash %}
INSERT INTO tabela VALUES ('marcos', 'senha123')\g
{% endhighlight %}
     Inserindo ou alterando a senha de um usuário   
{% highlight bash %}
ALTER USER marcos WITH PASSWORD 'nova_senha'\g
{% endhighlight %}
  
