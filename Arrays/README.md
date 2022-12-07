# Arrays

- [Arrays](#arrays)
- [1. Adicionar e Remover Itens](#1-adicionar-e-remover-itens)
  - [*Adicionando - Push e Unshift*](#adicionando---push-e-unshift)
  - [*Removendo - Pop e Shift*](#removendo---pop-e-shift)
  - [*Separando - Slice e Splice*](#separando---slice-e-splice)
    - [> Slice](#-slice)
    - [> Splice](#-splice)

# 1. Adicionar e Remover Itens

## *Adicionando - Push e Unshift*

O `.push` e o `.unshift` são bem parecidos. Ambos adicionam novos elementos em uma array. A diferença é *onde* o novo elemento é posicionado.


- **Push:** Adiciona um novo elemento no *final* da array.
```js
const frutas = ["Maçã", "Uva", "Morango"];
frutas.push("Banana");
console.log(frutas);
// Saída: [ 'Maçã', 'Uva', 'Morango', 'Banana' ]
```


- **Unshift:** Adiciona um novo elemento no *início* da array.
```js
const frutas = ["Maçã", "Uva", "Morango"];
frutas.unshift("Banana");
console.log(frutas);
// Saída: [ 'Banana', 'Maçã', 'Uva', 'Morango' ]
```

## *Removendo - Pop e Shift*

O `.pop` e o `.shift` são o oposto do `.push` e `.unshift` respectivamente. Ambos removem elementos da array ao invés de adicionar.


- **Pop:** Remove o elemento no *final* da array.
```js
const frutas = ["Maçã", "Uva", "Morango"];
frutas.pop();
console.log(frutas);
// Saída: [ 'Maçã', 'Uva' ]
```


- **Shift:** Remove o elemento no *início* da array.
```js
const frutas = ["Maçã", "Uva", "Morango"];
frutas.shift();
console.log(frutas);
// Saída: [ 'Uva', 'Morango' ]
```

## *Separando - Slice e Splice*

Esses são mais complicados. O `.slice` e o `.splice` "cortam" a array e deixam apenas uma parte dela.


### > Slice
Retorna uma nova array com os elementos entre dois índices da array original. A array original não é modificada.
### Parâmetros:

#### `início`: 
  - É um índice (index) da array original.
  - O elemento do índice `início` é incluído na nova array.
  - Ao usar um número negativo, o slice acontecerá do final até o incío da array, por exemplo, `.slice(-2)` deixa apenas os dois últimos itens da array.

#### `fim`:
  - É um índice (index) da array original.
  - O elemento do índice `fim` *não* é incluído na nova array.
  - Todo elemento antes do índice `fim` até o índice `início` estará incluído na nova array.

```js
const numeros = [0, 1, 2, 3];
numeros = numeros.slice(1, 3);
console.log(numeros);
// Saída: [ 1, 2 ]
```
**LEMBRE-SE:** *O slice retorna uma nova array, mas não muda a array original, por exemplo, será necessário fazer o comando "array = array.slice()" para que a variável "array" mude.*


### > Splice
Substitui ou apenas remove os elementos entre dois índices de uma array, mantendo o resto dos itens.
### Parâmetros:

#### `índice`: 
  - É um índice (index) da array original.
  - É o índice que indica em qual elemento o splice deve começar.
  - Ao usar um número negativo, o splice irá começar do índice que é igual ao tamanho da array menos o `índice`. Por exemplo, ao fazer `.splice(-2)` o splice começará no penúltimo elemento.

#### `deleteCount`:
  - É o número de itens que devem ser deletados começando pelo `índice` e indo até a direção do fim da array.
  - Caso for 0, nenhum item é deletado e os novos elementos são adicionados na frente do `índice`.

#### `elemento, ...`:
  - São os novos elementos que serão adicionados na array no lugar da parte removida ou apenas na frente do `índice`.

```js
const numeros = [0, 1, 2, 3];
numeros.splice(1, 2, "Sumiu");
console.log(numeros);
// Saída: [ 0, 'Sumiu', 3 ]
```
**DICA 1:** *O splice retorna os itens removidos da sua array ("itensRemovidos = array.splice()")*
**DICA 2:** *O splice pode ser usado para escolher onde adicionar um novo item na array ("array.splice(2, 0, "Olá")" adiciona a string "Olá" no índice 2, sem remover nenhum elemento.)*