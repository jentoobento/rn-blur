import { StyleSheet, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('screen').height;
const deviceWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    image: {
        position: 'absolute',
        zIndex: -1,
        height: 500,
        right: 0,
        width: deviceWidth / 2.5,
        height: deviceHeight,
    },
    rowContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 20,
    },
    columnContainer: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        width: deviceWidth / 2,
    },
    viewWithBorder: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        borderStyle: 'solid',
        borderWidth: 6,
        borderColor: 'red',
    },
    viewWithBorderBlur: {
        height: 88,
        width: 88,
        borderRadius: 88 / 2,
    },
    blurWithBorder: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2,
        borderStyle: 'solid',
        borderWidth: 6,
        borderColor: 'red',
    },
});

export default styles;