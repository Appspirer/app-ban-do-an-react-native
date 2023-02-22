import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1
    },
    bg: {
        height: height * 0.4,
    },
    header: {
        marginHorizontal: 32,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop:60
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.white
    },
    avatar: {
        alignSelf: 'center',
        marginTop: 30
    },
    name: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: '600',
        color: Colors.white
    },
    info: {
        marginHorizontal: 32,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },
    number: {
        color: Colors.white,
        textAlign: 'center'
    },
    title: {
        color: Colors.white,
        textAlign: 'center',
        marginTop: 5
    },
    menu: {
        flexDirection: 'row',
        marginHorizontal: 32,
        justifyContent: "space-between",
        alignItems: 'flex-end'
    },
    menu_text: {
        color: Colors.gray_text3,
        marginTop: 5
    },
    menu_item_container: {
        alignItems: 'center'
    },
    item: {
        marginHorizontal: 32,
        flexDirection: 'row',
        marginBottom: 31,
        marginTop: -25,
    },
    calendar: {
        height: 29,
        width: 27
    },
    list_container: {
        marginTop: 20,
        paddingTop: 45,
    },
    list_title_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 32,
        marginTop: 20
    },
    view: {
        color: Colors.yellow
    },
    list_title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    month: {
        fontSize: 9,
        color: Colors.white,
        marginTop: 1,
        alignSelf: 'center'
    },
    date: {
        alignSelf: 'center',
        fontSize: 9,
        color: Colors.yellow,
        marginTop: 1
    },
    bg_item: {
        height: 121,
        width: 120,
        marginLeft: 10,
    },
    img: {
        alignSelf: 'center',
        marginTop: -15
    },
    line_vertical: {
        width: 1,
        backgroundColor: Colors.border,
        height: 122,
        alignSelf: 'center'
    },
    item_info: {
        marginLeft: 20,
        marginTop: 16,
        marginBottom: 16 + 31,
        width: width - 27 - 130 - 64 - 20,
        justifyContent:"space-around"
    },
    rating_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:5
    },
    rating: {
        fontSize: 12,
        marginLeft: 5
    },
    avatar_info: {
        height: 24,
        width: 24
    },
    owner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    row_owner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    owner_name: {
        fontSize: 10,
        color: Colors.gray_text3
    },
    like: {
        fontSize: 12,
        color: Colors.gray_text3,
        marginLeft:3
    },
    info_name:{
        fontSize:12,
        color:Colors.gray_text2,
        fontWeight:'600'
    },
    ingredient:{
        fontSize:12,
        color:Colors.gray_text,
    }
})