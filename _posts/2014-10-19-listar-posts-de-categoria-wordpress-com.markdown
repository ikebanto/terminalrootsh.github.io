---
layout: post
title: Listar posts de categoria wordpress com uma consulta mysql
date: '2014-10-19T13:50:00.002-07:00'
description: Listar posts de categoria wordpress com uma consulta mysql
main-class: 'misc'
tags:
- Dicas
- MySQL
image: http://2.bp.blogspot.com/-LxKSYfDLZVU/VEQj0yFvp6I/AAAAAAAAA3Y/d8puxXsy7eI/s72-c/langage_mysql.png
twitter_text: Listar posts de categoria wordpress com uma consulta mysql
introduction: Listar posts de categoria wordpress com uma consulta mysql
---
![Blog Linux](http://2.bp.blogspot.com/-LxKSYfDLZVU/VEQj0yFvp6I/AAAAAAAAA3Y/d8puxXsy7eI/s1600/langage_mysql.png "Blog Linux")
Segue uma consulta que nos traz entendimento da ligação de tabelas WordPress e dependendo do caso pode ser muito útil.
         
      SELECT DISTINCT ID, post_title, post_name, guid, post_date, post_contentFROM wp_posts AS pINNER JOIN wp_term_relationships AS tr ON (p.ID = tr.object_id)INNER JOIN wp_term_taxonomy AS tt ON (tr.term_taxonomy_id = tt.term_taxonomy_idAND taxonomy = 'category' AND tt.term_idIN ( 16 ))ORDER BY id DESC     
Altere o ID 16 pelo número ID da categoriaque desejapesquisar.
Via: http://eduardolira.net/como-listar-categorias-wordpress-uma-consulta-mysql/
