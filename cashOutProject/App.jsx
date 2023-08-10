import React , { useState }from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import InputCash from './src/components/InputCash';
import hundredDollarBill from './src/assets/imgs/hundred.jpeg'
import fiftyDollarBill from './src/assets/imgs/fifty.png'
import rollerCoin from './src/assets/imgs/rollercoin.png'
import fiveDollarBill from './src/assets/imgs/five.png'
import loonie from './src/assets/imgs/loonie.png'
import tenDollarBill from './src/assets/imgs/ten.png'
import tenCents from './src/assets/imgs/tenCents.png'
import toonie from './src/assets/imgs/tonnie.png'
import twentyDollarBill from './src/assets/imgs/twenty.png'
import quarterCents from './src/assets/imgs/quarterCoin.png'
import fiveCents from './src/assets/imgs/fiveCent.png'

function App() {



  const [total, setTotal] = useState({    
    rollerCoin:0,
    hundred: 0,
    fifty: 0,
    twenty: 0,
    ten: 0,
    five: 0,
    toonie: 0,
    loonie: 0,
    quarter: 0,
    tenCents: 0,
    fiveCents: 0
  });

  
  console.log("total", total);

  const cashOut = Object.values(total).reduce((acc, crr)=>acc+crr)
  

  
  



  return (
    <SafeAreaView>
      <ScrollView>
      <InputCash type={1} money={"rollerCoin"} img={rollerCoin} updateTotal={setTotal}/>
      <InputCash type={100} money={"hundred"} img={hundredDollarBill} updateTotal={setTotal}/>
      <InputCash type={50} money={"fifty"} img={fiftyDollarBill} updateTotal={setTotal}/>
      <InputCash type={20} money={"twenty"} img={twentyDollarBill} updateTotal={setTotal}/>
      <InputCash type={10} money={"ten"} img={tenDollarBill} updateTotal={setTotal}/>
      <InputCash type={5} money={"five"} img={fiveDollarBill} updateTotal={setTotal}/>
      <InputCash type={1} money={"toonie"} img={loonie} updateTotal={setTotal}/>
      <InputCash type={2} money={"loonie"} img={toonie} updateTotal={setTotal}/>
      <InputCash type={0.25} money={"quarter"} img={quarterCents} updateTotal={setTotal}/>
      <InputCash type={0.10} money={"tenCents"} img={tenCents} updateTotal={setTotal}/>
      <InputCash type={0.05} money={"fivecents"} img={fiveCents} updateTotal={setTotal}/>
      <Text>TotalCash:{cashOut}</Text>  
      <Text>Cash Due:</Text>
      <Text>Float</Text>  
      <Text>Grand total</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  },
  inputText: {
    color: "white"
  }

})

export default App;
