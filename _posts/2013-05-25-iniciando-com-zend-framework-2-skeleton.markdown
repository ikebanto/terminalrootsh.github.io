---
layout: post
title: 'Iniciando com Zend Framework 2: Skeleton e ZfcUser'
date: '2013-05-25T17:48:00.000-07:00'
description: 'Iniciando com Zend Framework 2: Skeleton e ZfcUser'
main-class: 'misc'
tags:
- MVC
twitter_text: 'Iniciando com Zend Framework 2: Skeleton e ZfcUser'
introduction: 'Iniciando com Zend Framework 2: Skeleton e ZfcUser'
---
Tutorial adaptado do original escrito por EvanDotPro:http://blog.evan.pro/getting-started-with-the-zf2-skeleton-and-zfcuser
Este é um tutorial feito para ser curto e fácil de seguir para lhe  ajudar a começar com o Zend Framework 2.0 e um dos seus módulos mais  comuns, oZfcUser. Ao final deste tutorial você terá uma aplicação básica no ZF2 com registro de usuário e autenticação.Pré-requisitosPara este tutorial presumo que você tenha instalado:
PHP 5.3.3+ (com pdo-sqlite ou pdo-mysql)Um web server e conhecimentos de como configurar um virtual hostGit (ou pelo menos a capacidade de acessar o Github e baixar o zip  do projeto, o que vai te obrigar a baixar o framework de outro source e  colocar no diretório apropriado)(De  qualquer forma, posso dar uma mão pra galera que estiver com  dificuldades em alguma dessas partes. Basta postar nos comentários!)Se você tiver o PHP 5.4+, tecnicamente nem precisará de um web server  pra testar o Zend Framework 2, uma vez que você pode simplesmente  utilizar o novo servidor para desenvolvimento embutido no PHP.
Um comentário sobre o composerEnquanto o composer é uma maneira suportada de configurar o skeleton,  eu prefiro simplesmente utilizar o git para esse tutorial. Na minha  opinião isso torna as coisas mais simples e fáceis de debugar caso  alguém tenha problemas em seguir o tutorial.
Passo 1: Obtendo o SkeletonO primeiro passo é clonar oskeleton application:
{% highlight bash %}
$ git clone --recursive https://github.com/zendframework/ZendSkeletonApplication.git
{% endhighlight %}Depois, configure um vhost apontando para o diretório público da sua  novo skeleton clonado. Neste ponto você já deve ser capaz de acessar  http://seuvhost/ no seu navegador e ver o seguinte:
Se você estiver utilizando o PHP 5.4 e quiser utilizar o servidor embutido, simplesmente abra um novo terminal, cd  para o diretóriopublic e execute:
{% highlight bash %}
$ php -S 8000
{% endhighlight %}Com isso rodando você deverá ser capaz de acessarhttp://localhost:8000/ e visualizar a aplicação.
Passo 2: Configurando uma conexão com o banco de dadosPara o ZfcUser iremos necessitar de um banco de dados para guardar os  usuários. Neste tutorial irei cobrir o MySQL e o SQLite, mas com o  ZfcUser e o Zend\Db suportam muitos outros SGBDs.
Crie um novo arquivo{% highlight bash %}
./config/autoload/database.local.php
{% endhighlight %}e preencha-o com o seguinte:
Para o MySQL:
{% highlight bash %}
<?php
return array(
 'service_manager' => array(
 'factories' => array(
 'Zend\Db\Adapter\Adapter' => 'Zend\Db\Adapter\AdapterServiceFactory',
 ),
 ),
 'db' => array(
 'driver' => 'pdo',
 'dsn' => 'mysql:dbname=CHANGEME;host=localhost',
 'username' => 'CHANGEME',
 'password' => 'CHANGEME',
 ),
);
{% endhighlight %}Ou para o SQLite:
{% highlight bash %}
<?php
return array(
 'service_manager' => array(
 'factories' => array(
 'Zend\Db\Adapter\Adapter' => 'Zend\Db\Adapter\AdapterServiceFactory',
 ),
 ),
 'db' => array(
 'driver' => 'pdo',
 'dsn' => 'sqlite:' . getcwd() . '/data/users.db',
 )
);
{% endhighlight %}
Passo 3: Instalando o ZfcUserAgora vamos instalar o ZfcUser.Primeirocd para o diretório vendore execute os seguintes comandos:
{% highlight bash %}
$ git clone https://github.com/ZF-Commons/ZfcUser.git
$ git clone https://github.com/ZF-Commons/ZfcBase.git
{% endhighlight %}Nota:ZfcBase é apenas uma dependência do ZfcUser – contém algumas classes básicas que são úteis para diversos módulos.
Agora habilite os módulos editando{% highlight bash %}
./config/application.config.php
{% endhighlight %}e adicionando-os à array demodules:
{% highlight bash %}
<?php
return array(
 'modules' => array(
 'Application',
 'ZfcBase',
 'ZfcUser',
 ),
 'module_listener_options' => array(
 'config_glob_paths' => array(
 'config/autoload/{,*.}{global,local}.php',
 ),
 'module_paths' => array(
 './module',
 './vendor',
 ),
 ),
);
{% endhighlight %}Agora precisamos importar o schema do banco do ZfcUser. Se estiver  usando o SQLite será necessário apenas uma linha de comando que deverá  ser executada na raíz do projeto:
{% highlight bash %}
$ cat vendor/ZfcUser/data/schema.sqlite.sql | sqlite3 data/users.db
{% endhighlight %}(Se alguém souber como se faz isso no Windows, por favor poste nos comentários!)
Se estiver usando MySQL importe o arquivo{% highlight bash %}
./vendor/ZfcUser/data/schema.sql
{% endhighlight %}para o seu banco que configuramos antes.
Deve ser o suficiente! Tente acessar http://seuvhost/user e você será recebido com a tela de login:
![Blog Linux](http://www.phpit.com.br/wp-content/uploads/2012/08/tut_01_02.png "Blog Linux")
Agora você já tem uma aplicação básica rodando com o Zend Framework 2 com suporte a registro e autenticação!
RecursosZfcUser Wiki(inglês)ZF-Commons ZfcUser RFC(inglês)Aproveite para dar uma conferida em algumas extensões para o módulo ZfcUser que já existem:
<span style= "Blog Linux")
Se você estiver se perguntando “e agora?”, tire alguns minutos para ler oexcelente tutorial de ZF2 do Rob Allenque explica a criar uma aplicação básica do zero e/ouvenha conversar conosco no#zftalk.2 @ Freenodese tiver dúvidas.
Um abraço a todos e fiquem com Deus! 
Originalmente publicado em: http://www.phpit.com.br
