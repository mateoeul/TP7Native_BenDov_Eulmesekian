import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Image, View} from 'react-native';
import { useState, useEffect } from 'react';
import InputText from './components/InputText';
import Button from './components/Button';

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
    <SafeAreaView style={styles.container}>
      
      <View style={{marginBottom: 25}}>  
        <Text style={{color: 'white', fontSize: 15, marginTop: 8}}>Login App</Text>
      </View>

      <View style={styles.componentsContainer}>
        <StatusBar style='dark'/>

        <Image source={require("./assets/splash.png")} style={{width:'80%', height: '40%', marginBottom:20}}/>

        <InputText placeholder="Email"> </InputText>
        <InputText placeholder="Contraseña"> </InputText>

        <Button titulo="WICNUDEL"> </Button>

        <Text style={styles.texto}>¿Olvidaste la contraseña?</Text>
        <Text style={styles.texto}>Crear cuenta</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c527d6',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  texto: {
    marginBottom: 10,
    fontWeight: 'bold'
  }, 
  componentsContainer:{
    backgroundColor: 'white', 
    flex:3, 
    width:'100%', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height:'100%'
  },
  
});
