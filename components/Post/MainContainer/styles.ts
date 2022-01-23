import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 4,
        paddingLeft: 15
    },
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    postNames: {
        flexDirection: 'row',
    },
    name: {
        marginRight: 5,
        fontWeight: 'bold',
    },
    username: {
        marginRight: 3,
        color: 'grey'
    },
    createdAt: {
        marginRight: 5,
        color: 'grey'
    },
    dot: {
        color: 'grey',
        paddingTop: 4,
    },
    content: {
        lineHeight: 18
    },
    image: {
        height: 160,
        width: '100%',
        borderRadius: 15,
        resizeMode: 'cover',
        overflow: 'hidden',
        marginVertical: 6
    }

})

export default styles;