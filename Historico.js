import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Historico(route) {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
            <Text style = {styles.title}>Histórico</Text>
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
    width: "210px",
    marginBottom: "8px"
  },
  title: {
    margin: "50px",
    fontSize: "50px",
    fontWeight: "500"
  },
});
