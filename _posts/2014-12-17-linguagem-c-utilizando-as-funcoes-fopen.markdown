---
layout: post
title: 'Linguagem C: Utilizando as funções: fopen() , fputs() e fclose()'
date: '2014-12-17T12:30:00.002-08:00'
description: 'Linguagem C: Utilizando as funções: fopen() , fputs() e fclose()'
main-class: 'misc'
tags:
- Linguagem C
image: http://1.bp.blogspot.com/-cs0HhoCHXIQ/UZjJ4CQI1YI/AAAAAAAABmY/z_IyX8Fu0RU/s72-c/fopen.png
twitter_text: 'Linguagem C: Utilizando as funções: fopen() , fputs() e fclose()'
introduction: 'Linguagem C: Utilizando as funções: fopen() , fputs() e fclose()'
---
![Blog Linux](http://1.bp.blogspot.com/-cs0HhoCHXIQ/UZjJ4CQI1YI/AAAAAAAABmY/z_IyX8Fu0RU/s320/fopen.png "Blog Linux")
 O sistema de entrada e saída do ANSI C é composto por uma série de funções, cujos protótipos estão reunidos em stdio.h . Todas estas funções trabalham com o conceito de "ponteiro de arquivo". Este não é um tipo propriamente dito, mas uma definição usando o comando typedef. Esta definição também está no arquivo stdio.h. Podemos declarar um ponteiro de arquivo da seguinte maneira:
FILE *p;
p será então um ponteiro para um arquivo. É usando este tipo de ponteiro que vamos poder manipular arquivos no C.
fopen()
Esta é a função de abertura de arquivos. Seu protótipo é:
FILE *fopen (char *nome_do_arquivo,char *modo);
 O nome_do_arquivo determina qual arquivo deverá ser aberto. Este nome deve ser válido no sistema operacional que estiver sendo utilizado. O modo de abertura diz à função fopen() que tipo de uso você vai fazer do arquivo. A tabela abaixo mostra os valores de modo válidos:
Modo  Significado"r"   Abre um arquivo texto para leitura. O arquivo deve existir antes de ser aberto."w"  Abrir um arquivo texto para gravação. Se o arquivo não existir, ele será criado. Se já existir, o conteúdo anterior será destruído.         Abrir um arquivo texto para gravação. Os dados serão adicionados no fim do arquivo ("append"), se ele já existir, ou um novo arquivo será criado, no caso de arquivo não"a"  existente anteriormente."rb"  Abre um arquivo binário para leitura. Igual ao modo "r" anterior, só que o arquivo é binário."ab"  Acrescenta dados binários no fim do arquivo, como no modo "a" anterior, só que o arquivo é binário."r+"  Abre um arquivo texto para leitura e gravação. O arquivo deve existir e pode ser modificado."w+"  Cria um arquivo texto para leitura e gravação. Se o arquivo existir, o conteúdo anterior será destruído. Se não existir, será criado.         Abre um arquivo texto para gravação e leitura. Os dados serão adicionados no fim do arquivo se ele já existir, ou um novo arquivo será criado, no caso de arquivo não"a+"  existente anteriormente."r+b"  Abre um arquivo binário para leitura e escrita. O mesmo que "r+" acima, só que o arquivo é binário."w+b"  Cria um arquivo binário para leitura e escrita. O mesmo que "w+" acima, só que o arquivo é binário."a+b"  Acrescenta dados ou cria uma arquivo binário para leitura e escrita. O mesmo que "a+" acima, só que o arquivo é binário
fputs()
 Escreve uma string num arquivo.
 
fclose():
 Fecha o arquivo. 
Código de exemplo: 
[Faça o DOWNLOAD do arquivo aqui se quiser]
<iframe src="http://pastebin.com/raw/8TADP4wa" style="border:none;width:100%;"><iframe> 
Modo Resumido: 
{% highlight bash %}
#include 
{% endhighlight %}
{% highlight bash %}
// ################## -- MODO Resumido -- ###################
int main(){
  // Declaramos um ponteiro(link para o endereço da memória) para o arquivo de nome: 'pFile' 
  FILE * pFile;
  
  // Esta é a função de abertura de arquivos. Com modo 'w'(Abrir um arquivo texto para gravação. Se o arquivo não existir, ele será criado. 
  // Se já existir, o conteúdo anterior será destruído.) 
  pFile = fopen( "pasta/arquivo.txt" , "w" );
  
  //Se o arquivo for não-vazio 
  if(pFile!=NULL){
  
  // Escreve uma string(da variável 'texto') num arquivo. 
  fputs( "fopen example" ,pFile); 
  fclose(pFile);  
 } 
 return 0; 
} 
{% endhighlight %}
