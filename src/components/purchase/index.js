import React, {useRef, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import NormalHeader from '../common/header';
import useStyle from './styles';

const Purchase = () => {
  const styles = useStyle();
  const webviewRef = useRef(null);
  const [linkPress, setLinkPress] = useState(false);
  const onLinkPress = () => {
    // Linking.openURL('https://www.yahoo.com');
    setLinkPress(true);
  };
  return (
    <View style={styles.container}>
      <NormalHeader name="Purchase" />
      {!linkPress ? (
        <Text>This is purchase screen</Text>
      ) : (
        <Text>This is webview now</Text>
      )}
      <View>
        <Pressable onPress={onLinkPress}>
          <Text style={styles.linkStyle}>
            Click Yahoo to open webview below!!
          </Text>
        </Pressable>
      </View>
      {linkPress && (
        <WebView
          source={{uri: 'https://www.yahoo.com'}}
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
                // navigation.navigate('Purchase');
              }
              return false;
            } else {
              return true;
            }
          }}
        />
      )}
    </View>
  );
};

export default Purchase;
