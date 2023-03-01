import {StyleSheet} from "react-native";

export default () => StyleSheet.create({
    container:{
        width: '100%',
        height:40,
        backgroundColor:'#EEE',
        borderRadius: 20,
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        color:'#333',
        marginLeft:20

    },
    input:{
        marginLeft: 20,
        width:'70%'
    }
})