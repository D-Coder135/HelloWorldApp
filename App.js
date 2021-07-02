import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

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
    <Text>{message}</Text>
    </View> // This is known as inline styling of JSX.
  );
}

const internalStyle = StyleSheet.create({
  textStyle: {
    marginTop: 40,
    textAlign: 'center',
    color: 'blue',
    fontSize: 30,
    backgroundColor: 'green',
    padding: 30,
  }
});

export default App // Making our code public similiar to main method of JAVA.