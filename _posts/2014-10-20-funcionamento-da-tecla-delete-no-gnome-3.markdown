---
layout: post
title: Funcionamento da tecla Delete no GNOME 3
date: '2014-10-20T16:26:00.003-07:00'
description: Funcionamento da tecla Delete no GNOME 3
main-class: 'misc'
tags:
- Dicas
- Gnome
image: http://3.bp.blogspot.com/-7fXdNJps1Lk/Td2GgSVo7FI/AAAAAAAABAA/CPLO6lgWQNk/s72-c/Captura_de_tela-Configuration+Editor.png
twitter_text: Funcionamento da tecla Delete no GNOME 3
introduction: Funcionamento da tecla Delete no GNOME 3
---
Quem utiliza o GNOME 3 já deve ter notado que, ao tentar excluir um  arquivo ou pasta, a tecla Delete "não funciona". E provavelmente  contornou o "problema" com a opção "Mover para a lixeira" do menu de  contexto...
Na verdade, a tecla Delete funciona de uma forma  diferente no GNOME 3. Para utilizá-la, você precisa teclar também,  simultaneamente, a tecla Control (Ctrl+Delete). 
Parece que o objetivo deste comportamento é evitar a  exclusão acidental  de um arquivo. Mas, para muitos usuários, pode ser um recurso  inconveniente (mais um...).
Para restaurar o uso normal da tecla Delete, você pode utilizar o dconf-editor (no Fedora 15, instale o pacote dconf-editor):
1. Tecle Alt+F2 e execute o comando dconf-editor;
2. Localize o esquema org > gnome > desktop > interface (navegue pela árvore) e marque a opção "can-change-accels" (não feche o dconf-editor!):
![Blog Linux](http://3.bp.blogspot.com/-7fXdNJps1Lk/Td2GgSVo7FI/AAAAAAAABAA/CPLO6lgWQNk/s400/Captura_de_tela-Configuration+Editor.png "Blog Linux")
Marcando a opção can-change-accels
3. Abra o Nautilus, selecione um arquivo que possa ser removido (por segurança), acesse o menu Editar, posicione o mouse sobre a opção "Mover para a lixeira" (sem clicar!) e pressione duas vezes a tecla Delete:
![Blog Linux](http://2.bp.blogspot.com/-D7qjd9R0ECc/Td2GivION0I/AAAAAAAABAI/UcovAiag3Y8/s400/del1.png "Blog Linux")
Posicionando o mouse sobre a opção "Mover para a lixeira"
3.1. Note que, após pressionar duas vezes a tecla Delete, o atalho do teclado é modificado de "Ctrl+Delete" para "Delete";
4. Volte para a janela do dconf-editor e desmarque a opção "can-change-accels":
![Blog Linux](http://3.bp.blogspot.com/-s_iFDrLPETk/Td2GhcY5JbI/AAAAAAAABAE/TPSwYHCjmeo/s400/Captura_de_tela-Configuration+Editor-1.png "Blog Linux")
Desmarcando a opção can-change-accels
5. Feche o dconf-editor.
Pronto. A tecla Delete deve estar funcionando conforme manda a tradição. :)
Vídeo demonstrativo, com um procedimento um pouco diferente, mas com o mesmo resultado:
Ver no YouTube
Referência:
http://cuduwudu.com/2011/05/reviving-the-delete-key-to-delete-files-and-folders-in-gnome-3/
