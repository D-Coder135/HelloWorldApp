import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const message = 'Hello World'

// Class Component Example =>

// class App extends React.Component {
//   render () {
//      return <Text>{message}</Text> // JSX => JavaScript + HTML(CSS)
//   }
// }

// Function Component Example =>

function App() {
  return (
    // This View tag contains the examples of Inline, Internal and combination of both styling.
    <View style = {internalStyle.viewStyle}>
    <Text style = {{fontSize: 30, marginTop: 30, textAlign: 'center', color: 'red'}}>{message}</Text> 
    <Text style = {internalStyle.textStyle}>{message}</Text>
    <Text style = {[internalStyle.textStyle, {backgroundColor: 'pink', color: 'blue'}]}>{message}</Text>
    </View>
  );
}

const internalStyle = StyleSheet.create({
  textStyle: {
    marginTop: 40,
    textAlign: 'center',
    color: 'yellow',
    fontSize: 30,
    backgroundColor: 'teal',
    padding: 30,
  },

  viewStyle: {
    backgroundColor: 'orange',
    marginBottom: 50,
    marginTop: 50,
    padding: 40,

  }
});

export default App // Making our code public similiar to main method of JAVA.