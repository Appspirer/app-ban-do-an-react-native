import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        height: height * 0.4,
        width: width,
        paddingTop:60
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 32,
        marginTop: 10,
    },
    mall: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white
    },
    search_container: {
        marginLeft: 32,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 20,
        width: width - 135
    },
    menu: {
        marginHorizontal: 32,
        backgroundColor: Colors.white,
        paddingTop: 16,
        paddingBottom:32,
        marginTop: 30,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 40,
    },
    item: {
        width: (width - 64) / 4,
        alignItems:'center',
        marginTop:16
    },
    menu_container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    text: {
        fontSize: 10,
        textAlign:'center',
        marginTop:5
    },
    row_title:{
        marginHorizontal:32,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:30,
    },
    title:{
        fontSize:16,
        fontWeight:'bold'
    },
    view:{
        fontSize:12,
        color:Colors.yellow,
        fontWeight:'500'
    },
    bg_mn:{
        height:160,
        width:120
    },
    list_row:{
        marginTop:20,
        paddingLeft:16
    },
    parcels:{
        fontSize:9,
        color:Colors.white,
        marginTop:3,
        marginLeft:5
    },
    row_item:{
        alignItems:'center',
        paddingLeft:16
    },
    img:{
        alignSelf:'center',
        marginTop: 8
    },
    row_item_title:{
        marginTop:10,
        marginLeft:16,
        fontSize:12,
        color: Colors.white,
    },
    price_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:16,
        marginTop:5
    },
    price:{
        fontSize:10,
        color: Colors.white
    },
    text_input: {
        marginLeft: 10
    },
    weekly_row_item:{
        alignItems:'center',
        marginLeft:16,
        backgroundColor:Colors.white,
        borderTopLeftRadius:10,
        borderTopRightRadius:20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:10,
        width:100,
        height:200
    },
    weekly_title:{
        fontSize:16,
        marginTop:15
    },
    weekly_price:{
        fontSize:10,
        color: Colors.yellow
    },
    weekly_img:{
        position:'absolute',
        width:100,
        borderRadius:20,
        bottom:0
    }
})