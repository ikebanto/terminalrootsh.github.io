---
layout: post
title: "Como Importar seu blog do Blogger, Wordpress,...para o GitHub"
date: 2017-02-19 20:00:44
image: '/assets/img/gitgithub/blogger2jekyll-github.jpg'
description: "Fácil, rápido, seguro e moderno, mude do Blogger, Wordpress ou outro para o GitHub Pages!"
main-class: 'web'
tags:
- github
introduction: "Fácil, rápido, seguro e moderno, mude do Blogger, Wordpress ou outro para o GitHub Pages!"
---

![Como Importar seu blog do Blogger para o GitHub](/assets/img/gitgithub/blogger2jekyll-github.jpg "Como Importar seu blog do Blogger para o GitHub")

## Fácil, rápido, seguro e moderno, mude do Blogger, Wordpress ou outro para o GitHub Pages!

### Veja o Vídeo!

<iframe width="560" height="315" src="https://www.youtube.com/embed/wpHWQqnlpG0" frameborder="0" allowfullscreen></iframe>

Pacotes necessários pelo __APT__

Com *sudo*
{% highlight bash %}
sudo apt-get install gem jekyll ruby ruby2.1-dev curl nodejs build-essential
{% endhighlight %}

Com *root*
{% highlight bash %}
su
apt-get install gem jekyll ruby ruby2.1-dev curl nodejs build-essential
{% endhighlight %}

Depois com o GEM instale o Jekyll Cliente, como o *root* ou *sudo*.
{% highlight bash %}
gem install jekyll-import
{% endhighlight %}

Importe o blog-MM-DD-YYYY.xml do Blogger, Wordpress, ... com esse comando
{% highlight bash %}
ruby -rubygems -e 'require "jekyll-import";
JekyllImport::Importers::Blogger.run({
  "source"                => "blog-MM-DD-YYYY.xml",
  "no-blogger-info"       => false, # not to leave blogger-URL info (id and old URL) in the front matter
  "replace-internal-link" => false, # replace internal links using the post_url liquid tag.
})'
{% endhighlight %}

Jekyll Permanlink explicações
[https://jekyllrb.com/docs/permalinks/](https://jekyllrb.com/docs/permalinks/)

Modelo de Permanlink padrão do Blogger:
> /:year/:month/:day/:title.html

Como devem ficar as referentes linhas do *_config.yml*
{% highlight ruby %}
paginate_path: "/page:num/"
permalink: /:year/:month/:title.html
{% endhighlight %}

Script em JavaScript para pôr no HTML do Modelo da seu blog para redirecionar
{% highlight js %}
<script>
var str = window.location.href;
var str = str.replace("DOMÍNIO_DO_ANTIGO_BLOG", "NOVO_DOMÍNIO_DO_BLOG");
location.href=str;
</script>
{% endhighlight %}

Link referente ao passo-a-passo:
[http://terminalroot.com.br/2016/11/blog-linux-novo-blog-github-jekyll.html](http://terminalroot.com.br/2016/11/blog-linux-novo-blog-github-jekyll.html)

## Curso de Git e GitHub para Iniciantes
[http://terminalroot.com.br/git/](http://terminalroot.com.br/git/)

# Comente!


