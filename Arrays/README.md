# Arrays

- [Arrays](#arrays)
- [1. Adicionar e Remover Itens](#1-adicionar-e-remover-itens)
  - [*Adicionando - Push e Unshift*](#adicionando---push-e-unshift)
  - [*Removendo - Pop e Shift*](#removendo---pop-e-shift)
  - [*Separando - Slice e Splice*](#separando---slice-e-splice)

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

O `.pop` e o `.shift` são o oposto do `.push` e `.unshift`. Ambos removem elementos da array ao invés de adicionar.


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

**`início`**: Index que mostra onde começar a extração de elementos da array original para colocar na nova array (`início` é incluído na nova array).\
**`fim`**: Index que mostra onde terminar a extração de elementos (`fim` *não* é incluído na nova array).

```js
const numeros = [0, 1, 2, 3];
numeros = numeros.slice(1, 3);
console.log(numeros);
// Saída: [ 1, 2 ]
```
**LEMBRE-SE:** *O slice retorna uma nova array, mas não muda a array original. Será necessário, por exemplo, fazer o comando\
 `array = array.slice()` para que a variável `array` mude.*

(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

### > Splice
Substitui parte de uma array por novos elementos.
### Parâmetros:

**`índice`**: Index que mostra onde a substituição irá acontecer.\
**`deleteCount`**: Número de elementos que serão deletados começando pelo `índice`. Use 0 para que nenhum item seja deletado.\
**`elemento1, elemento2, ...`**: Novos elementos que serão colocados na array. Eles serão posicionados ou após o `índice` ou no lugar dele.

```js
const numeros = [0, 1, 2, 3];
numeros.splice(1, 2, "Sumiu");
console.log(numeros);
// Saída: [ 0, 'Sumiu', 3 ]
```
- **DICA 1:** *O splice retorna os itens removidos da sua array (`itensRemovidos = array.splice()` faz com que `itensRemovidos` armazene os itens que foram removidos pelo splice)*
- **DICA 2:** *O splice pode ser usado para escolher onde adicionar um novo item na array (`array.splice(2, 0, "Olá")` adiciona a string `"Olá"` no índice 3, sem remover nenhum elemento.*

(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)