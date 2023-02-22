import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'
const width = Dimensions.get('window').width;

export default StyleSheet.create({
    avatar_container: {
        height: 46,
        width: 43,
        backgroundColor: Colors.white,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6,
    },
    avatar: {
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6,
        height: 43,
        width: 40,
    },
    dot: {
        backgroundColor: Colors.red,
        height: 6.72,
        width: 6.72,
        borderRadius: 4,
        position: 'absolute',
        top: 3,
        right: 2
    },
})