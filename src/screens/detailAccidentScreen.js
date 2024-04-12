import React, {useState} from 'react';
import {ScrollView, StatusBar, Text, TextInput, View} from 'react-native';
import HeaderComponents from '../components/headerComponents';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';
import CheckBoxComponent2 from '../components/checkBoxComponent2';

const TextInputCusTom = ({lable, text, setText}) => {
  return (
    <View
      style={{
        height: 55,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6',
        marginTop: 15,
      }}>
      <Text
        style={{
          color: '#ADADAD',
          fontSize: 12,
          fontFamily: 'Roboto-Regular',
        }}>
        {lable}
      </Text>
      <TextInput
        placeholder="--"
        placeholderTextColor={'#333'}
        editable={false}
        style={{
          color: '#333',
          fontFamily: 'Roboto-Regular',
          fontSize: 16,
        }}
        onChangeText={setText}
        value={text}></TextInput>
    </View>
  );
};
const DetailAccidentScreen = ({navigation}) => {
  const [name, setName] = useState('0602 -Thái học 3');
  const [time, setTime] = useState('20/2/2022 10:30');
  const [LyDo, setLyDo] = useState('');
  const [chet, setChet] = useState('');
  const [matTich, setMatTich] = useState('');
  const [biThuong, setBiThuong] = useState('03');

  const [xuLy, setXuLy] = useState('');
  const [note, setNote] = useState('');
  const [chim, setChim] = useState('');
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#FFF'} />
      <HeaderComponents
        navigation={navigation}
        label={'Chi tiết tai nạn'}
        colorIcon={'#333'}
      />
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              borderRadius: 10,
              marginLeft: 12,
              marginRight: 12,
              marginTop: 10,
              backgroundColor: '#FFF',
              paddingLeft: 12,
              paddingRight: 12,
            }}>
            <TextInputCusTom lable={'Tên tàu'} text={name} setText={setName} />
            <TextInputCusTom
              lable={'Thời gian tai nạn'}
              text={time}
              setText={setTime}
            />
            <TextInputCusTom
              lable={'Ngyên nhân'}
              text={LyDo}
              setText={setLyDo}
            />
          </View>
          <Text
            style={{
              color: '#005F94',
              fontFamily: 'Roboto-Bold',
              fontSize: 16,
              marginLeft: 12,
              marginTop: 15,
            }}>
            Thiệt hại về người
          </Text>
          <View
            style={{
              borderRadius: 10,
              marginLeft: 12,
              marginRight: 12,
              marginTop: 10,
              backgroundColor: '#FFF',
              paddingLeft: 12,
              paddingRight: 12,
            }}>
            <TextInputCusTom
              lable={'Số người chết'}
              text={chet}
              setText={setChet}
            />
            <TextInputCusTom
              lable={'Số người mất tích'}
              text={matTich}
              setText={setMatTich}
            />
            <TextInputCusTom
              lable={'Số người bị thương'}
              text={biThuong}
              setText={setBiThuong}
            />
          </View>
          <Text
            style={{
              color: '#005F94',
              fontFamily: 'Roboto-Bold',
              fontSize: 16,
              marginLeft: 12,
              marginTop: 15,
            }}>
            Thiệt hại về phương tiện
          </Text>
          <View
            style={{
              borderRadius: 10,
              marginLeft: 12,
              marginRight: 12,
              marginTop: 10,
              backgroundColor: '#FFF',
              paddingLeft: 12,
              paddingRight: 12,
            }}>
            <View
              style={{
                height: 114,
                backgroundColor: '#FFF',

                marginTop: 15,
              }}>
              <CheckBoxComponent2
                label={'Chìm'}
                isChecked={true}
                color={'#333'}
              />
              <Text
                style={{
                  color: '#ADADAD',
                  fontSize: 12,
                  fontFamily: 'Roboto-Regular',
                  marginTop: 14,
                }}>
                Thông tin chìm
              </Text>
              <TextInput
                placeholder="--"
                placeholderTextColor={'#333'}
                editable={false}
                style={{
                  color: '#333',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 16,
                  borderBottomWidth: 1,
                  borderColor: '#D6D6D6',
                }}
                onChangeText={setChim}
                value={chim}></TextInput>
            </View>
          </View>
          <Text
            style={{
              color: '#005F94',
              fontFamily: 'Roboto-Bold',
              fontSize: 16,
              marginLeft: 12,
              marginTop: 15,
            }}>
            Đơn vị xử lý
          </Text>
          <View
            style={{
              borderRadius: 10,
              marginLeft: 12,
              marginRight: 12,
              marginTop: 10,
              backgroundColor: '#FFF',
              paddingLeft: 12,
              paddingRight: 12,
            }}>
            <TextInputCusTom
              lable={'Đơn vị xử lý'}
              text={xuLy}
              setText={setXuLy}
            />
            <TextInputCusTom lable={'Ghi chú'} text={note} setText={setNote} />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 15,
            }}>
            <View style={{width: 173}}>
              <TouchableOpacityComponent3
                content={'Đóng'}
                color={'#828282'}
                backgroundColor={'#FFF'}
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailAccidentScreen;
