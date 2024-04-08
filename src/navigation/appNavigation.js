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
import HomeScreen from "../screens/homeScreen";
import ProfileScreen from "../screens/profileScreen";
import NavMenuComponent from "../components/navMenuComponent";
import InforScreen from "../screens/inforScreen";
import ChangePassScreen from "../screens/changePassScreen";
import UpdateInforScreen from "../screens/updateInforScreen";
import InOutScreen from "../screens/inOutScreen";
import FilterScreen from "../screens/FilterSceen";
import InScreen from "../screens/inScreen";
import RequestCheckOutScreen from "../screens/requestCheckOutScreen";
import OutScreen from "../screens/outScreen";
import CheckOutNocationScreen from "../screens/checkOutNocationScreen";
import MinutesCheckOutScreen from "../screens/minutesCheckOutScreen";
import RequestCheckInScreen from "../screens/requestCheckInScreen";
import WaitConfirmRequestCheckInScreen from "../screens/waitConfirmRequestCheckInScreen";
import WaitConfirmRequestCheckOutScreen from "../screens/waitConfirmRequestCheckOutScreen";
import AcceptCheckIn from "../screens/acceptCheckIn";
import AcceptCheckOut from "../screens/acceptCheckOut";
import RefuseCheckIn from "../screens/refuseCheckInScreen";
import RefuseCheckOut from "../screens/refuseCheckOutScreen";
import WaitConfirmCheckOut from "../screens/waitConfirmCheckOut";
import WaitConfirmCheckIn from "../screens/waitConfirmCheckIn";
import NoCheckInScreen from "../screens/noCheckInScreen";
import NoCheckOutScreen from "../screens/noCheckOutScreen";
import RefuseCheckInScreen from "../screens/refuseCheckInScreen";
import RefuseCheckOutScreen from "../screens/refuseCheckOutScreen";

const AppNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
                <Stack.Screen name="TabBar" component={NavMenuComponent}/>
                <Stack.Screen name = "Login" component={LoginScreen}/>
                <Stack.Screen name = "Register" component={RegisterScreen}/>
                <Stack.Screen name = "ForgotPass" component={ForgotPassScreen}/>
                <Stack.Screen name = "ForgotPassOTP" component={ForgotPassOTPScreen}/>
                <Stack.Screen name = "RegisterOTP" component={RegisterOTPScreen}/>
                <Stack.Screen name = "NewPass" component={NewPassScreen}/>
                <Stack.Screen name = "Load" component={LoadScreen}/>
                <Stack.Screen name = "ScanQR" component={ScanQRScreen}/>
                <Stack.Screen name = "Home" component={HomeScreen}/>
                <Stack.Screen name = "ProfileScreen" component={ProfileScreen}/>
                <Stack.Screen name = "InforScreen" component={InforScreen}/>
                <Stack.Screen name = "ChangePassScreen" component={ChangePassScreen}/>
                <Stack.Screen name = "UpdateInforScreen" component={UpdateInforScreen}/>
                <Stack.Screen name = "InOutScreen" component={InOutScreen}/>
                <Stack.Screen name = "FilterScreen" component={FilterScreen}/>
                <Stack.Screen name = "InScreen" component={InScreen}/>
                <Stack.Screen name = "RequestCheckOutScreen" component={RequestCheckOutScreen}/>
                <Stack.Screen name = "OutScreen" component={OutScreen}/>
                <Stack.Screen name = "CheckOutNocationScreen" component={CheckOutNocationScreen}/>
                <Stack.Screen name = "MinutesCheckOutScreen" component={MinutesCheckOutScreen}/>
                <Stack.Screen name = "RequestCheckInScreen" component={RequestCheckInScreen}/>
                <Stack.Screen name = "WaitConfirmRequestCheckInScreen" component={WaitConfirmRequestCheckInScreen}/>
                <Stack.Screen name = "WaitConfirmRequestCheckOutScreen" component={WaitConfirmRequestCheckOutScreen}/>
                <Stack.Screen name = "AcceptCheckIn" component={AcceptCheckIn}/>
                <Stack.Screen name = "AcceptCheckOut" component={AcceptCheckOut}/>
                <Stack.Screen name = "RefuseCheckInScreen" component={RefuseCheckInScreen}/>
                <Stack.Screen name = "RefuseCheckOutScreen" component={RefuseCheckOutScreen}/>
                <Stack.Screen name = "WaitConfirmCheckOut" component={WaitConfirmCheckOut}/>
                <Stack.Screen name = "WaitConfirmCheckIn" component={WaitConfirmCheckIn}/>
                <Stack.Screen name = "NoCheckInScreen" component={NoCheckInScreen}/>
                <Stack.Screen name = "NoCheckOutScreen" component={NoCheckOutScreen}/>



            

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation