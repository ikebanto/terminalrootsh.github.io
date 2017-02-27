---
layout: post
title: 'Curso Certificação Linux LPI-102: Configurando o Apache'
date: '2013-04-05T15:00:00.000-07:00'
description: 'Curso Certificação Linux LPI-102: Configurando o Apache'
main-class: 'linux'
tags:
- Linux
- LPI
image: http://4.bp.blogspot.com/-iATgwpBpXdk/UVcL-36gK0I/AAAAAAAABTk/EL0j19yhNGY/s72-c/Apache-Server.jpg
twitter_text: 'Curso Certificação Linux LPI-102: Configurando o Apache'
introduction: 'Curso Certificação Linux LPI-102: Configurando o Apache'
---
 O servidor Apache (ou Servidor HTTP Apache, em inglês: Apache HTTP Server, ou simplesmente: Apache) é o mais bem sucedido servidor web livre. Foi criado em 1995 por Rob McCool, então funcionário do NCSA (National Center for Supercomputing Applications). Numa pesquisa realizada em dezembro de 2007, foi constatado que a utilização do Apache representa cerca de 47.20% dos servidores ativos no mundo. Em maio de 2010, o Apache serviu aproximadamente 54,68% de todos os sites e mais de 66% dos milhões de sites mais movimentados. É a principal tecnologia da Apache Software Foundation, responsável por mais de uma dezena de projetos envolvendo tecnologias de transmissão via web, processamento de dados e execução de aplicativos distribuídos.
 O servidor é compatível com o protocolo HTTP versão 1.1. Suas funcionalidades são mantidas através de uma estrutura de módulos, permitindo inclusive que o usuário escreva seus próprios módulos — utilizando a API do software.
 É disponibilizado em versões para os sistemas Windows, Novell Netware, OS/2 e diversos outros do padrão POSIX (Unix, Linux, FreeBSD, etc.).
 
Etimologia
 A razão para o nome "Apache" dada pela Apache Software Foundation, é que faz referência à nação Apache, tribo de nativos americanos que tinha, em combate, grande resistência e estratégias superiores. Isso seria uma alusão à resistência da comunidade do software livre aos ataques de interesses privados . O nome refere-se também à estabilidade do servidor Apache e a sua variedade de ferramentas capazes de lidar com qualquer tipo de solicitação na web. Uma terceira razão, que é aceita popularmente, reconhecida porém refutada pela Fundação, é que o nome viria de "a patchy server", que em inglês significa algo como um servidor remendado, ou melhoria no software, dada a origem do programa, criado sobre o código do servidor da NCSA já existente, no qual foram adicionados diversos patches.
 Surge uma quarta explicação para o nome com o lançamento do Tomcat (um sistema auxiliar ao Apache que cuida basicamente de processamento de aplicativos em Java), já que "Tomcat" nome de uma aeronave estadunidense, o F-14 Tomcat e "Apache" é o nome de um helicóptero de ataque, o AH-64 Apache).
Segurança
 Para garantir segurança nas transações HTTP, o servidor dispõe de um módulo chamado mod_ssl, o qual adiciona a capacidade do servidor atender requisições utilizando o protocolo HTTPS. Este protocolo utiliza uma camada SSL para criptografar todos os dados transferidos entre o cliente e o servidor, provendo maior grau de segurança, confidencialidade e confiabilidade dos dados. A camada SSL é compatível com certificados X.509, que são os certificados digitais fornecidos e assinados por grandes entidades certificadoras no mundo.
Configuração
 O servidor é configurado por um arquivo mestre nomeado httpd.conf e opcionalmente pode haver configurações para cada diretório utilizando arquivos com o nome .htaccess, onde é possível utilizar autenticação de usuário pelo próprio protocolo HTTP utilizando uma combinação de arquivo .htaccess com um arquivo .htpasswd, que guardará os usuários e senhas (criptografadas). 
Autenticação no Apache2
 Vou explicar aqui como você disponibilizar o acesso a uma pasta do Apache(www) exigindo usuario e senha.
