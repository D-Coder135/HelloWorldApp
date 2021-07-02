import React from 'react';
import {Text} from 'react-native';

const message = 'Hello World'

// Class Component Example
class App extends React.Component {
  render () {
     return <Text>{message}</Text> // JSX => JavaScript + HTML(CSS)
  }
}

export default App