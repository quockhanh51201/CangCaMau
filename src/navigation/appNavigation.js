import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/loginScreen";
import RegisterScreen from "../screens/registerScreen";
import ForgotPassScreen from "../screens/forgotPassScreen";
import ForgotPassOTPScreen from "../screens/forgotPassOTPScreen";
import NewPassScreen from "../screens/newPassScreen";
import LoadScreen from "../screens/loadScreen";
import RegisterOTPScreen from "../screens/registerOTPScreen";
import ScanQRScreen from "../screens/scanQRScreen";

const AppNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name = "Login" component={LoginScreen}/>
                <Stack.Screen name = "Register" component={RegisterScreen}/>
                <Stack.Screen name = "ForgotPass" component={ForgotPassScreen}/>
                <Stack.Screen name = "ForgotPassOTP" component={ForgotPassOTPScreen}/>
                <Stack.Screen name = "RegisterOTP" component={RegisterOTPScreen}/>
                <Stack.Screen name = "NewPass" component={NewPassScreen}/>
                <Stack.Screen name = "Load" component={LoadScreen}/>
                <Stack.Screen name = "ScanQR" component={ScanQRScreen}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation