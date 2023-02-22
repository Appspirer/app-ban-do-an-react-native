import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'

var { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 32,
        backgroundColor: Colors.white,
        paddingBottom: 20,
        paddingTop: 70,
        alignItems: 'center'
    },
    cart: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.yellow
    },
    edit: {
        fontSize: 16,
        color: Colors.gray_text,
        fontWeight: '600'
    },
    event: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.blue_white,
        paddingVertical: 10,
        paddingHorizontal: 32
    },
    left_event: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.5,
    },
    left_event_text_container: {
        backgroundColor: Colors.yellow2,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 6,
    },
    left_event_text: {
        color: Colors.white,
        fontSize: 10
    },
    countdown_text: {
        fontSize: 12,
        color: Colors.gray_text,
        width: '70%',
        marginLeft: 10
    },
    right_event: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    view_event: {
        color: Colors.gray_text2,
        fontSize: 12,
        marginRight: 10
    },
    bg: {
        height: 107,
        width: 120
    },
    list_container: {
        marginHorizontal: 32,
        marginTop: 20,
        paddingTop: 24
    },
    item: {
        marginBottom: 36,
        flexDirection: 'row',
        alignItems: "center",
    },
    img: {
        marginTop: -24,
        alignSelf: 'center'
    },
    info_container: {
        backgroundColor: Colors.white,
        width: width - 64 - 120,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        paddingHorizontal: 16
    },
    quality_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quality: {
        fontSize: 12,
        marginHorizontal: 10
    },
    button_container: {
        height: 15.65,
        width: 15.65,
        borderRadius: 8,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOpacity: 0.3,
        justifyContent: 'center',
        alignItems: "center",
        shadowOffset: {
            height: 1
        }
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5
    },
    price: {
        fontSize: 12,
        color: Colors.yellow
    },
    total_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 32,
        paddingTop: 16
    },
    text: {
        fontSize: 20,
        color: Colors.gray_text2
    },
    total_price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.yellow
    },
    checkout_text:{
        fontSize:20,
        fontWeight:'bold',
        color: Colors.white
    },
    checkout:{
        marginHorizontal:32,
        backgroundColor:Colors.yellow,
        alignItems:'center',
        paddingVertical:16,
        marginTop:16,
        marginBottom:32,
        borderRadius:24.5
    }
})