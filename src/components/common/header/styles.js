import {StyleSheet} from 'react-native';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: 56,
      backgroundColor: '#2f5f6e',
    },
    subContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    headerText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '700',
    },
    textView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginEnd: 45,
    },
    backIconStyle: {
      height: 15,
      width: 15,
      left: 15,
    },
    backButton: {
      width: 60,
      marginTop: 16,
      paddingTop: 8,
      paddingHorizontal: 4,
    },
  });
};

export default useStyle;
