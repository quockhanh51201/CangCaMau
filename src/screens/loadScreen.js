import { Image, ImageBackground, View } from "react-native"
import { IMAGES } from "../assets/images/images"
import { ICONS } from "../assets/icons/icons"

const LoadScreen = ({navigation}) => {
    return(
        <ImageBackground source={IMAGES.background1} resizeMode="stretch" 
            style={{
                flex: 1,                
                justifyContent: 'flex-start',
                alignItems: 'center'
            }}
        >
            <View
                style = {{
                    height: 375,
                    width: 812,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image source={ICONS.Neo} resizeMode="stretch" style={{height: 168.24, width: 200}}/>
            </View>
        </ImageBackground>
    )
}

export default LoadScreen