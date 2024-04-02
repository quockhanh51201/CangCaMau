import HeaderComponents from "../components/headerComponents"

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View
} from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';


const ScanQRScreen = ({navigation}) => {
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
          console.error('An error occured', err)
        );
      };
    
    return(
      <View style={{flex: 1}}>
        {/* <HeaderComponents navigation={navigation} label={'Quét QR'} colorIcon={'#0D0D0D'}/>
          <QRCodeScanner
            onRead={this.onSuccess}
            flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
              <Text>
                Go to{' '}
                <Text>wikipedia.org/wiki/QR_code</Text> on
                your computer and scan the QR code.
              </Text>
            }
            bottomContent={
              <TouchableOpacity>
                <Text>OK. Got it!</Text>
              </TouchableOpacity>
            }
          /> */}
      </View>
        
    )
}
export default ScanQRScreen