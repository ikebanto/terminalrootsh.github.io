---
layout: post
title: Como executar consulta de MySQL em Shell Script
date: '2015-08-04T13:02:00.003-07:00'
description: Como executar consulta de MySQL em Shell Script
main-class: 'bash'
tags:
- Shell Script
- MySQL
image: http://2.bp.blogspot.com/-Gp2R3e-QloQ/VcEYC29KllI/AAAAAAAABnM/DszR3IGnbi8/s72-c/mysql-shell-script.jpg
twitter_text: Como executar consulta de MySQL em Shell Script
introduction: Como executar consulta de MySQL em Shell Script
---
![Blog Linux](http://2.bp.blogspot.com/-Gp2R3e-QloQ/VcEYC29KllI/AAAAAAAABnM/DszR3IGnbi8/s1600/mysql-shell-script.jpg "Blog Linux")
Quando você está escrevendo um Shell Script como parte de algum processamento em lote, há casos em que o script precisa processar dados armazenados em um servidor MySQL separado. As linguagens de script de uso geral, como Perl e Python têm módulos separados ou interfaces MySQL para usar, mas linguagens de script shell não dispõem dessa interface para o MySQL. No entanto, existem maneiras de executar algumas consultas MySQL simples, e processar o resultado através de Shell Script.
Primeiro, você precisa instalar o cliente MySQL na máquina onde será executado o script shell.
Partindo do princípio que é o caso, você pode executar o seguinte script. O exemplo de código apresentado aqui vai uma chamada MySQL simples SELECT, e processa o resultado que contém potencialmente várias linhas.
Substituta os dados de BANCO, TABELA,HOST,USUARIO e SENHA por seus correspondentes dados e salve como exemplo: mysql.sh e HOST se estiver local, lógico, localhost.
#!/bin/bash
db="BANCO";
table="TABELA";
dbHost="HOST";
dbUser="USUARIO";
dbPass="SENHA";
result=`mysql -h $dbHost --user=$dbUser --password=$dbPass --skip-column-names -e "select * from $db.$table where id = 2"`
items=$(echo $result | tr " " "\n")
for item in $items
do
  echo "$item"
done
Só isso por enquanto! 
Via:http://xmodulo.com/how-to-run-mysql-query-in-shell-script.html
