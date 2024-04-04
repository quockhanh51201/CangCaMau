import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ICONS } from "../assets/icons/icons";

const RadioComponent = ({label , isChecked, onPress}) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1}}>
            <TouchableOpacity onPress={(onPress)} style = {{flex: 1}} >
                <View
                style={{
                    marginTop: 15, 
                    marginRight: 10, 
                    marginBottom: 15, 
                    marginLeft: 12,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                {isChecked ? (<Image source={ICONS.Radio1} style = {{width: 16, height: 16, }}/>):(<Image source={ICONS.Radio2} style = {{width: 16, height: 16}}/>)}
                </View>
            </TouchableOpacity>
            <View
                style = {{
                    flex: 8,
                    borderBottomWidth: 0.6,
                    borderBottomColor: '#D6D6D6',
                    height: 46,
                    justifyContent: 'center'
                }}
            >
                <Text style={{
                    color: '#333',
                    fontFamily: 'Roboto-Regular',
                    fontSize: 14
                }}>{label}</Text>
            </View>
      </View>
    )
}
export default RadioComponent