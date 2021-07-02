import React from 'react';
import {Text} from 'react-native';

const message = 'Hello World'

class App extends React.Component {
  render () {
     return <Text>{message}</Text>
  }
}

export default App