01. Primeiramente devemos criar o diretório onde desejamos restringir o acesso caso o mesmo não exista.
{% highlight bash %}
# mkdir /var/www/teste 
{% endhighlight %}
02. Criaremos agora um arquivo somente para testes com o nome "index.html" no diretório "/var/www/teste".
{% highlight bash %}
# echo Testando autenticação no Apache > /var/www/teste/index.html 
{% endhighlight %}
03. Criar os arquivos .htaccess e passwd no diretório onde se deseja restringir o acesso.
{% highlight bash %}
# touch passwd .htaccess
{% endhighlight %}
04. Conteúdo do arquivo .htaccess 
{% highlight bash %}
AuthName "Nome que aparecerá no título da janela"
AuthType Basic
AuthUserFile /var/www/teste/passwd
require valid-user 
{% endhighlight %}
05) Criação dos usuários que terão permissão para acessar o diretório:
{% highlight bash %}
# htpasswd -c passwd usuário
{% endhighlight %}
Será pedida a senha do novo usuário e em seguida sua confirmação.
{% highlight bash %}
New password:
Re-type new password:
Adding password for user usuário
{% endhighlight %}
Ao abrir o arquivo de senhas (passwd), serão vistos os nomes de usuário e senhas criptografadas.
{% highlight bash %}
# more passwd
usuário:ZzbJ.YtR6TyyU
{% endhighlight %}
06) Edite o arquivo {% highlight bash %}
"/etc/apache2/sites-available/default"
{% endhighlight %}, colocando as seguintes linhas no final do arquivo antes da tag 
, substituindo todas as diretivas conforme suas necessidades, uma observação importante é para a tag 
AllowOverride, a mesma deve conter "AuthConfig"para que a autenticação seja bem sucedida.
{% highlight bash %}
Alias /teste/ "/var/www/teste/"
Options Indexes MultiViews FollowSymLinks
AllowOverride AuthConfig
Order deny,allow
Deny from all
Allow from 172.16.0.0/255.0.0.0 ::1/128
{% endhighlight %}
07) Reinicie o serviço do Apache para atualizar as configurações.
{% highlight bash %}
# /etc/init.d/apache2 restart
{% endhighlight %}
08) Teste agora suas configurações acessando http://localhost/teste, fornecendo o nome de usuário senha.
Observações:
as linhas abaixo se referem à restrição por IP, não são necessárias à autenticação.
Deny from all
Allow from 172.16.0.0/255.0.0.0 ::1/128 
e todo esse tramite desse ser feito pelo usuário root para funcionar.
Eu uso aqui e você, vai deixar de se proteger!
Fonte:Viva o Linux
 
Habilitar o mod_rewite no Apache (.htacces) 
Pra quem vai trabalhar com MVC no PHP (por exemplo) precisa habilitar o mod_rewrite no Apache pra que funcione, segue os passos pra fazer isso:
1-Logue como root: 
{% highlight bash %}
$ su
{% endhighlight %}
2-Abra o arquivo default do Apache: 
{% highlight bash %}
# vi /etc/apache2/sites-available/default
{% endhighlight %}
3-Edite o arquivo da seguinte forma: <span style= "Blog Linux")
 substituindo por "AllowOverride AuthConfig" e altere a linha "AllowOverride None" dentro de  substituindo por "AllowOverride All". 
Ex.:{% highlight bash %}
DocumentRoot /var/www/     Options FollowSymLinks Indexes    AllowOverride AuthConfig      Options Indexes FollowSymLinks MultiViews    AllowOverride All    Order allow,deny    allow from all 
{% endhighlight %}
4- Não esqueça de habilitar o mod_rewrite: 
{% highlight bash %}
# a2enmod rewrite
{% endhighlight %}
5-Reinicie o apache:
{% highlight bash %}
# /etc/init.d/apache2 restart
{% endhighlight %}
Agora vamos testar 
6-Crie um arquivo .htacces dentro do diretório /var/www/: 
{% highlight bash %}
vi /var/www/.htaccess
{% endhighlight %}
7-Escreva isso dentro do Arquivo, salve e feche-o(em outro post explicarei isso): 
{% highlight bash %}
RewriteEngine On
RewriteCond %{SCRIPT_FILENAME} !-f
RewriteCond %{SCRIPT_FILENAME} !-d
RewriteRule ^(.*)$ index.php?chave=$1 
{% endhighlight %}
8-Agora crie um arquivo index.php e cole o conteúdo logo abaixo: {% highlight bash %}
vi /var/www/index.php
{% endhighlight %}
Conteúdo: 
{% highlight bash %}
 
{% endhighlight %}
9-Acesse o endereço http://localhost/nomequalquer/outronome/:
Se imprimir na tela: nomequalquer/outronome/ (ou o nome que você escolheu), está tudo certo.Você já pode escrever seu Framework!   
