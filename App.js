import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Root from './src/root';
import SplashAnimation from './src/splash';

const App = () => {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return finished ? <Root /> : <SplashAnimation setFinished={setFinished} />;
};

export default App;
