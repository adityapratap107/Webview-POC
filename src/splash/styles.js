import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

const useStyle = () => {
  return StyleSheet.create({
    splashBackground: {
      width: width,
      alignItems: 'center',
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    gifStyle: {
      height: 1000,
      width: 400,
    },
  });
};

export default useStyle;
