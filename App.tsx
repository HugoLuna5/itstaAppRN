import AppNavigation from './src/navigation/appNavigation';
import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);


  const loadCustomFont = async () => {
    

    setFontLoaded(true);
  };

  useEffect(() => {
    loadCustomFont();
  }, []);

  if (!isFontLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <AppNavigation />
    </>
  );
}
