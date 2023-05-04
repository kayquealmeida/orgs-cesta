import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';


export default function App() {

  let [fontCarregada] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold
  })

  if(!fontCarregada) {
    return <AppLoading/>
  }

  return (
    <SafeAreaView style={{ flex:1 }}>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}
