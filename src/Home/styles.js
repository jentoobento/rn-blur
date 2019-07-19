import { StyleSheet, Dimensions } from 'react-native';

// button border selected       #28bcec
// button border not selected   transparent
// button light                 #f4f4f4
// button regular               #e6e6e6
// button prominent             #f8ff9d
// slider min                   #28bcec
// slider max                   #e5f4ff

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 10,
  },
  backgroundContainer: {
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: 'white',
  },
  blurryTextContainer: {
    height: 40,
    width: '100%', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    flexDirection: 'row', 
    paddingHorizontal: 10,
  },
  blurryText: {
    fontSize: 24,
  },
  blurForBlurryText: {
    position: "absolute",
    top: 0,
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
  },
  image: {
    height: 300,
    width: 500,
  },
  blurForImage: {
    position: "absolute",
    top: 50,
    left: 150,
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: 'black',
  },
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
  slider: {
    width: deviceWidth - 40, 
    height: 40,
  },
  codeTextContainer: {
    flex: 1, 
    justifyContent: 'flex-end',
    alignSelf: 'flex-start', 
    padding: 20,
  },
});

export default styles;