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
    // This View tag contains the examples of Inline, Internal and combination of both styling.
    <View style = {internalStyle.viewStyle}>
    <Text style = {{fontSize: 30, marginTop: 30, textAlign: 'center', color: 'red'}}>{message}</Text> 
    <Text style = {internalStyle.textStyle}>{message}</Text>
    <Text style = {[internalStyle.textStyle, {backgroundColor: 'pink', color: 'yellow'}]}>{message}</Text>
    </View>
  );
}

const internalStyle = StyleSheet.create({
  textStyle: {
    marginTop: 40,
    textAlign: 'center',
    color: 'blue',
    fontSize: 30,
    backgroundColor: 'teal',
    padding: 30,
  },

  viewStyle: {
    backgroundColor: 'yellow',
    marginBottom: 50,
    marginTop: 50,
    padding: 40,

  }
});

export default App // Making our code public similiar to main method of JAVA.