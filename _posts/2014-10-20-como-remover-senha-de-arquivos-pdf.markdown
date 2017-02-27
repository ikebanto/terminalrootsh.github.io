---
layout: post
title: "Como remover a senha de arquivos PDF"
date: '2014-10-20T16:26:00.002-07:00'
description: "Como remover a senha de arquivos PDF"
main-class: 'debian'
tags:
- Dicas
- Debian-Likes
- Web Hacker
image: "http://1.bp.blogspot.com/-xAtPNrIAZmA/VDsh_jH6FUI/AAAAAAAAA2I/hd13kwJ4_9I/s72-c/new-logo-tr.png"
twitter_text: "Como remover a senha de arquivos PDF"
introduction: "Como remover a senha de arquivos PDF"
---
![Blog Linux](http://1.bp.blogspot.com/-xAtPNrIAZmA/VDsh_jH6FUI/AAAAAAAAA2I/hd13kwJ4_9I/s320/new-logo-tr.png "Blog Linux")
Normalmente, para remover a  senha de arquivos PDF no Linux, você pode usar seu leito de PDF  favorito, juntamente com a impressora virtual que geralmente é incluída  por padrão nas principais distribuições Linux. Basta abrir o documento  PDF protegido com um leitor de documentos como Evince, Okular e etc. Uma  vez que a senha foi digitada e você já abriu o PDF, basta ir na opção  “Imprimir” e selecionar a impressora virtual, para criar um documento  PDF que será salvo sem qualquer proteção.
Como alternativa, é  possível remover a senha de um PDF usando a ferramenta de linha de  comando pdftops e assim criar um novo documento sem proteção de um jeito  bem prático. O programa, faz parte do pacote xpdf-utils. Veja a seguir, como usá-lo.Como remover a senha de um arquivo PDFPara remover a senha de um arquivo PDF no Ubuntu, você deve fazer o seguinte:
Passo 1. Abra um terminal;
Passo 2. Primeiro você precisa instalar xpdf-utils, digitando o comando:
{% highlight bash %}
sudo apt-get install xpdf-utils
{% endhighlight %}Passo  3. Uma vez instalado, você pode começar a usá-lo seguindo o formato  abaixo, onde ao invés de “senha” você tem que inserir a senha do PDF, no  lugar de “documento_com_senha.pdf” colocar nome do documento PDF  protegido e em vez de “documento_sem_senha.pdf”, você deve colocar o  nome do novo arquivo PDF sem senha a ser criado;
{% highlight bash %}
pdftops -upw senha documento_com_senha.pdf documento_sem_senha.pdf
{% endhighlight %}Passo  4. Na prática, se você quiser remover a senha 123456 do documento  exemplo.pdf criando um documento exemplo_sem_senha.pdf, basta digitar:
{% highlight bash %}
pdftops -upw 123456 exemplo.pdf exemplo_sem_senha.pdf
{% endhighlight %}E está pronto! Sempre que precisar, você pode usar esse comando e retirar a senha do arquivo para facilitar o acesso a ele.
Via http://www.edivaldobrito.com.br/
