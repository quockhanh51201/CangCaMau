import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';
import ForgotPassScreen from '../screens/forgotPassScreen';
import ForgotPassOTPScreen from '../screens/forgotPassOTPScreen';
import NewPassScreen from '../screens/newPassScreen';
import LoadScreen from '../screens/loadScreen';
import RegisterOTPScreen from '../screens/registerOTPScreen';
import ScanQRScreen from '../screens/scanQRScreen';
import HomeScreen from '../screens/homeScreen';
import ProfileScreen from '../screens/profileScreen';
import NavMenuComponent from '../components/navMenuComponent';
import InforScreen from '../screens/inforScreen';
import ChangePassScreen from '../screens/changePassScreen';
import UpdateInforScreen from '../screens/updateInforScreen';
import InOutScreen from '../screens/inOutScreen';
import FilterScreen from '../screens/FilterSceen';
import InScreen from '../screens/inScreen';
import RequestCheckOutScreen from '../screens/requestCheckOutScreen';
import OutScreen from '../screens/outScreen';
import CheckOutNocationScreen from '../screens/checkOutNocationScreen';
import MinutesCheckOutScreen from '../screens/minutesCheckOutScreen';
import RequestCheckInScreen from '../screens/requestCheckInScreen';
import WaitConfirmRequestCheckInScreen from '../screens/waitConfirmRequestCheckInScreen';
import WaitConfirmRequestCheckOutScreen from '../screens/waitConfirmRequestCheckOutScreen';
import AcceptCheckIn from '../screens/acceptCheckIn';
import AcceptCheckOut from '../screens/acceptCheckOut';
import NoCheckInScreen from '../screens/noCheckInScreen';
import NoCheckOutScreen from '../screens/noCheckOutScreen';
import RefuseCheckInScreen from '../screens/refuseCheckInScreen';
import RefuseCheckOutScreen from '../screens/refuseCheckOutScreen';
import CompleteCheckOutScreen from '../screens/completeCheckOutScreen';
import CompleteCheckInScreen from '../screens/completeCheckInScreen';
import WaitConfirmCheckInScreen from '../screens/waitConfirmCheckInScreen';
import WaitConfirmCheckOutScreen from '../screens/waitConfirmCheckOutScreen';
import CheckInNocationScreen from '../screens/checkInNocationScreen';
import MinutesCheckInScreen from '../screens/minutesCheckInScreen';
import ListOfShipScreen from '../screens/listOfShipScreen';
import ShipInformationScreen from '../screens/shipInformationScreen';
import CrewInformationScreen from '../screens/crewInformationScreen';
import AddMemberScreen from '../screens/addMemberScreen';
import ListOfCrewScreen from '../screens/listOfCrewScreen';
import DetailCrewScreen from '../screens/detailCrewScreen';
import UpdateDetailCrewScreen from '../screens/UpdateDetailCrewScreen';
import FilterCrewScreen from '../screens/FilterCrewSceen';
import AddShipScreen from '../screens/addShipScreen';
import AddShipScreen2 from '../screens/addShipScreen2';
import AddShipScreen3 from '../screens/addShipScreen3';
import AddShipScreen4 from '../screens/addShipScreen4';
import AddShipScreen5 from '../screens/addShipScreen5';
import AddShipScreen6 from '../screens/addShipScreen6';
import ViolationHistoryScreen from '../screens/violationHistoryScreen';
import AccidentHistoryScreen from '../screens/accidentHistoryScreen';
import WarningScreen from '../screens/warningScreen';
import DetailViolationScreen from '../screens/detailViolationScreen';
import DetailAccidentScreen from '../screens/detailAccidentScreen';
import DetailWarningScreen from '../screens/detailWarningScreen';
import NavMenuCBComponent from '../components/navMenuCBComponent';
import HomeCBScreen from '../screens/homeCBScreen';
import ProfileCBScreen from '../screens/profileCBScreen';
import InforCBScreen from '../screens/inforCBScreen';
import ForgotPassCBScreen from '../screens/forgotPassCBScreen';
import InOutCBScreen from '../screens/inOutCBScreen';
import ConfirmRequestCheckOutScreen from '../screens/confirmRequestCheckOutScreen';
import ConfirmRequestCheckInScreen from '../screens/confirmRequestCheckInScreen';
import ListOfCrewCBScreen from '../screens/listOfCrewCBScreen';
import DetailCrewCBScreen from '../screens/detailCrewCBScreen';
import ListOfShipCBScreen from '../screens/listOfShipCBScreen';
import ShipInformationCBScreen from '../screens/shipInformationCBScreen';
import FilterShipCBSceen from '../screens/FilterShipCBSceen';
import ViolationCBScreen from '../screens/violationCBScreen';
import FilterViolationCBSceen from '../screens/FilterViolationCBSceen';
import DetailViolationCBScreen from '../screens/detailViolationCBScreen';
import AddViolationScreen from '../screens/addViolationScreen';
import AccidentHistoryCBScreen from '../screens/accidentHistoryCBScreen';
import FilterAccidentCBSceen from '../screens/FilterAccidentCBSceen';
import DetailAccidentCBScreen from '../screens/detailAccidentCBScreen';
import AddAccidentCBScreen from '../screens/addAccidentCBScreen';
import Test from '../screens/test';
import NotificationCBScreen from '../screens/notificationCBScreen';
import DetailNotificationCBScreen from '../screens/DetailNotificationCBScreen';
import AddNotifinationCBScreen from '../screens/addNotifinationCBScreen';
import ListPierScreen from '../screens/listPierScreen';
import DetailPierScreen from '../screens/detailPierScreen';
import AskCBScreen from '../screens/askCBScreen';
import FilterAskCBSceen from '../screens/FilterAskCBSceen';
import AddAskScreen from '../screens/addAskScreen';
import DetailAskScreen from '../screens/detailAskScreen';
import ReplyAskScreen from '../screens/replyAskScreen';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen name="TabBar" component={NavMenuComponent} />
        <Stack.Screen name="TabBarCB" component={NavMenuCBComponent} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
        <Stack.Screen name="ForgotPassOTP" component={ForgotPassOTPScreen} />
        <Stack.Screen name="RegisterOTP" component={RegisterOTPScreen} />
        <Stack.Screen name="NewPass" component={NewPassScreen} />
        <Stack.Screen name="Load" component={LoadScreen} />
        <Stack.Screen name="ScanQR" component={ScanQRScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="InforScreen" component={InforScreen} />
        <Stack.Screen name="ChangePassScreen" component={ChangePassScreen} />
        <Stack.Screen name="UpdateInforScreen" component={UpdateInforScreen} />
        <Stack.Screen name="InOutScreen" component={InOutScreen} />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        <Stack.Screen name="InScreen" component={InScreen} />
        <Stack.Screen
          name="RequestCheckOutScreen"
          component={RequestCheckOutScreen}
        />
        <Stack.Screen name="OutScreen" component={OutScreen} />
        <Stack.Screen
          name="CheckOutNocationScreen"
          component={CheckOutNocationScreen}
        />
        <Stack.Screen
          name="MinutesCheckOutScreen"
          component={MinutesCheckOutScreen}
        />
        <Stack.Screen
          name="RequestCheckInScreen"
          component={RequestCheckInScreen}
        />
        <Stack.Screen
          name="WaitConfirmRequestCheckInScreen"
          component={WaitConfirmRequestCheckInScreen}
        />
        <Stack.Screen
          name="WaitConfirmRequestCheckOutScreen"
          component={WaitConfirmRequestCheckOutScreen}
        />
        <Stack.Screen name="AcceptCheckIn" component={AcceptCheckIn} />
        <Stack.Screen name="AcceptCheckOut" component={AcceptCheckOut} />
        <Stack.Screen
          name="RefuseCheckInScreen"
          component={RefuseCheckInScreen}
        />
        <Stack.Screen
          name="RefuseCheckOutScreen"
          component={RefuseCheckOutScreen}
        />
        <Stack.Screen
          name="WaitConfirmCheckOutScreen"
          component={WaitConfirmCheckOutScreen}
        />
        <Stack.Screen
          name="WaitConfirmCheckInScreen"
          component={WaitConfirmCheckInScreen}
        />
        <Stack.Screen name="NoCheckInSc66reen" component={NoCheckInScreen} />
        <Stack.Screen name="NoCheckOutScreen" component={NoCheckOutScreen} />
        <Stack.Screen
          name="CompleteCheckOutScreen"
          component={CompleteCheckOutScreen}
        />
        <Stack.Screen
          name="CompleteCheckInScreen"
          component={CompleteCheckInScreen}
        />
        <Stack.Screen
          name="CheckInNocationScreen"
          component={CheckInNocationScreen}
        />
        <Stack.Screen
          name="MinutesCheckInScreen"
          component={MinutesCheckInScreen}
        />
        <Stack.Screen name="ListOfShipScreen" component={ListOfShipScreen} />
        <Stack.Screen
          name="ShipInformationScreen"
          component={ShipInformationScreen}
        />
        <Stack.Screen
          name="CrewInformationScreen"
          component={CrewInformationScreen}
        />
        <Stack.Screen name="AddMemberScreen" component={AddMemberScreen} />
        <Stack.Screen name="ListOfCrewScreen" component={ListOfCrewScreen} />
        <Stack.Screen name="DetailCrewScreen" component={DetailCrewScreen} />
        <Stack.Screen
          name="UpdateDetailCrewScreen"
          component={UpdateDetailCrewScreen}
        />
        <Stack.Screen name="FilterCrewScreen" component={FilterCrewScreen} />
        <Stack.Screen name="AddShipScreen" component={AddShipScreen} />
        <Stack.Screen name="AddShipScreen2" component={AddShipScreen2} />
        <Stack.Screen name="AddShipScreen3" component={AddShipScreen3} />
        <Stack.Screen name="AddShipScreen4" component={AddShipScreen4} />
        <Stack.Screen name="AddShipScreen5" component={AddShipScreen5} />
        <Stack.Screen name="AddShipScreen6" component={AddShipScreen6} />
        <Stack.Screen
          name="ViolationHistoryScreen"
          component={ViolationHistoryScreen}
        />
        <Stack.Screen
          name="AccidentHistoryScreen"
          component={AccidentHistoryScreen}
        />
        <Stack.Screen name="WarningScreen" component={WarningScreen} />
        <Stack.Screen
          name="DetailViolationScreen"
          component={DetailViolationScreen}
        />
        <Stack.Screen
          name="DetailAccidentScreen"
          component={DetailAccidentScreen}
        />
        <Stack.Screen
          name="DetailWarningScreen"
          component={DetailWarningScreen}
        />
        <Stack.Screen name="HomeCBScreen" component={HomeCBScreen} />
        <Stack.Screen name="ProfileCBScreen" component={ProfileCBScreen} />
        <Stack.Screen name="InforCBScreen" component={InforCBScreen} />
        <Stack.Screen
          name="ForgotPassCBScreen"
          component={ForgotPassCBScreen}
        />
        <Stack.Screen name="InOutCBScreen" component={InOutCBScreen} />
        <Stack.Screen
          name="ConfirmRequestCheckOutScreen"
          component={ConfirmRequestCheckOutScreen}
        />
        <Stack.Screen
          name="ConfirmRequestCheckInScreen"
          component={ConfirmRequestCheckInScreen}
        />
        <Stack.Screen
          name="ListOfCrewCBScreen"
          component={ListOfCrewCBScreen}
        />
        <Stack.Screen
          name="DetailCrewCBScreen"
          component={DetailCrewCBScreen}
        />
        <Stack.Screen
          name="ListOfShipCBScreen"
          component={ListOfShipCBScreen}
        />
        <Stack.Screen
          name="ShipInformationCBScreen"
          component={ShipInformationCBScreen}
        />
        <Stack.Screen name="FilterShipCBSceen" component={FilterShipCBSceen} />
        <Stack.Screen name="ViolationCBScreen" component={ViolationCBScreen} />
        <Stack.Screen
          name="FilterViolationCBSceen"
          component={FilterViolationCBSceen}
        />
        <Stack.Screen
          name="DetailViolationCBScreen"
          component={DetailViolationCBScreen}
        />
        <Stack.Screen
          name="AddViolationScreen"
          component={AddViolationScreen}
        />
        <Stack.Screen
          name="AccidentHistoryCBScreen"
          component={AccidentHistoryCBScreen}
        />
        <Stack.Screen
          name="FilterAccidentCBSceen"
          component={FilterAccidentCBSceen}
        />
        <Stack.Screen
          name="DetailAccidentCBScreen"
          component={DetailAccidentCBScreen}
        />
        <Stack.Screen
          name="AddAccidentCBScreen"
          component={AddAccidentCBScreen}
        />
        <Stack.Screen
          name="NotificationCBScreen"
          component={NotificationCBScreen}
        />
        <Stack.Screen
          name="DetailNotificationCBScreen"
          component={DetailNotificationCBScreen}
        />
        <Stack.Screen
          name="AddNotifinationCBScreen"
          component={AddNotifinationCBScreen}
        />
        <Stack.Screen name="ListPierScreen" component={ListPierScreen} />
        <Stack.Screen name="DetailPierScreen" component={DetailPierScreen} />
        <Stack.Screen name="AskCBScreen" component={AskCBScreen} />
        <Stack.Screen name="FilterAskCBSceen" component={FilterAskCBSceen} />
        <Stack.Screen name="AddAskScreen" component={AddAskScreen} />
        <Stack.Screen name="DetailAskScreen" component={DetailAskScreen} />
        <Stack.Screen name="ReplyAskScreen" component={ReplyAskScreen} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
