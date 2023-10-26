import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useContext } from 'react';
import { UtilsContext } from './context';

export default function Usuarios(props) {
  const {utils, setUtils} = useContext(UtilsContext);

  const [text, setText] = useState("");
  const [historicText, setHistoricText] = useState("");

  function setTextToHistoric(text){
    var equation = text;
    var result = eval(text);
    setText(eval(text));
    setHistoricText(equation + " = " + result);
    
    if(utils.historicText)
      setUtils({...utils, historicText: [...utils.historicText, equation + " = " + result]});
    
    else
      setUtils({...utils, historicText: [equation + " = " + result]});
  }

  function goToHistoric(){
    props.navigation.navigate("Historico");
  }

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style = {styles.myContainer}>
            <Text>{text}</Text>
        </View>
        
        <View style = {styles.myContainer2}>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + " + ")}><Text>+</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + " - ")}><Text>-</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + " / ")}><Text>/</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + " * ")}><Text>x</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setTextToHistoric(text)}><Text>=</Text></TouchableOpacity>
        </View>

        <View style = {styles.myContainer2}>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + "1")}><Text>1</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + "2")}><Text>2</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + "3")}><Text>3</Text></TouchableOpacity>
        </View>

        <View style = {styles.myContainer2}>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + "4")}><Text>4</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + "5")}><Text>5</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + "6")}><Text>6</Text></TouchableOpacity>
        </View>

        <View style = {styles.myContainer2}>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + "7")}><Text>7</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + "8")}><Text>8</Text></TouchableOpacity>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + "9")}><Text>9</Text></TouchableOpacity>
        </View>

        <View style = {styles.myContainer2}>
            <TouchableOpacity style = {styles.touchable} onPress = {() => setText(text + "0")}><Text>0</Text></TouchableOpacity>
        </View>

        <View style = {styles.myContainer2}>
            <TouchableOpacity style = {styles.touchable2} onPress = {() => setText("")}>
                <Text>Limpar</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.touchable2} onPress = {() => goToHistoric()}>
                <Text>Histórico</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myContainer: {
    width: "400px",
    height: "50px",
    marginBottom: "8px",
    border: "solid 1px black",
    borderRadius: "15px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
    justifyContent: "center"
  },
  myContainer2: {
    display: "flex",
    flexDirection: "row"
  },
  title: {
    marginBottom: "50px",
    fontSize: "50px",
    fontWeight: "500"
  },
  touchable: {
    backgroundColor: 'white',
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    fontWeight: "700"
  },
  touchable2: {
    width: "80px",
    backgroundColor: 'white',
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    fontWeight: "700",
    alignItems: 'center',
  },
});
