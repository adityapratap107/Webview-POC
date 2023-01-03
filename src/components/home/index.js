import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {BackHandler, Linking, Platform, SafeAreaView} from 'react-native';
import HomeIcon from '../../assets/images/common/home.svg';
import useStyle from './styles';
import WebView from 'react-native-webview';
import NormalHeader from '../common/header';

const Home = ({navigation}) => {
  const styles = useStyle();
  const webviewRef = useRef(null);
  const [exitApp, setExitApp] = useState(0);

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => {
  //       return (
  //         <Pressable
  //           onPress={() => {
  //             webviewRef.current.goBack();
  //           }}>
  //           <Text>Back</Text>
  //         </Pressable>
  //       );
  //     },
  //   });
  // });
  // const uri =
  //   Platform.OS === 'android'
  //     ? 'file:///android_asset/faq.html'
  //     : require('../../libs/faq.html');

  const uri =
    Platform.OS === 'android'
      ? 'file:///android_asset/disclaimer.html'
      : require('../../libs/disclaimer.html');

  const ExecuteOnlyOnAndroid = () => {
    const backAction = () => {
      // setTimeout(() => {
      //   setExitApp(0);
      // }, 2000); // 2 seconds to tap second-time

      if (exitApp === 0) {
        setExitApp(exitApp + 1);
        webviewRef.current.goBack();
      } else if (exitApp === 1) {
        BackHandler.exitApp();
      }

      return true;
    };
    useEffect(() => {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    });
    return <></>;
  };

  const onNavigationStateChange = event => {
    console.log('event ios', event);
  };

  return (
    <SafeAreaView style={styles.container}>
      <NormalHeader name="Home" />
      {Platform.OS === 'android' ? <ExecuteOnlyOnAndroid /> : <></>}
      {Platform.OS === 'android' ? (
        <WebView
          // source={{uri}}
          source={{
            uri: 'https://tpp-tppmobil-ios.agilecollab.com/purchase.html',
          }}
          ref={webviewRef}
          originWhitelist={['https://*', 'http://*', 'file://*', 'sms://*']}
          allowFileAccess={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          geolocationEnabled={true}
          startInLoadingState={true}
          saveFormDataDisabled={true}
          allowFileAccessFromFileURLS={true}
          allowUniversalAccessFromFileURLs={true}
          onShouldStartLoadWithRequest={event => {
            console.log('home event#', event);
            if (event.title) {
              // webviewRef.current.stopLoading();
              if (event.url) {
                console.log('url exists');
                navigation.navigate('Help');
              }
              return false;
            } else {
              return true;
            }
          }}
        />
      ) : (
        <WebView
          // source={require('../../libs/faq.html')}
          // source={uri}
          // source={{
          //   uri: 'https://reactnative.dev/',
          // }}
          source={{
            uri: 'https://tpp-tppmobil-ios.agilecollab.com/purchase.html',
          }}
          ref={webviewRef}
          originWhitelist={['https://*', 'http://*', 'file://*', 'sms://*']}
          allowFileAccess={true}
          domStorageEnabled={true}
          javaScriptEnabled={true}
          geolocationEnabled={true}
          startInLoadingState={true}
          saveFormDataDisabled={true}
          allowFileAccessFromFileURLS={true}
          allowUniversalAccessFromFileURLs={true}
          // onNavigationStateChange={event => {
          //   console.log('iOS - ', event);
          //   if (
          //     event.url === 'https://reactnative.dev/docs/environment-setup'
          //   ) {
          //     webviewRef.current.stopLoading();
          //     // Linking.openURL(event.url);
          //     navigation.navigate('Purchase');
          //     return true;
          //   } else if (event.url === 'https://reactnative.dev/') {
          //     // webviewRef.current.stopLoading();
          //     return true;
          //   } else {
          //     webviewRef.current.stopLoading();
          //     return true;
          //   }
          // }}
          // onNavigationStateChange={event => onNavigationStateChange(event)}
          onShouldStartLoadWithRequest={event => {
            console.log('home event#', event);
            if (event.title) {
              // webviewRef.current.stopLoading();
              if (event.url) {
                console.log('url exists');
                navigation.navigate('Help');
              }
              return false;
            } else {
              return true;
            }
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
