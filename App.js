import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList } from 'react-native';

export default function App() {

  const [firstNumber, setFirstNumber] = useState ('');
  const [secondNumber, setSecondNumber] = useState ('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  /*const plus = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    const sum = num1 + num2;
    
    setResult(sum);
  };

  const minus = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    const difference = num1 - num2;
    
    setResult(difference);
  };*/

  const calculate = (operator) => {
    if (isNaN(parseFloat(firstNumber)) || isNaN(parseFloat(secondNumber))){
      Alert.alert("Type number first");
   }
    else {
      if (operator === '+') {
        const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
        setHistory([...history, `${firstNumber} + ${secondNumber} = ${sum}`]);
      }
      else if (operator === '-') {
        const sub = parseFloat(firstNumber) - parseFloat(secondNumber);
        setHistory([...history, `${firstNumber} - ${secondNumber} = ${sub}`]);
      }

    }
  }

  /*const addToHistory = (operator) => {
    const operation = `${firstNumber} ${operator} ${secondNumber} = ${result}`;
    setResults([...results, operation]);
    setResult('');
  }*/

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput style = {{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText = {text => setFirstNumber(text)}
      keyboardType = 'numeric'
      />
      <TextInput style = {{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText = {text => setSecondNumber(text)}
      keyboardType ='numeric'
      />
      <StatusBar style = 'auto' />
      <View style = {{flexDirection:'row'}}>
        <Button title = '+' onPress={() => calculate('+')}/>
        <Button title = '-' onPress={() => calculate('-')}/>
      </View>
      <View style = {{flex: 8}}>
      <Text style = {{fontSize: 18}}>History: </Text>
        <FlatList
        data = {history}
        renderItem = {({item}) =>
        <View>
          <Text style = {{fontSize: 18}}>{item}</Text>
        </View>
      }
        />
      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200
  },
});
