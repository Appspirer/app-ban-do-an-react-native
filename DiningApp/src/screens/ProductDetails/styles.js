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
        paddingTop: 40,
        marginTop: 20
    },
    info_container: {
        backgroundColor: Colors.white,
        padding: 32,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: -height * 0.35,
        paddingBottom: 100
    },
    name: {
        fontSize: 20,
        fontWeight: '900',
        color: Colors.gray_text5
    },
    description: {
        fontSize: 12,
        color: Colors.gray_text,
        marginTop: 5
    },
    new_price: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.yellow,
    },
    old_price: {
        fontSize: 12,
        color: Colors.gray_text,
        textDecorationLine: 'line-through',
        marginLeft: 20
    },
    price_container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    status_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    status_text: {
        fontSize: 12,
        color: Colors.gray_text
    },
    promotion_container: {
        backgroundColor: Colors.blue_white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 32,
        marginTop: -80,
        paddingBottom: 100
    },
    promotion: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    promotion_text: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.gray_text5
    },
    promotion_value: {
        fontSize: 12,
        color: Colors.gray_text,
        width: '50%'
    },
    minus: {
        backgroundColor: Colors.yellow2,
        padding: 5,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginHorizontal: 15,
    },
    minus_text: {
        color: Colors.white,
        fontSize: 10
    },
    cmt_container: {
        flex: 1,
        backgroundColor: Colors.white,
        marginTop: -80,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 32
    },
    cmt_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    cmt_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.gray_text5
    },
    view: {
        fontSize: 12,
        color: Colors.yellow
    },
    info: {
        flexDirection: 'row',
    },
    avatar: {
        height: 33,
        width: 33
    },
    time: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    vip: {
        backgroundColor: Colors.yellow3,
        borderTopLeftRadius: 4.8,
        borderBottomRightRadius: 4.8,
        height: 10.82,
        width: 22.34,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    vip_text: {
        fontSize: 8,
        fontWeight: 'bold',
        color: Colors.white
    },
    level_vip: {
        fontSize: 8,
        color: Colors.yellow,
        fontWeight: '600'
    },
    name_info: {
        fontSize: 14,
        color: Colors.gray_text5,
        fontWeight: '800',
        marginRight: 10
    },
    time_cmt: {
        fontSize: 12,
        color: Colors.gray_white
    },
    name_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        marginTop: 10,
        fontSize: 12,
        color: Colors.gray_text
    },
    item: {
        marginBottom: 20
    },
    list: {
        paddingTop: 10
    },
    button: {
        backgroundColor: Colors.yellow,
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 24.5
    },
    text: {
        fontSize: 20,
        fontWeight: '900',
        color: Colors.white
    }
})