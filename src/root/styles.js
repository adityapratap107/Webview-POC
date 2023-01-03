import {StyleSheet} from 'react-native';

const useStyle = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    bottomSafeArea: {
      flex: 1,
    },
    headerView: {
      backgroundColor: '#2f5f6e',
      alignItems: 'center',
      height: 60,
      justifyContent: 'center',
    },
    headerText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '700',
    },
    bottomTabSafeArea: {flex: 1, backgroundColor: '#000'},
  });
};

export default useStyle;
