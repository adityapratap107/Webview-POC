import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, SafeAreaView, StatusBar, Text, View} from 'react-native';
import images from '../../../assets/images';
import useStyle from './styles';

const NormalHeader = props => {
  const styles = useStyle();
  const navigation = useNavigation();

  const goBack = () => {
    console.log('press')
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Pressable onPress={goBack} style={styles.backButton}>
            <Image source={images.back} style={styles.backIconStyle} />
        </Pressable>
        <View style={styles.textView}>
          <Text style={styles.headerText}>{props.name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NormalHeader;
