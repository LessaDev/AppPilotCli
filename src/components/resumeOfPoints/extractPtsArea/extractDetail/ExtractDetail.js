import React from "react";
import {Image, Text, View} from "react-native";
import ExtractDetailStyle from "./ExtractDetailStyle";
import extractDetailStyle from "./ExtractDetailStyle";


export default props =>{
    return(
        <View style={ExtractDetailStyle.BoxExtractDetail}>
            <View>
                <Image
                    style={extractDetailStyle.Image}
                    source={{uri: 'https://cdn-icons-png.flaticon.com/512/4544/4544594.png'}}
                />
            </View>
            <View >
                <Text style={extractDetailStyle.DateTxt}> {props.date} </Text>
                <Text style={{fontWeight: "bold"}}> {props.partner} </Text>
                <Text>  + {props.score} pts</Text>
            </View>
        </View>
    )
}