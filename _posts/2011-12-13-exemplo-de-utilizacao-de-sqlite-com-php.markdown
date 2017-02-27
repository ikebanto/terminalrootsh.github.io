---
layout: post
title: "Exemplo de utilização de SQLite com PHP"
date: '2011-12-13T09:25:00.000-08:00'
description: "Exemplo de utilização de SQLite com PHP"
main-class: 'misc'
tags:
- SQLite
- PHP
image: "http://2.bp.blogspot.com/-XvpFRoVsfMM/TueJ84yt4HI/AAAAAAAAASA/-aaxyb482GY/s72-c/sqlite.png"
twitter_text: "Exemplo de utilização de SQLite com PHP"
introduction: "Exemplo de utilização de SQLite com PHP"
---
SQLite é uma biblioteca em linguagem C que implementa um banco de dados SQL embutido. Programas que usam a biblioteca SQLite podem ter acesso a banco de dados SQL sem executar um processo SGBD separado.
SQLite não é uma biblioteca cliente usada para conectar com um grande servidor de banco de dados, mas sim o servidor. A biblioteca SQLite lê e escreve diretamente para e do arquivo do banco de dados no disco.
O uso do SQLite é recomendado onde a simplicidade da administração, implementação e manutenção são mais importantes que incontáveis recursos que SGBDs mais voltados para aplicações complexas possivelmente implementam. Entretanto situações onde a simplicidade é a melhor escolha são muito mais freqüentes do que pode-se imaginar.
para voçê instalar o SQLite e algumas ferramentas no Debian e Debian-likes basta executar os comandos:
{% highlight bash %}
# su
# apt-get install sqlite
# apt-get install sqlitebrowser
# apt-get install php5-sqlite
{% endhighlight %}
A última linha para utilização em aplicações em PHP, onde se usa muito o SQLite em PHP-GTK+.Segue abaixo um exemplo de consulta básica num banco de dados SQLite, e mais abaixo um screeshot do sqlitebrowser onde voçê pode criar o banco(é um arquivo.db) e as tabelas.Leia os comentários em AZUL para um melhor entendimento.
{% highlight bash %}
<?php
 //condição para iniciar o código
 if(isset($_POST['pesquisar'])){
 //extrair o POST e gerar as variaveis
 extract($_POST);
 /* utilizando o PDO para conectar o SQLite, o arquivo foi pre-criado com a tabela e já há dados inseridos(feito utilizando SQLite Browser com a imagem logo abaixo), não é possível abrir com editor de texto esse arquivo */
 $dbh = new PDO('sqlite:teste.db');
 //loop foreach para exibirmos os valores
 foreach ($dbh->query($query) as $row) {
 print "Nome: " . $row["nome"];
 print " Email: " . $row["email"] . "\n
";
 } 
 }
?>
Pesquisar
 
 Nome:
 Email:
 
{% endhighlight %}
Segue o leiaute do SQLiteBrowser para criar bancos tabelas e administrá-los.
![Blog Linux](http://2.bp.blogspot.com/-XvpFRoVsfMM/TueJ84yt4HI/AAAAAAAAASA/-aaxyb482GY/s400/sqlite.png "Blog Linux")
Simples e rápido, espero que gostem e comentem!
