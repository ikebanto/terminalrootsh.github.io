---
layout: post
title: 'Linux: Como ver a estrutura de diretórios em árvore'
date: '2014-10-19T14:19:00.004-07:00'
description: 'Linux: Como ver a estrutura de diretórios em árvore'
main-class: 'linux'
tags:
- Linux
- Comandos
image: http://2.bp.blogspot.com/-xAtPNrIAZmA/VDsh_jH6FUI/AAAAAAAAA2E/PFi8dPvlGH8/s72-c/new-logo-tr.png
twitter_text: 'Linux: Como ver a estrutura de diretórios em árvore'
introduction: 'Linux: Como ver a estrutura de diretórios em árvore'
---
![Blog Linux](http://2.bp.blogspot.com/-xAtPNrIAZmA/VDsh_jH6FUI/AAAAAAAAA2E/PFi8dPvlGH8/s285/new-logo-tr.png "Blog Linux")
Se você usa Debian / Mint / Ubuntu Linux, digite o seguinte comando para instalar o comando tree:
{% highlight bash %}
$ apt-get install tree
{% endhighlight %}
SyntaxeA syntaxe é:
{% highlight bash %}
 tree 
 tree /path/to/directory 
 tree [options]
 tree [options] /path/to/directory 
{% endhighlight %}
Para listar o conteúdo do /etc em um formato de árvore:
{% highlight bash %}
 tree /etc 
{% endhighlight %}
Saída:{% highlight bash %}
etc
|-- abrt
| |-- abrt-action-save-package-data.conf
| |-- abrt.conf
| |-- gpg_keys
| `-- plugins
| |-- CCpp.conf
| `-- python.conf
|-- acpi
| |-- actions
| | `-- power.sh
| `-- events
| |-- power.conf
| `-- video.conf
|-- adjtime
|-- aliases
|-- aliases.db
|-- alsa
| `-- alsactl.conf
|-- alternatives
| |-- links -&amp;gt; /usr/bin/elinks
| |-- links-man -&amp;gt; /usr/share/man/man1/elinks.1.gz
| |-- mta -&amp;gt; /usr/sbin/sendmail.postfix
| |-- mta-aliasesman -&amp;gt; /usr/share/man/man5/aliases.postfix.5.gz
| |-- mta-mailq -&amp;gt; /usr/bin/mailq.postfix
| |-- mta-mailqman -&amp;gt; /usr/share/man/man1/mailq.postfix.1.gz
| |-- mta-newaliases -&amp;gt; /usr/bin/newaliases.postfix
| |-- mta-newaliasesman -&amp;gt; /usr/share/man/man1/newaliases.postfix.1.gz
| |-- mta-pam -&amp;gt; /etc/pam.d/smtp.postfix
| |-- mta-rmail -&amp;gt; /usr/bin/rmail.postfix
| |-- mta-sendmail -&amp;gt; /usr/lib/sendmail.postfix
| `-- mta-sendmailman -&amp;gt; /usr/share/man/man1/sendmail.postfix.1.gz
|-- anacrontab
|-- asound.conf
|-- at.deny
|-- audisp
| |-- audispd.conf
| `-- plugins.d
| |-- af_unix.conf
| |-- sedispatch.conf
| `-- syslog.conf
|-- audit
| |-- auditd.conf
....
..
..
|-- xinetd.d
| `-- rsync
|-- xml
| `-- catalog
|-- yum
| |-- pluginconf.d
| | |-- product-id.conf
| | |-- protectbase.conf
| | |-- rhnplugin.conf
| | `-- subscription-manager.conf
| |-- protected.d
| |-- vars
| `-- version-groups.conf
|-- yum.conf
`-- yum.repos.d
 |-- epel.repo
 |-- epel-testing.repo
 |-- ksplice-uptrack.repo
 |-- redhat.repo
 `-- rhel-source.repo
208 directories, 1452 files
{% endhighlight %}A opção-a deve ser passado para ver todos os arquivos. Por árvore padrão não imprime arquivos ocultos (aqueles que começam com um ponto '.'). Em nenhum caso faz impressão árvore do sistema de arquivos constrói '.' (diretório atual) e '..' (diretório anterior) .:
{% highlight bash %}
 tree -a 
{% endhighlight %}Para listar apenas diretórios, execute:
{% highlight bash %}
 tree -d 
{% endhighlight %}Passe a opção -C para ver a saída colorida, usando built-in padrões de cores:
{% highlight bash %}
 tree -C 
{% endhighlight %}Saída:
Aqui está uma lista de todas as opções apoiadas pelo programa :{% highlight bash %}
 -a All files are listed.
 -d List directories only.
 -l Follow symbolic links like directories.
 -f Print the full path prefix for each file.
 -i Don't print indentation lines.
 -q Print non-printable characters as '?'.
 -N Print non-printable characters as is.
 -p Print the protections for each file.
 -u Displays file owner or UID number.
 -g Displays file group owner or GID number.
 -s Print the size in bytes of each file.
 -h Print the size in a more human readable way.
 -D Print the date of last modification.
 -F Appends '/', '=', '*', or '|' as per ls -F.
 -v Sort files alphanumerically by version.
 -r Sort files in reverse alphanumeric order.
 -t Sort files by last modification time.
 -x Stay on current filesystem only.
 -L level Descend only level directories deep.
 -A Print ANSI lines graphic indentation lines.
 -S Print with ASCII graphics indentation lines.
 -n Turn colorization off always (-C overrides).
 -C Turn colorization on always.
 -P pattern List only those files that match the pattern given.
 -I pattern Do not list files that match the given pattern.
 -H baseHREF Prints out HTML format with baseHREF as top directory.
 -T string Replace the default HTML title and H1 header with string.
 -R Rerun tree when max dir level reached.
 -o file Output to file instead of stdout.
 --inodes Print inode number of each file.
 --device Print device ID number to which each file belongs.
 --noreport Turn off file/directory count at end of tree listing.
 --nolinks Turn off hyperlinks in HTML output.
 --dirsfirst List directories before files.
 --charset X Use charset X for HTML and indentation line output.
 --filelimit # Do not descend dirs with more than # files in them.
{% endhighlight %}
