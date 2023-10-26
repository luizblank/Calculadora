import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UtilsContext } from './context';
import { useState, useContext } from 'react';

export default function Historico(route) {
  const {utils, setUtils} = useContext(UtilsContext);

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View style = {styles.myContainer}>
            <Text style = {styles.title}>Histórico</Text>
            {utils.historicText.map(item => 
              <Text style={{fontSize: "20px"}}>{item}</Text>)}
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
    backgroundColor: "white", 
    padding: "20px", 
    borderRadius: "10px",
    alignItems: 'center',
  },
  title: {
    margin: "50px",
    fontSize: "50px",
    fontWeight: "500"
  },
});
