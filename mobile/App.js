import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';

import Routes from './src/routes';
/* 
  Elementos HTML
<div> <span> <p> <h1>
O React Native não tem as mesmas tags do HTML
"View" podemos usar no lugar de qualquer container ou section
"Text" podemos usar para qualquer texto
*/
/*
  Estilização

  Não temos o class name
  se quisermos colocar estilização precisa ser passado a tag style e vai receber um objeto com a estilização
  Ex. 
  // View recebendo o estilo styles.container

  <View style={styles.container}>
      <Text>Hello OminiStack</Text>
    </View>

  // styles recebendo StyleSheet.create e StyleSheet.create dando a função de criação de estilo (css)

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  StyleSheet.create pra criar a estrutura css.

  Todo componente já vem com display flex por padrão.

  A propriedade não tem ifen - é tudo caixa alta ex. backgroundColor em vez de background-color
  valores que não são numeros precisam ter aspas por volta, e como é objeto termina com virgula.
  Não existe herança de estilos.
*/

export default function App() {
  return (
    <Routes />
  );
}
