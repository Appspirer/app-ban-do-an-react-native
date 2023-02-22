import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        height: height * 0.55,
        width: width,
        paddingTop: 60
    },
    content_container: {
        backgroundColor: Colors.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flex:1,
        marginTop: -height * 0.25,
        paddingVertical:32,
    },
    name:{
        fontSize:24,
        fontWeight:'bold',
        color:Colors.gray_text5
    },
    title:{
        fontSize:16,
        fontWeight:'600',
        color:Colors.gray_text5,
        marginTop:20
    },
    content:{
        fontSize:12,
        color: Colors.gray_text,
        marginTop:5
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 20
    },
    view:{
        fontSize:12,
        color: Colors.yellow
    },
    item:{
        width:90,
        height:71,
        borderRadius:5,
    },
    img:{
        width:90,
        height:71,
        borderRadius:5
    },
    list:{
        marginTop:20,
        paddingLeft:32
    },
    price_container:{
        position:"absolute",
        alignItems:'center',
        width:'100%',
        bottom:0,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius:5,
    },
    price:{
        color: Colors.white,
        fontSize:10,
        paddingVertical:3,
        fontWeight:'500'
    },
    name_item:{
        alignSelf:'center',
        marginTop:7,
        fontSize:10,
        fontWeight:'600',
        color: Colors.gray_text2
    },
    button:{
        marginTop:25,
        backgroundColor:Colors.yellow,
        marginHorizontal:32,
        alignItems:'center',
        paddingVertical:12,
        borderRadius:24.5
    },
    button_text:{
        color: Colors.white,
        fontSize:20,
        fontWeight:'bold'
    }
})