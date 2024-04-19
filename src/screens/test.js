import React, {useState} from 'react';
import {View, Button, Image, Alert} from 'react-native';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import RNFS from 'react-native-fs';
const Test = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, handleResponse);
  };

  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, handleResponse);
  };

  const handleResponse = response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      let imageUri = response.uri || response.assets?.[0]?.uri;
      setSelectedImage(imageUri);
      saveImageToDevice(imageUri);
    }
  };
  const saveImageToDevice = async imageUri => {
    const imagePath = `${RNFS.DocumentDirectoryPath}/selectedImag121e.jpg`;
    console.log(imagePath);
    try {
      // Copy ảnh từ ứng dụng vào bộ nhớ thiết bị
      await RNFS.copyFile(imageUri, imagePath);

      Alert.alert('Success', 'Image saved to device');
    } catch (error) {
      console.error('Error saving image: ', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          style={{flex: 1}}
          resizeMode="contain"
        />
      )}
      <View style={{marginTop: 20}}>
        <Button title="Choose from Device" onPress={openImagePicker} />
      </View>
      <View style={{marginTop: 20, marginBottom: 50}}>
        <Button title="Open Camera" onPress={handleCameraLaunch} />
      </View>
    </View>
  );
};

export default Test;
