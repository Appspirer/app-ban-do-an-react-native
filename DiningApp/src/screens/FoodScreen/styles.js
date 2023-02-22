import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../themes/Colors'
const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop:60
    },
    top_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 32,
        marginTop: 10
    },
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
    name: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    address: {
        fontSize: 16,
        marginTop: 5
    },
    search_container: {
        marginHorizontal: 32,
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 20,
        marginTop: 30
    },
    text_input: {
        marginLeft: 10
    },
    carousel_item: {
        width: width - 64,
    },
    carousel_container: {
        alignItems: 'center',
        marginTop: 30,
        marginHorizontal: 32,
    },
    banner: {
        width: width - 64,
        borderRadius: 24
    },
    banner_content_container: {
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        position: 'absolute',
        alignSelf: 'center',
        width: width - 128,
        bottom: -30
    },
    banner_title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    banner_content: {
        fontSize: 12
    },
    dot_container: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: -10
    },
    dot_carousel: {
        height: 7,
        width: 7,
        borderRadius: 4,
        marginHorizontal: 3
    },
    title_list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 32,
        marginTop: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    text_view: {
        fontSize: 12,
        color: Colors.yellow,
        fontWeight: '500'
    },
    tabbar_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 32,
        marginTop: 15
    },
    tabbar: {
        fontSize: 12,
        fontWeight: '600'
    },
    item: {
        paddingLeft: 16,
        paddingTop: 10,
    },
    bg: {
        width: 120,
        height: 150,
    },
    list_container: {
        paddingHorizontal: 16,
        marginTop: 10,
        marginBottom: 50,
    },
    img: {
        height: 82,
        width: 85,
        alignSelf: 'center'
    },
    item_row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        alignItems: 'center',
        marginTop: 7
    },
    row_left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    item_title: {
        alignSelf: 'center',
        fontSize: 12,
        color: Colors.white,
        marginTop: 7
    },
    rating_text: {
        fontSize: 12,
        color: Colors.white
    }
})