import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    rating_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:5
    },
    rating: {
        fontSize: 12,
        marginLeft: 5
    },
})