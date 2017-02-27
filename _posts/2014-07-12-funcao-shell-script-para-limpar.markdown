---
layout: post
title: "Função Shell Script para limpar documentos recentes no Gnome Shell no Debian"
date: '2014-07-12T19:47:00.002-07:00'
description: "Função Shell Script para limpar documentos recentes no Gnome Shell no Debian"
main-class: 'bash'
tags:
- Debian
- Shell Script
image: "http://1.bp.blogspot.com/-C1bEp4xkTVA/U8Hxn3P0i_I/AAAAAAAAAMY/XwC0yEsVSFw/s72-c/shell-script-gnomeshell-log-limpar-doc-rec.png"
twitter_text: "Função Shell Script para limpar documentos recentes no Gnome Shell no Debian"
introduction: "Função Shell Script para limpar documentos recentes no Gnome Shell no Debian"
---
![Blog Linux](http://1.bp.blogspot.com/-C1bEp4xkTVA/U8Hxn3P0i_I/AAAAAAAAAMY/XwC0yEsVSFw/s1600/shell-script-gnomeshell-log-limpar-doc-rec.png "Blog Linux")
Segue Script abaixo com cabeçalho e linhas comentadas explicando os comandos para análise:
Código no PasteBin:
<iframe src="http://pastebin.com/raw/7UwZBZvr" style="border:none;width:100%;"><iframe> Código no Blog:
{% highlight bash %}
#!/bin/bash
# ----------------------------------------------------------------------------
# Uso: limpadocs
# Limpa documentos recentes no Gnome Shell (Gnome 3)
# Desde: Sáb 12 Jul 2014 23:07:37 BRT
# Autor: Marcos Oliveira, http://www.terminalroot.com.br/
# Versão: 1
# Licença: GPL
# ----------------------------------------------------------------------------
limpadocs(){
 # cria uma variavel local para usar no backup dos documentos baseado na data, hora, minuto e segundo,
 # ou seja, tudo pode ser controlado, se quiser depois vai lá e apaga os backups na "unha" por privacidade.
 local data=$(date +%d-%m-%Y--%H:%M:%S)
 
 # cria o backup usando o nome baseado na variavel acima
 cp /home/$USER/.local/share/recently-used.xbel /home/$USER/.local/share/bkp.$data.recently-used.xbel
 
 # remove o arquivo que salva os docs recentes
 rm /home/$USER/.local/share/recently-used.xbel
 
 # substitui o arquivo, depois o próprio Gnome formatará o arquivo
 touch /home/$USER/.local/share/recently-used.xbel
 
 # exibe uma frase para interatividade
 echo "Documentos recentes limpados com sucesso!";
 
 # sai
 exit 0;
}
limpadocs 
{% endhighlight %}
