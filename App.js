import React, {useEffect} from 'react';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from './routes/homeStack';

SplashScreen.preventAutoHideAsync();

export default function App() {
  // load fonts
  const [loaded, error] = useFonts({
    Nunito_400Regular, 
    Nunito_700Bold
  });
  // handle side effects
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Navigator/>
  )
}


