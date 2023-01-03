import React, {useEffect} from 'react';
import {Image, ImageBackground, StatusBar, View} from 'react-native';
import images from '../assets/images';
import useStyle from './styles';

const SplashAnimation = ({setFinished}) => {
  const styles = useStyle();

  useEffect(() => {
    setTimeout(() => {
      setFinished(true);
    }, 2800);
  });

  return (
    <>
      {/* <ImageBackground
        source={images.splash_background}
        style={styles.splashBackground}> */}
      <View style={{flex: 1}}>
        <Image source={images.logo_mir} style={styles.gifStyle} />
      </View>
      {/* </ImageBackground> */}
    </>
  );
};

export default SplashAnimation;
