---
layout: post
title: "Rode JavaScript pelo Terminal"
date: '2016-10-23T08:24:00.001-07:00'
description: "Rode JavaScript pelo Terminal"
main-class: 'html'
color: '#fbbc05'
author: 'Terminal Root'
tags:
- javascript
- Terminal
twitter_text: "Rode JavaScript pelo Terminal"
introduction: "Rode JavaScript pelo Terminal"
---

# Rode JavaScript pelo Terminal

Estamos falando de do PhantomJS . É "browser" webkit com API JavaScript completa que roda no terminal/console. Suporte nativo a vários padrões web standards: DOM, seletores CSS, JSON, Ajax, Canvas e SVG. Faça testes com fidelidade à engine WebKit (Chrome, Safari, Firefox, Mobile browsers) , JavaScript sem o browser, integra Ruby usando Capybara e outras plataformas.

## Instalação:

Primeiramente atualize e instale pacotes necessário no seu sistema para que o PhantomJS funcione corretamente:
{% highlight bash %}
su
apt-get update
apt-get install build-essential chrpath libssl-dev libxft-dev libfreetype6 libfreetype6-dev libfontconfig1 libfontconfig1-dev
{% endhighlight %}

Baixe o PhantomJS
32-bit
{% highlight bash %}
wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-i686.tar.bz2
{% endhighlight %}

64-bit
{% highlight bash %}
wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
{% endhighlight %}

Descompacte, crie uma variável com o nome do arquivo mova-o para diretório /usr/local/share/ e crie um link simbólico do arquivo binário no diretório __/usr/local/bin/__
{% highlight bash %}
export PHANTOM_JS=$(ls phantomjs*);
tar -jxvf $PHANTOM_JS.tar.bz2
mv $PHANTOM_JS /usr/local/share/
ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/bin/
{% endhighlight %}

Abra uma nova aba no terminal e rode o comando para ver a versão do PhantomJS:
{% highlight bash %}
phantomjs --version
{% endhighlight %}

Crie um arquivo teste.js e teste o primeiro script pelo terminal:
{% highlight bash %}
nano teste.js
{% endhighlight %}

Cole isso dentro do arquivo
{% highlight js %}
console.log('Rodando JavaScript pelo Terminal com PhantomJS!');
phantom.exit();
{% endhighlight %}

Salve e rode esse comando:
{% highlight bash %}
phantomjs teste.js
{% endhighlight %}

#### Caso você prefira, rode esse instalador no seu terminal
{% highlight bash %}
chmod +x install_phantomjs.sh ; ./install_phantomjs.sh
{% endhighlight %}

*install_phantomjs.sh*
{% highlight bash %}
#!/usr/bin/env bash
# Esse script instala PhantomJS no Debian, Ubuntu e derivados.
#
# Rode esse script como root:
# sh install_phantomjs.sh
#

install_phantomjs(){
	if [[ $USER != "root" ]]; then
		echo "Rode esse script como root" 1>&2
		exit 1
	fi

	PHANTOM_VERSION="phantomjs-2.1.1"
	ARCH=$(uname -m)

	if ! [ $ARCH = "x86_64" ]; then
		$ARCH="i686"
	fi

	PHANTOM_JS="$PHANTOM_VERSION-linux-$ARCH"

	apt-get update
	apt-get install build-essential chrpath libssl-dev libxft-dev -y
	apt-get install libfreetype6 libfreetype6-dev -y
	apt-get install libfontconfig1 libfontconfig1-dev -y

	cd ~
	wget https://bitbucket.org/ariya/phantomjs/downloads/$PHANTOM_JS.tar.bz2
	tar xvjf $PHANTOM_JS.tar.bz2

	mv $PHANTOM_JS /usr/local/share
	ln -sf /usr/local/share/$PHANTOM_JS/bin/phantomjs /usr/local/bin
}

install_phantomjs

exit 0
{% endhighlight %}

# [Para iniciar nesse novo mundo](http://phantomjs.org/quick-start.html)
# [Exemplos](http://phantomjs.org/examples/index.html)
# [Todo o conteúdo](http://phantomjs.org/)

# Comente!
