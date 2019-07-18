import { StyleSheet } from 'react-native';

// button border selected       #28bcec
// button border not selected   transparent
// button light                 #f4f4f4
// button regular               #e6e6e6
// button prominent             #f8ff9d
// slider min                   #28bcec
// slider max                   #e5f4ff


const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center', 
    borderWidth: 1, 
    width: 50, 
    height: 40, 
    borderRadius: 3,
  },
});

export default styles;