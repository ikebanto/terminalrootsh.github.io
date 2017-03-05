---
layout: post
title: "Curso Certificação Linux LPI-102: Gerenciamento de dados SQL"
date: '2011-10-30T09:46:00.000-07:00'
image: '/assets/img/mysql/mysql.png'
description: "MySQL é um sistema de gerenciamento de banco de dados (SGBD), que utiliza a linguagem SQL como interface."
main-class: 'linux'
tags:
- Linux
- MySQL
- LPI
---

![Mysql Linux](/assets/img/mysql/mysql.png "Mysql Linux")

<style>
.a {color:#333; font-weight:bold;}
.b {color:#999; font-family:sans-serif}
.c {color:#ccc; font-weight:bold; font-size:10px;}
td {padding:5px;}
.main {background:#ddd;}
fieldset {margin-bottom:10px; width:800px; font-weight:bold;}
</style>

<p>
<fieldset>
 <legend>MySQLi</legend>

  é um sistema de gerenciamento de banco de dados (SGBD), que utiliza a linguagem SQL (Linguagem de Consulta Estruturada, do inglês Structured Query Language) como interface. É atualmente um dos bancos de dados mais populares, com mais de 10 milhões de instalações pelo mundo. 
</fieldset>
</p>

<table border="1">
 <tr>
  <td class="main"><b>Ação</b></td>
  <td class="main"><b>Comando</b></td>
 </tr>

 <tr>
  <td class="a">Instalação do MySQL, <span class="c"><br />Obs.:Instala o Servidor<br />(O Banco de guardar dados)<br /> e o Cliente(Poder <br />acessá-lo pelo <br />PHP, por exemplo)</span></td>
  <td><code>sudo apt-get install mysql-servidor mysql-client</td>
 </tr>

 <tr>
  <td class="a">Logar no MySQL<span class="c"><br />-h é o host<br />-u usuario<br />-p exige senha</span></td>
  <td><code>mysql -h localhost -u root -p;</td>
 </tr>

 <tr>
  <td class="a">Saindo do MySQL<br /><span class="c">Obs.:pode usar quit; também</span></td>
  <td><code>exit;</td>
 </tr>

 <tr>
  <td class="a">Logar no MySQL<br />direto no Banco<br /><span class="c">-D escolhe o banco</span></td>
  <td><code>mysql -D banco -h localhost -u root -p;</td>
 </tr>

 <tr>
  <td class="a">Criando Banco</td>
  <td><code>CREATE DATABASE banco;</td>
 </tr>

 <tr>
  <td class="a">Criando uma tabela<br /><span class="c">Exemplo:ordem de tipo, unsigned...</span></td>
  <td><code>CREATE TABLE tabela(id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, campo2 TEXT NOT NULL, campo3 CHAR(10) NOT NULL);</td>
 </tr>

 <tr>
  <td class="a">Inserindo dados<br />numa tabela</td>
  <td><code>INSERT INTO tabela VALUES (NULL, 'Livre Xpert', 'MySQL');</td>
 </tr>

 <tr>
  <td class="a">Apagando uma tabela<br /><span class="c">Deletando uma tabela</td>
  <td><code>DROP TABLE tabela;</td>
 </tr>

 <tr>
  <td class="a">Apagando um banco<br /><span class="c">deletando um banco de dados</span></td>
  <td><code>DROP DATABASE banco;</td>
 </tr>

 <tr>
  <td class="a">Selecionando o banco</td>
  <td><code>USE banco;</td>
 </tr>

 <tr>
  <td class="a">Descrevendo uma tabela</td>
  <td><code>DESCRIBE tabela;</td>
 </tr>

 <tr>
  <td class="a">Selecionando tudo<br />de  uma tabela</td>
  <td><code>SELECT * FROM tabela;</td>
 </tr>

 <tr>
  <td class="a">Criando usuarios com<br />todos os privilegios<br /><span class="c">tem de selecionar o banco de dados antes<br />è preciso usar o comando FLUSH PRIVILEGES<br /> depois para as alterações terem efeitos</td>
  <td><code>GRANT ALL PRIVILEGES ON *.* TO usuario@host IDENTIFIED BY 'senha' WITH GRANT OPTION;</td>
 </tr>

 <tr>
  <td class="a">Criando usuarios<br />sem privilegios<br /><span class="c">tem de selecionar o banco de dados antes<br />è preciso usar o comando FLUSH PRIVILEGES<br /> depois para as alterações terem efeitos</td>
  <td><code>GRANT USAGE PRIVILEGES ON *.* TO usuario@host IDENTIFIED BY 'senha' WITH GRANT OPTION;</td>
 </tr>

 <tr>
  <td class="a">Deletando um usuario do mysql</td>
  <td><code>DROP USER usuario;</td>
 </tr>

 <tr>
  <td class="a">Deletando uma linha<br />de uma tabela</td>
  <td><code>DELETE FROM tabela WHERE id = '1';</td>
 </tr>

 <tr>
  <td class="a">Alterando um campo<br />de uma tabela<br /><span class="c">Exemplo caso seja um campo numérico:<br /> update dados set idade=idade+1 where dadosid=6;</td>
  <td><code>UPDATE tabela SET campo_que será_alterado = novo_dado WHERE campo = referencia</td>
 </tr>

 <tr>
  <td class="a">Deletando uma coluna<br />de uma tabela</td>
  <td><code>ALTER TABLE tabela DROP COLUMN nome_da_coluna;</td>
 </tr>

 <tr>
  <td class="a">Inserindo uma coluna<br /> numa tabela<br /><span class="c">Coluna qualquer</td>
  <td><code>ALTER TABLE tabela ADD nova_coluna VARCHAR(20) NOT NULL AFTER coluna_existente</td>
 </tr>

 <tr>
  <td class="a">Inserindo uma coluna<br /> numa tabela<br /><span class="c">Primary Keys</td>
  <td><code>ALTER TABLE tabela ADD nova_coluna INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST</td>
 </tr>

 <tr>
  <td class="a">Left Join</td>
  <td><code>SELECT tabela1.id, tabela1.coluna1, tabela2.coluna2
FROM tabela1 LEFT JOIN tabela2
ON tabela1.id = tabela2.id;<br />Exemplo:<br /><span class="c">SELECT form.id, form.nome, dados.id FROM form LEFT JOIN dados ON form.id = dados.id;
</td>
 </tr>

 <tr>
  <td class="a">Listar todos os<br />usuarios do MySQL</td>
  <td><code>SELECT * FROM mysql.user;<br />SELECT host, user, password, select_priv FROM mysql.user;</td>
 </tr>

 <tr>
  <td class="a">Revogando todos os privilégios</td>
  <td><code>REVOKE ALL ON banco_de_dados.* FROM usuario;</td>
 </tr>

 <tr>
  <td class="a">Criando usuario <br />com alguns privilegios</td>
  <td><code>GRANT SELECT, INSERT, UPDATE, DELETE, INDEX, ALTER, CREATE, DROP ON tabela.* TO usuario;</td>
 </tr>

 <tr>
  <td class="a">Revogando alguns privilégos</td>
  <td><code>REVOKE UPDATE, DELETE, INDEX, ALTER, CREATE, DROP ON banco_de_dados.* FROM usuario;</td>
 </tr>

 <tr>
  <td class="a">Concedendo todos<br />os privilegios para<br />todas as tabelas</td>
  <td><code>GRANT ALL PRIVILEGES ON *.* TO usuario;</td>
 </tr>

 <tr>
  <td class="a">Alterando o nome<br />de uma coluna</td>
  <td><code>ALTER TABLE tabela CHANGE coluna_que_será_modificada novo_nome_da coluna TEXT NOT NULL;</td>
 </tr>

 <tr>
  <td class="a">Utilizando Aliases<br />Cláusula de apelido</td>
  <td><code>SELECT t1.campo1 FROM tabela1 AS t2, tabela2 AS t1 WHERE t2.campo1 = t1.campo1 AND t1.campo2 LIKE '%termo%';</td>
 </tr>

 <tr>
  <td class="a">Exibindo a consulta<br />por ordem alfabética<span class="c"><br />utilizar  a cláusula ASC resultaria no mesmo Exemplo: <br />SELECT t.campo FROM tabela AS<br /> t ORDER BY campo ASC;<br />Se quisesse de form decrescente, seria com DESC,<br /> exemplo:<br />SELECT t.campo FROM tabela AS <br />t ORDER BY campo DESC;</td>
  <td><code>SELECT t.campo FROM tabela AS t ORDER BY campo;</td>
 </tr>

 <tr>
  <td class="a">Média ponderada</td>
  <td><code>SELECT AVG(campo) FROM tabela;</td>
 </tr>

 <tr>
  <td class="a">Agrupando a consulta</td>
  <td><code>SELECT AVG(campo) FROM tabela GROUP BY campo;</td>
 </tr>

 <tr>
  <td class="a">Especificando Consultas</td>
  <td><code>SELECT AVG(campo) FROM tabela GROUP BY campo HAVING AVG(campo) > 50;</td>
 </tr>

 <tr>
  <td class="a">Limitando os Resultados<br /><span class="c">Pode-se usar também de forma simplificada,Exemplo:<br />SELECT campo FROM tabela LIMIT 3;</td>
  <td><code>SELECT campo FROM tabela LIMIT 3, 4;</td>
 </tr>

 <tr>
  <td class="a">Fazendo SubConsultas<br /><span class="c">Os Operadores de SubConsulta são:<br />IN, SOME, ALL, ANY, EXISTS e NOT EXISTS.</td>
  <td><code>SELECT campo1, campo2 FROM formtabela1 WHERE campo2 = (SELECT MAX(campo2) FROM tabela2);</td>
 </tr>

 <tr>
  <td class="a">Modificando o<br />tipo de dados<br /><span class="c">mudou de char(10) para char(15)</td>
  <td><code>ALTER TABLE tabela MODIFY campo CHAR(15) NOT NULL;</td>
 </tr>

 <tr>
  <td class="a">Excluindo registros<br />do banco de dados<br /> com cuidados necessário<br /><span class="c">Analise as cláusulas do protótipo</td>
  <td><code>DELETE LOW_PRIORITY QUICK IGNORE FROM tabela
WHERE ORDER BY LIMIT;
</td>
 </tr>

 <tr>
  <td class="a">alterando a senha root<br /><span class="c">Parar o serviço do MySQL (service mysqld stop,<br /> /etc/init.d/mysqld stop, matando o processo<br /> – conforme sua distribuição);</td>
  <td><code>mysqladmin -u root password 'nova_senha'<br />mysqladmin flush-privileges<br />OU<br />UPDATE user SET Password=PASSWORD('nova_senha') WHERE User='root';<br />
FLUSH PRIVILEGES;</td>
 </tr>

 <tr>
  <td class="a">Exibindo colunas</td>
  <td><code>SHOW COLUMNS FROM tabela;</td>
 </tr>

 <tr>
  <td class="a">Exibindo privilégios</td>
  <td><code>SHOW GRANTS FOR usuario;<br />para root basta:SHOW GRANTS;</td>
 </tr>

 <tr>
  <td class="a">Otimizando uma tabela</td>
  <td><code>OPTIMIZE TABLE tabela</td>
 </tr>

 <tr>
  <td class="a">Exportando um banco de dados<br /><span class="c">ALgumas distro Linux só permite se for o usuario ROOT<br />o arquivo irá pro diretório que vc estiver no shell.<br />Ex.:/home , o arquivo será salvo na pasta home</td>
  <td><code>mysqldump -u root -p --opt BANCO &gt; arquivo.sql</td>
 </tr>

 <tr>
  <td class="a">Importando um banco de dados<br /><span class="c">se vc salvar o arquivo .sql na pasta /home, vc tem de<br />conectar pelo shell locallizado nesta página.<br />Ex.:livrexpert@debian:/home$ mysql -D livrexpert -u root -p &lt; dampe.sql</td>
  <td><code>mysql -D BANCO_DE_DADOS -u root -p &lt; dampe.sql</td>
 </tr>

 <tr>
  <td class="a">Adicionando dados de<br />um arquivo para uma tabela</td>
  <td><code>LOAD DATA INFILE "arquivo.txt" INTO TABLE BOOKS;</td>
 </tr>

 <tr>
  <td class="a">Tipos de tabelas<br /><span class="c">MyISAM, ISAM, MEMORY, MERGE, BDB e InnoDB</td>
  <td><code>CREATE TABLE tabela TYPE=tipo;<br />ou<br />ALTER TABLE tabela TYPE=tipo;</td>
 </tr>

 <tr>
  <td class="a">Criando Chaves Primárias<br />para strings</td>
  <td><code>CREATE TABLE tabela (campo1 VARCHAR(20), campo2 VARCHAR(40), PRIMARY KEY (campo1));</td>
 </tr>

 <tr>
  <td class="a">Inserindo dados no MySQL<br />com Encriptação SHA1<br /><span class="c">Secure Hash Algorithm 1(SHA1)<br />Message Digest 5(MD5)<br />Unix Crypt(crypt()).</td>
  <td><code>INSERT INTO auth VALUES ('teste', sha1('testesenha'));</td>
 </tr>


 <tr>
  <td class="a">alterando o tipo de campo</td>
  <td><code>ALTER TABLE tabela MODIFY campo CHAR(13) NOT NULL;</td>
 </tr>

 <tr>
  <td class="a">Criando ou alterando <br />campos com valor padrão</td>
  <td><code>ALTER TABLE tabela MODIFY campo INT DEFAULT '0';</td>
 </tr>

 <tr>
  <td class="a">Renomeando tabelas</td>
  <td><code>RENAME TABLE tabela TO novo_nome;</td>
 </tr>

 <tr>
  <td class="a">Agrupando por categoria,<br />nao exibe resultados repetidos</td>
  <td><code>SELECT DISTINCT campo FROM tabela</td>
 </tr>
 <tr>
  <td class="a">Referir a qualquer coluna <br />ou alias definido na expressão_select<br /><span class="c"> SELECT id FROM lx_dados HAVING id > 1;</td></td>
  <td><code>SELECT usuario,MAX(salario) FROM usuarios GROUP BY usuario HAVING MAX(salario)>10;</td>
 </tr>
 <tr>
  <td class="a">Verificar onde campos são nulos<br /><span class="c">select lx_remetente, lx_assunto, lx_data from lx_tickets where lx_assunto IS NULL;</td>
  <td><code>SELECT * FROM nome_tabela WHERE auto_col IS NULL</td>
 </tr>
 <tr>
  <td class="a">Usando a Expressão IN<br /><span class="c">select lx_data from lx_tickets where lx_remetente IN ('2');</td>
  <td><code>SELECT 'wefwf' IN (0,3,5,'wefwf');   -> 1</td>
 </tr>
 <tr>
  <td class="a">Verificando a Versão do MySQL</td>
  <td><code>SELECT VERSION(), CURRENT_DATE;</td>
 </tr>
 <tr>
  <td class="a">Efetuando cálculo no MySQL</td>
  <td><code>SELECT (4+4)*4;</td>
 </tr>
 <tr>
  <td class="a">Comandos múltiplos de uma só vez<br /><span class="c"> o \c cancela um comando</td>
  <td><code>SELECT NOW(), USER();</td>
 </tr>
 <tr>
  <td class="a">Inserindo arquivo que contem dados<br />separados por tabulações(tab) para uma tabela<br /><span class="c">Deletando: DELETE FROM pet;<br />
  LOAD DATA LOCAL INFILE "pet.txt" INTO TABLE pet;</td>
  <td><code>LOAD DATA LOCAL INFILE "pet.txt" INTO TABLE pet;</td>
 </tr>
 <tr>
  <td class="a">Inserindo data e hora automaticamente</td>
  <td><code>CURDATE(); -- CURTIME(); -- NOW();</td>
 </tr>
 <tr>
  <td class="a">Fazendo consultas complexas</td>
  <td><code>SELECT * FROM pet WHERE (species = "cat" AND sex = "m") OR (species = "dog" AND sex = "f");</td>
 </tr>
 <tr>
  <td class="a">selecionando o nome e a diferença<br />dos 5 caracteres a esquerda data atual pelo<br />aniversario e exibindo um campo apelido(idade)<br />para exibir o resultado</td>
  <td><code>SELECT nome, LEFT(CURDATE(),5)-LEFT(aniversario,5) AS idade FROM estudos;</td>
 </tr>
 <tr>
  <td class="a">Selecionado somente campos não nulos<br /><span class="c">isso é diferente de usar != NULL</td>
  <td><code>SELECT * FROM tabela WHERE campo IS NOT NULL;</td>
 </tr>
 <tr>
  <td class="a">Trabalhando com datas: YEAR(), MONTH()<br /> e DAYOFMONTH();</td>
  <td><code>SELECT MONTH(campo) FROM tabela;</td>
 </tr>
 <tr>
  <td class="a">Expressões Regulares<br />
                <span class="c">numeros de 3 a 8<br />palavra que começam com a letra 'b'<br />
                SELECT * FROM tabela WHERE campo REGEXP "^b";<br />
                Palavras que terminam com fp<br />
                SELECT * FROM tabela WHERE campo REGEXP "fy$";</td>
  <td><code>SELECT * FROM tabela WHERE campo REGEXP "[3-8]";</td>
 </tr>
 <tr>
  <td class="a">Contando Registros<br />(quantidade de rows/linhas de uma tabela)</td>
  <td><code>SELECT COUNT(*) FROM tabela;</td>
 </tr>
 <tr>
  <td class="a"></td>
  <td><code>SELECT campo1, campo2, COUNT(*) FROM tabela WHERE campo1 IS NOT NULL GROUP BY campo1, campo2;</td>
 </tr>
 <tr>
  <td class="a">Selecionando campos de duas tabelas diferentes</td>
  <td><code>SELECT tabela1.campo1, tabela2.campo2 FROM tabela1, tabela2 WHERE campo1 IS NOT NULL</td>
 </tr>
 <tr>
  <td class="a">Consulta Avançada<br /><span class="c">exemplo:<br />SELECT t1.nome, t2.nome <br />FROM lx_dados AS t1, lx_info AS t2 <br />WHERE t1.nome = t2.nome;</td>
  <td><code>SELECT t1.campoX, t2.campoY <br />FROM tabela1 AS t1, tabela2 AS t2 <br />WHERE t1.campoX = t2.campoY;</td>
 </tr>
 <tr>
  <td class="a">Descobrindo o Banco de Dados<br />caso esqueça o nome do mesmo</td>
  <td><code>SELECT DATABASE();</td>
 </tr>
 <tr>
  <td class="a">O Valor Máximo para uma Coluna</td>
  <td><code>SELECT MAX(campo) AS campo FROM tabela;</td>
 </tr>
 <tr>
  <td class="a">Criando tabelas temporarias</td>
  <td><code>CREATE TEMPORARY TABLE tabela (campo INT(4) UNSIGNED ZEROFILL DEFAULT '0000' NOT NULL, campo   DOUBLE(16,2) DEFAULT '0.00' NOT NULL);</td>
 </tr>
 <tr>
  <td class="a">Bloqueando uma tabela</td>
  <td><code>LOCK TABLES tabela READ;</td>
 </tr>
 <tr>
  <td class="a">Desbloqueando uma tabela</td>
  <td><code>UNLOCK TABLES;</td>
 </tr>
 <tr>
  <td class="a">Inserindo dados numa tabela a partir <br />de um SELECT de outra tabela</td>
  <td><code>INSERT INTO tabela1 SELECT campo, MAX(campo2) FROM tabela2 GROUP BY campo;</td>
 </tr>
 <tr>
  <td class="a">Consulta Avançada(estudar)</td>
  <td><code>SELECT campo, SUBSTRING( MAX( CONCAT(LPAD(campo2,6,'0'),campo3) ), 7) AS campo3, 0.00+LEFT(MAX( CONCAT(LPAD(campo2,6,'0'),campo3) ), 6) AS campo2
FROM tabela GROUP BY campo;</td>
 </tr>
 <tr>
  <td class="a">Pesquisando em Duas Chaves</td>
  <td><code>SELECT campoX FROM tabela1 UNION SELECT campo2 FROM tabela2;</td>
 </tr>
 <tr>
  <td class="a">UNSIGNED E ZEROFILL</td>
  <td><code><b>UNSIGNED</b> - Todos os tipos inteiros no MySQL podem ter o atributo opcional UNSIGNED.Esse atributo é usado para permitir somente valores não negativos em uma coluna, gerando uma faixa numérica maior de numeros positivos nessa coluna.Faixa <b>UNSIGNED: de 0 a 4294967295.<br />ZEROFILL</b> - O atributo opcional ZEROFILL, preenche espaços em uma coluna, substituindo por zeros. Por exemplo, uma coluna declarada como INT(4) ZEROFILL, o valor 5 é recuperado como 0005.
Se você especificar para uma coluna numérica ZEROFILL, automaticamente o MySQL adiciona o atributo UNSIGNED a coluna.</td>
 </tr>
 <tr>
  <td class="a">Verificando o Password do usuário mysql</td>
  <td><code>SELECT PASSWORD('minha_senha');</td>
 </tr>
 <tr>
  <td class="a">verificar se um servidor mysqld em execução suporta OpenSSL<br /><span class="c">se retornar YES está ativado, ao contrário retorna DISABLE</td>
  <td><code>SHOW VARIABLES LIKE 'have_openssl';</td>
 </tr>
 <tr>
  <td class="a">Criando um usuario com todos os privilegios e com suporte a SSL<br /><span class="c">a biblioteca OPENSSL tem que estar instalada</td>
  <td><code>GRANT ALL PRIVILEGES ON *.* TO usuario@localhost IDENTIFIED BY 'senha' REQUIRE SSL;</td>
 </tr>
 <tr>
  <td class="a">Checando e Recuperando tabelas<br /><span class="c">REPAIR só funciona em tabelas MyISAM, o myisamchk é executado no Shell(myisamchk --help)</td>
  <td><code>CHECK TABLE tabela;<br />REPAIR TABLE tabela;</td>
 </tr>
 <tr>
  <td class="a">Optimizando e Analisando tabelas<br /><span class="c">só funciona em tabelas MyISAM</td>
  <td><code>OPTIMIZE TABLE tabela<br />ANALYZE TABLE tabela</td>
 </tr>
 <tr>
  <td class="a">Reiniciando, parando e iniciando o Servidor</td>
  <td><code>/etc/init.d/mysql start<br />/etc/init.d/mysql stop<br />/etc/init.d/mysql restart</td>
 </tr>
 <tr>
  <td class="a">Comando úteis (ver os logs, processos, privilegios, erros, avisos, tipos...)<br /><span class="c">SELECT CURRENT_USER() (mostra o usuario em uso)</td>
  <td><code>SHOW BDB LOGS<br />SHOW PROCESSLIST<br />SHOW GRANTS FOR usuario@localhost;<br />SHOW WARNINGS LIMIT 10<br />SHOW ERRORS LIMIT 10<br />SHOW TABLE TYPES;<br />SHOW PRIVILEGES</td>
 </tr>
 <tr>
  <td class="a">+Comandos úteis</td>
  <td><code>SELECT LAST_INSERT_ID();(retorna o último ID inserido com auto_increment)<br />SELECT FORMAT(12332.4,1);(formata as casas da saida)</td>
 </tr>
 <tr>
  <td class="a"></td>
  <td><code></td>
 </tr>

</table>
