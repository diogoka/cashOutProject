import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

function InputCash(props) {

    const valueOf = props.type;
    const typeOfMoney = props.money    
    const imgSource = props.img
    const updateTotal = props.updateTotal

    const [innerState, setInnerState] = useState(0)
    
    const calculate = (event) =>{
        const result = valueOf * event

        setInnerState(result)


        updateTotal(prev =>({
            ...prev,
            [typeOfMoney] : result 
        }))
        


    }
    
    
    const DEFAULT_IMAGE = Image.resolveAssetSource(imgSource).uri;
    return (
        <View style={styles.inputContainer}>
            {/* <Text>Money: {typeOfMoney}</Text> */}
            <Image 
            style={styles.img}
            source={{uri: DEFAULT_IMAGE}}
            />  
            <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={calculate}
            maxLength={99}
            placeholder="Number"
            />
            <Text>CA$: {innerState}</Text>      
        </View>
    );
}


const styles = StyleSheet.create({
    inputContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
        
        
    },
    input:{
        height: "80%",
        width: "30%",
        borderWidth: 1
        
        
    },
    img:{
        width: "35%",
        height: "100%",
    }
})

export default InputCash;