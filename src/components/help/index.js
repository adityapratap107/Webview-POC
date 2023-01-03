import React, {useRef} from 'react';
import {Linking, Platform, SafeAreaView, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import NormalHeader from '../common/header';
import useStyle from './styles';

const Help = ({navigation}) => {
  const styles = useStyle();
  const webviewRef = useRef(null);
  const uri =
    Platform.OS === 'android'
      ? 'file:///android_asset/purchase.html'
      : require('../../libs/purchase.html');
  return (
    <SafeAreaView style={styles.container}>
      <NormalHeader name="Help" />
      {Platform.OS === 'android' ? (
        <WebView
          // source={{uri}}
          source={{uri: 'https://tpp-tppmobil-ios.agilecollab.com/purchase2.html'}}
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
            console.log('ev#', event);
            if (event.title) {
              // webviewRef.current.stopLoading();
              if (event.url) {
                console.log('url exists');
                navigation.navigate('Purchase');
              }
              return false;
            } else {
              return true;
            }
          }}
        />
      ) : (
        <WebView
          // source={require('../../libs/purchase.html')}
          source={{
            uri: 'https://tpp-tppmobil-ios.agilecollab.com/purchase2.html',
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
            console.log('ev#', event);
            if (event.title) {
              // webviewRef.current.stopLoading();
              if (event.url) {
                console.log('url exists');
                navigation.navigate('Purchase');
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

export default Help;
