import { StatusBar } from 'expo-status-bar';
import * as Network from 'expo-network';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  let actualIPAddr;
  let devIPAddr = Network.getIpAddressAsync();
  if (devIPAddr == "0.0.0.0") {
    actualIPAddr = "i couldn't get ur ip address"
  }
  return (
    <View style={styles.container}>
      <Text>you're IP address is:</Text>
      <Text>$devIPAddr</Text>
      <Button onPress={() => Alert.alert("hello", "you probably pressed me")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'light_gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
