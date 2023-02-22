import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.25,
        backgroundColor: Colors.white,
        paddingBottom: 20,
        paddingTop: 70,
        alignItems: 'center'
    },
    commodity: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.yellow
    },
    share: {
        fontSize: 16,
        color: Colors.gray_text
    },
    bg: {
        width: (width - 80) / 2,
        height: ((width - 80) / 2) * 1.35,
    },
    item: {
        marginBottom:16
    },
    list_container: {
        marginHorizontal: 32,
        marginTop:16
    },
    parcels:{
        fontSize:10,
        fontWeight:'bold',
        color:Colors.white,
        marginTop:5,
        marginLeft:7
    },
    img:{
        marginTop:20,
        alignSelf:'center'
    },
    name:{
        marginLeft:16,
        marginTop:10,
        color:Colors.white,
        fontSize:12,
        fontWeight:'600'
    },
    row_info:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:16,
        marginTop:7
    },
    price:{
        fontSize:10,
        color:Colors.white
    }
})