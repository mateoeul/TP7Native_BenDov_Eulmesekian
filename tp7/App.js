import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';

import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const esperarAlgunosMilisegundos = async () => {
      await SplashScreen.preventAutoHideAsync();
      try {

        await new Promise(resolve => setTimeout(resolve, 4000));
      } catch (e) {
          console.warn(e);
      } finally {

          setIsLoading(false);
          await SplashScreen.hideAsync();
      }
    };

    esperarAlgunosMilisegundos();
  }, []);

  if (isLoading) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>hpña angie</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
