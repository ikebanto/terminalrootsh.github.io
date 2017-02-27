---
layout: post
title: Autenticação no Apache2
date: '2011-11-01T06:37:00.000-07:00'
description: Autenticação no Apache2
main-class: 'misc'
tags:
- Servidores
- Apache
image: http://2.bp.blogspot.com/-T3aWDDrqDPU/Uj77fEjKhaI/AAAAAAAACZY/gBr2xj5V9gE/s72-c/apache-linux-servers.jpg
twitter_text: Autenticação no Apache2
introduction: Autenticação no Apache2
---
Vou explicar aqui como você disponibilizar o acesso a uma pasta do Apache(www) exigindo usuario e senha.
01. Primeiramente devemos criar o diretório onde desejamos restringir o acesso caso o mesmo não exista.
{% highlight bash %}
mkdir /var/www/teste 
{% endhighlight %}
02. Criaremos agora um arquivo somente para testes com o nome "index.html" no diretório "/var/www/teste".
{% highlight bash %}
echo "Testando autenticação no Apache" > /var/www/teste/index.html 
{% endhighlight %}
03. Criar os arquivos .htaccess e passwd no diretório onde se deseja restringir o acesso.
{% highlight bash %}
touch passwd .htaccess
{% endhighlight %}
04. Conteúdo do arquivo .htaccess 
{% highlight bash %}
AuthName "Nome que aparecerá no título da janela"
AuthType Basic
AuthUserFile /var/www/teste/passwd
require valid-user 
{% endhighlight %}
05. Criação dos usuários que terão permissão para acessar o diretório:
{% highlight bash %}
htpasswd -c passwd usuário
{% endhighlight %}
Será pedida a senha do novo usuário e em seguida sua confirmação.
{% highlight bash %}
New password:
Re-type new password:
Adding password for user
{% endhighlight %}
Ao abrir o arquivo de senhas (passwd), serão vistos os nomes de usuário e senhas criptografadas.
{% highlight bash %}
more passwd
{% endhighlight %}
06. Edite o arquivo
{% highlight bash %}
"/etc/apache2/sites-available/default"
{% endhighlight %}
colocando as seguintes linhas no final do arquivo antes da tag  
substituindo todas as diretivas conforme suas necessidades, uma observação importante é para a tag
AllowOverride
a mesma deve conter"AuthConfig"
para que a autenticação seja bem sucedida.
{% highlight bash %}
Alias /teste/ "/var/www/teste/"
Options Indexes MultiViews FollowSymLinks
AllowOverride AuthConfig
Order deny,allow
Deny from all
Allow from 172.16.0.0/255.0.0.0 ::1/128
{% endhighlight %}
07. Reinicie o serviço do Apache para atualizar as configurações.
{% highlight bash %}
/etc/init.d/apache2 restart
{% endhighlight %}
08. Teste agora suas configurações acessando http://localhost/teste, fornecendo o nome de usuário senha.
Observações: as linhas abaixo se referem à restrição por IP, não são necessárias à autenticação.
Deny from all
Allow from 172.16.0.0/255.0.0.0 ::1/128 
e todo esse tramite desse ser feito pelo usuário root para funcionar.
Eu uso aqui e você, vai deixar de se proteger!
Fonte:Viva o Linux
