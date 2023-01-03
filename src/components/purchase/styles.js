import {StyleSheet} from 'react-native';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      // alignItems: 'center',
    },
    linkStyle: {
      textDecorationLine: 'underline',
      fontSize: 18,
      fontWeight: '800',
      marginTop: 20,
    },
  });
};

export default useStyle;
