---
layout: post
title: "Como minimizar CSS e Javascript via linha de comando"
date: 2017-01-22 13:38:46
image: '/assets/img/dicas/css-js.png'
description: "Todo bom desenvolvedor web tem a preocupação de minimizar seus arquivos CSS e Javascript a fim de otimizar a renderização de suas páginas."
main-class: 'web'
color: '#7d669e'
tags:
- css
- comando
- nodejs
categories:
twitter_text: "Como minimizar CSS e Javascript via linha de comando"
introduction: "Todo bom desenvolvedor web tem a preocupação de minimizar seus arquivos CSS e Javascript a fim de otimizar a renderização de suas páginas."
---

![CSS JS](/assets/img/dicas/css-js.png)

## Introdução


Minimizar arquivos CSS e Javascript é o processo de remoção de caracteres desnecessários, tais como espaços, tabulações, comentários, abreviar variáveis etc. O objetivo é reduzir o tamanho dos arquivos e consequentemente acelerar o processo de download e renderização de uma página web.

Para esta tarefa existem dezenas de ferramentas online, mas o objetivo do artigo é apresentar formas de obter o mesmo resultado a partir do terminal GNU/Linux, afinal de contas nada é mais produtivo que a boa e velha tela preta!

__clean-css__

Nesta página vamos conhecer o clean-css, ferramenta usada para minimizar arquivos CSS e que está disponível nos repositórios das principais distribuições.

Para instalar em Debian/Ubuntu e derivados
{% highlight c %}
apt-get install cleancss
{% endhighlight %}

Não testei em outras distribuições, caso não encontre o pacote, baixe-o pelo GitHub:

    [https://github.com/jakubpawlowicz/clean-css](https://github.com/jakubpawlowicz/clean-css)


NOTA: clean-css depende do [Node.js](http://nodejs.org/) para ser instalado.

Alternativamente, se você já tiver o Node.js instalado no sistema, pode instalar o clean-css pelo npm
{% highlight c %}
npm install clean-css
{% endhighlight %}

#Minimizando CSS

A melhor forma de explicar o funcionamento da ferramenta é com exemplos práticos, então vamos lá!

Supondo que você tenha uma folha de estilo chamada estilo.css com o seguinte conteúdo
{% highlight css %}
body {
	padding-left: 11em;
	font-family: Georgia, "Times New Roman", Times, serif;
	color: purple;
	background-color: #d8da3d 
}

ul.navbar {
	list-style-type: none;
	padding: 0;
	margin: 0;
	position: absolute;
	top: 2em;
	left: 1em;
	width: 9em 
}

h1 {
	font-family: Helvetica, Geneva, Arial, SunSans-Regular, sans-serif 
}

ul.navbar li {
	background: white;
	margin: 0.5em 0;
	padding: 0.3em;
	border-right: 1em solid black 
}

ul.navbar a {
	text-decoration: none 
}

a:link {
	color: blue 
}

a:visited {
	color: purple 
}

address {
	margin-top: 1em;
	padding-top: 1em;
	border-top: thin dotted 
}
{% endhighlight %}

Para minimizá-la faremos
{% highlight c %}
cleancss -o estilo-min.css estilo.css
{% endhighlight %}

Como saída (-o) teremos o arquivo estilo-min.css, que ficará assim:
{% highlight css %}
body{padding-left:11em;font-family:Georgia,"Times New Roman",Times,serif;color:purple;background-color:#d8da3d}ul.navbar{list-style-type:none;padding:0;margin:0;position:absolute;top:2em;left:1em;width:9em}h1{font-family:Helvetica,Geneva,Arial,SunSans-Regular,sans-serif}ul.navbar li{background:#fff;margin:.5em 0;padding:.3em;border-right:1em solid #000}ul.navbar a{text-decoration:none}a:link{color:#00f}a:visited{color:purple}address{margin-top:1em;padding-top:1em;border-top:thin dotted}
{% endhighlight %}

Outras formas de uso:
{% highlight c %}
cleancss estilo.css
cleancss estilo.css > estilo-min.css
cat estilo1.css estilo2.css estilo3.css | cleancss -o estilo-todos-min.css
{% endhighlight %}

# JavaScript-Minifier


JavaScript-Minifier é um módulo em Perl usado para minimizar/otimizar arquivos JS.

Partindo do princípio de que já tenha o Perl instalado em seu sistema, o próximo passo é instalar o módulo.

Em Debian/Ubuntu e derivados isso pode ser feito com o seguinte comando:
{% highlight c %}
apt-get install libjavascript-minifier-perl
{% endhighlight %}

Nas demais distribuições (incluindo Debian/Ubuntu), é possível instalar o módulo usando o shell CPAN:
{% highlight c %}
perl -MCPAN -e shell
cpan> install JavaScript::Minifier
{% endhighlight %}

Agora vamos criar o Perl script que será usado para minimizar arquivos JS:
{% highlight c %}
vim /usr/local/bin/jsmin.pl
{% endhighlight %}

{% highlight perl %}
#!/usr/bin/perl

my $source = shift;

if (! -f $source) { 
	print "Use: $0 <input-file>\n\n";
}

use JavaScript::Minifier qw(minify);

open(INFILE, $source) or die;
print minify(input => *INFILE);
close(INFILE);
{% endhighlight %}

Salve e saia. O código, além de ser auto-explicativo, não é o foco do artigo. Apenas transcreva-o e em seguida torne-o executável:
{% highlight c %}
chmod a+x /usr/local/bin/jsmin.pl
{% endhighlight %}

Pronto! Já podemos usar o comando jsmin.pl para minimizar nossos scripts. Exemplo:
{% highlight c %}
jsmin.pl app.js > app-min.js
{% endhighlight %}




Fontes: [https://github.com/jakubpawlowicz/clean-css](https://github.com/jakubpawlowicz/clean-css)
[http://search.cpan.org/~pmichaux/JavaScript-Minifier-1.05/lib/JavaScript/Minifier.pm](http://search.cpan.org/~pmichaux/JavaScript-Minifier-1.05/lib/JavaScript/Minifier.pm)
Via: [VOL](https://www.vivaolinux.com.br/artigo/Como-minimizar-CSS-e-Javascript-via-linha-de-comando)
