---
layout: post
title: "Instalando a rede social livre e distribuída Friendica no Debian 7.0 (Wheezy)"
date: '2012-11-25T09:48:00.000-08:00'
description: "Instalando a rede social livre e distribuída Friendica no Debian 7.0 (Wheezy)"
main-class: 'misc'
tags:
- Artigos
- Dicas
image: "http://3.bp.blogspot.com/-L7i9Cg2dMIU/ULJZdGiCUII/AAAAAAAAAuo/svw8J5lkMcw/s72-c/f-intro.jpg"
twitter_text: "Instalando a rede social livre e distribuída Friendica no Debian 7.0 (Wheezy)"
introduction: "Instalando a rede social livre e distribuída Friendica no Debian 7.0 (Wheezy)"
---
![Blog Linux](http://3.bp.blogspot.com/-L7i9Cg2dMIU/ULJZdGiCUII/AAAAAAAAAuo/svw8J5lkMcw/s320/f-intro.jpg "Blog Linux")
Instalando a rede social livre e distribuída Friendica no Debian 7.0 (Wheezy)
Este tutorial mostrara como instalar a plataforma para redes sociais e distribuída Friendica, sobre o Servidor Web Apache Web Server no GNU/Linux Debian 7.0 Wheezy. Neste tutorial usaremos o MySQL como banco de dados. Este tutorial também é válido para o Ubuntu 12.04.1 e suas variações (Lubuntu, Xubuntu, Kubuntu e etc.) a partir do seção 1.4.
1) Preparando o Ambiente
Logo Debian1.1) Primeiro vamos instalar as dependências. Como administrador do sistema (root)
{% highlight bash %}
# vi /etc/apt/sources.list
{% endhighlight %}
1.2) Acrescente as seguintes linhas no final do arquivo, salve e saia.
{% highlight bash %}
 deb http://ftp.br.debian.org/debian wheezy main contrib
 deb-src http://ftp.br.debian.org/debian wheezy main contrib
{% endhighlight %}
1.3) Atualize a base de pacotes local
{% highlight bash %}
# apt-get update
{% endhighlight %}
1.4) Instale as dependências(ignore as que seu Linux já tiver).
{% highlight bash %}
# apt-get install php5 php5-cli php5-curl php5-gd php5-mcrypt php5-mysql libapache2-mod-proxy-html mysql-server mysql-client git exim4 -y
{% endhighlight %}
 * Opcionalmente limpe o cache dos pacotes baixados com o comando: apt-get clean
2) Instalando o Friendica
2.1) Baixando o Código-Fonte
 Removendo o index.html padrão da instalação
 {% highlight bash %}
# rm /var/www/index.html
{% endhighlight %}
 Baixando a última versão do Friendica do repositório Git
 {% highlight bash %}
git clone https://github.com/friendica/friendica.git /var/www
{% endhighlight %}
 Mudando o Dono/Grupo do Friendica
 {% highlight bash %}
chown www-data.www-data /var/www -R
{% endhighlight %}
2.2) Ative o módulo mod_rewrite
{% highlight bash %}
 Ativando o mod_rewrite
 a2enmod rewrite
{% endhighlight %}
2.3) Configurando o Apache2
{% highlight bash %}
 Edite a configuração do Site do Apache2
 vi /etc/apache2/sites-enabled/000-default
{% endhighlight %}
 Modifique o bloco de configuração
{% highlight bash %}
 
 Options Indexes FollowSymLinks MultiViews
 AllowOverride None
 Order allow,deny
 allow from all
 
{% endhighlight %}
 Para
{% highlight bash %}
 
 
 Options Indexes FollowSymLinks MultiViews
 AllowOverride All
 Order allow,deny
 allow from all
 
{% endhighlight %}
2.4) Configurando o .htaccess
 vi /var/www/.htaccess
 Descomentar a Linha (Basta retirar o '#')
 # RewriteBase /
2.5) Re-inicie o Apache2
{% highlight bash %}
# service apache2 restart
{% endhighlight %}
3) Criando a Base de Dados do Friendica
 Criando a Base de Dados no MySQL
{% highlight bash %}
$ mysql -u root -p tutorial -e "CREATE DATABASE friendica"
{% endhighlight %}
4) Acessando pela primeira vez
 Usando o navegador de sua prefêrencia, digite o endereço, configure e crie a conta de administração.
 http://localhost
5) Informações Extras
 Caso você não receba o e-mail de confirmação com a senha você pode alterar diretamente na linha de comando. Colocando a senha tutorial para o usuário tutorial.
{% highlight bash %}
$ mysql -u root -ptutorial friendica -e "UPDATE user SET password='31bcb4a26757f5e279065b09bea788bbab286ee9d08cdbccb9158e81bcf7467939831fec07f751535e4d51573cb2978a13f047eaadd99507621e995495cfc1f9' WHERE username='tutorial';"
{% endhighlight %}
Originalmente postado em: https://marcelo.juntadados.org
