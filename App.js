import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>nice car holmes</Text>
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
