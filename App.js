import { useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const [firstNumber, setFirstNumber] = useState ('');
  const [secondNumber, setSecondNumber] = useState ('');
  const [result, setResult] = useState('');

  const plus = () => {
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
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => setFirstNumber(text)}
      keyboardType='numeric'
      />
      <TextInput style={{width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => setSecondNumber(text)}
      keyboardType='numeric'
      />
      <StatusBar style='auto' />
      <View style={{flexDirection:'row'}}>
        <Button title= '+' onPress={plus}/>
        <Button title= '-' onPress={minus}/>
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
  },
});
