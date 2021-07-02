import React from 'react';
import {View, Text} from 'react-native';

const message = 'Hello World'

// Class Component Example
// class App extends React.Component {
//   render () {
//      return <Text>{message}</Text> // JSX => JavaScript + HTML(CSS)
//   }
// }

function App() {
  return (
    <View>
    <Text style = {{fontSize: 30, marginTop: 30, textAlign: 'center', color: 'red'}}>{message}</Text>
    </View>
  );
}

export default App // Making our code public similiar to main method of JAVA.