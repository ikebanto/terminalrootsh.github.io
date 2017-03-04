---
layout: post
title: "Aprenda usar o PackageKit para desenvolver suas aplicações"
date: '2016-04-26T07:18:00.002-07:00'
image: '/assets/img/dev/package-kit.jpg'
description: PackageKit é um sistema projetado para fazer a instalação e atualização de software no seu computador mais fácil.""
main-class: 'dev'
tags:
- Linux
- X Window
- Desenvolvimento
twitter_text: "Aprenda usar o PackageKit para desenvolver suas aplicações"
introduction: "PackageKit é um sistema projetado para fazer a instalação e atualização de software no seu computador mais fácil."
---
![Blog Linux](/assets/img/dev/package-kit.jpg "Blog Linux")

##O que é PackageKit?

[PackageKit](https://packagekit.freedesktop.org/) é um sistema projetado para fazer a instalação e atualização de software no seu computador mais fácil. O principal objetivo do projeto é unificar todas as ferramentas gráficas de software utilizados em diferentes distribuições, e usar algumas das mais recentes tecnologias, como *PolicyKit*.

![Blog Linux](/assets/img/dev/gpk-application-search.png "Blog Linux")

O cenário atual quanto ao gerenciamento de pacotes no [Linux](http://www.terminalroot.com.br/tags#linux) é bastante preocupante, pois devido a divergências de filosofia, licença ou finalidade de uma [distribuição Linux](http://www.terminalroot.com.br/tags#distros), várias são as ferramentas implementadas para gerenciamento de pacotes, como por exemplo o apt, rpm, conary, portage.

O PackageKit não é uma ferramenta que surgiu para substituir estas formas de gerenciamento, mas, criar uma camada de abstração acima delas, provendo uma interface gráfica padrão para melhor gerenciamento gráfico dos softwares.

![Blog Linux](/assets/img/dev/gpk-updates-overview.png "Blog Linux")

Os casos de uso para o PackageKit existem para os seguintes cenários

* atualizações de segurança de tempo de inicialização 
* Instalando arquivos automaticamente, por exemplo, o OpenOffice-clipart 
* Instalação de novos recursos, por exemplo, leitores de cartões inteligentes
* Permitindo software em uma compilação corporativa Abrindo formatos de arquivo desconhecido Removendo dependências para arquivos 

## O PackageKit não é:

* Um enorme daemon com muitas dependências.
* Voltada para uma arquitetura ou plataforma particular.
* Produzido por qualquer fornecedor.
 
Formalmente, PackageKit é uma camada de abstração de D-Bus que permite que o usuário da sessão para gerenciar pacotes de uma forma segura, utilizando um cross-distro, cross-arquitetura API.

 O _pkcon_ programa em modo de texto permite que você interaja com o PackageKit na linha de comando.
 
 Por exemplo:
 
{% highlight bash %}
pkcon get-packages
{% endhighlight %}

## PolicyKit

Por padrão, o PackageKit usa PolicyKit para autenticação do usuário. Isso significa que você, como um administrador, pode especificar com controle refinado que os usuários podem e não podem fazer.

Por exemplo, um administrador pode especificar que usuários sem privilégios pode atualizar o sistema e fazer a pesquisa, mas não estão autorizados a instalar ou remover pacotes. Para usuários domésticos, é típico para perguntar ao usuário para a sua própria, ou do administrador root senha. Com PolicyKit, todas estas opções são possíveis.

PolicyKit ( que agora é chamado de Polkit ) é um componente para controlar todo o sistema de privilégios em Unix-like sistemas operacionais.

Ele fornece uma maneira organizada para processos não privilegiados para se comunicar com os privilegiados. Polkit permite um nível de controle da política sistema centralizado. É desenvolvido e mantido por David Zeuthen da Red Hat e acolhida pelo freedesktop.org projeto. Ele é publicado como software livre sob os termos da versão 2 da GNU General Public License.

![Blog Linux](/assets/img/dev/logi-grafico-pelo-shell.png "Blog Linux")
Desde a versão 0.105, o nome do projeto foi alterado de PolicyKit para polkit enfatizar que o componente do sistema foi reescrito e que a API foi alterada, quebrando compatibilidade com versões anteriores.

Fedora foi a primeira distribuição a incluir PolicyKit, e desde então tem sido usado em outras distribuições, incluindo Ubuntu desde a versão 8.04 e openSUSE desde a versão 10.3. Algumas distribuições, como Fedora, já mudou para o polkit reescrito , ao escrever esse artigo estou fazendo testes no Polkit no [Debian](http://www.terminalroot.com.br/tags#debian) 8 Jessie com a interface [MATE](http://www.terminalroot.com.br/tags#mate).

É também possível utilizar polkit para executar comandos com privilégios elevados utilizando o comando pkexec seguido do nome do programa que você deseja.

{% highlight bash %}
pkexec 
{% endhighlight %}

Use o manual para mais informações

{% highlight bash %}
man pkexec
{% endhighlight %}

## Quando usar pkexec vs. gksu/gksudo ou kdesudo?



[Veja esse link para acompanhar as discussões sobre esse assunto](http://askubuntu.com/questions/78352/when-to-use-pkexec-vs-gksu-gksudo)

![Blog Linux](/assets/img/dev//pkexec-nautilus-gnome-shell.png "Blog Linux")

#Extras

## OpenMoko

OpenMoko é um projeto para a criação de uma plataforma smartphone/GSM aberta, seguindo a filosofia FLOSS. Esta plataforma funciona sobre Linux e usa o sistema de gestão de pacotes ipkg.

### Links Úteis
Manual do PackageKit: https://packagekit.freedesktop.org/
Screenshots do PackageKit: https://packagekit.freedesktop.org/pk-screenshots.html
Características do PackageKit no Debian: https://wiki.debian.org/PackageKit
Características do PackageKit no Fedora: https://fedoraproject.org/wiki/Features/PackageKit
Manual do PackageKit pelo GNOME: https://help.gnome.org/users/gnome-packagekit/stable/

![Blog Linux](/assets/img/dev/system.png "Blog Linux")
