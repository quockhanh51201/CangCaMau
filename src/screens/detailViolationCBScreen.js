import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import HeaderComponents from '../components/headerComponents';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';
import {IMAGES} from '../assets/images/images';

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
const DetailViolationCBScreen = ({navigation}) => {
  const [name, setName] = useState('0602 -Thái học 3');
  const [time, setTime] = useState('20/2/2022 10:30');
  const [member, setMember] = useState(10);
  const [lucLuongBat, setLucLuongBat] = useState('DQ Biển Hố Gùi');
  const [khuVuc, setKhuVuc] = useState('DQ Biển Hố Gùi');
  const [xuLy, setXuLy] = useState('DQ Biển Hố Gùi');
  const [LyDo, setLyDo] = useState('Không có giấy phép đánh cá');
  const [HinhThuc, setHinhThuc] = useState(
    'Đề nghị quay lại bờ phạt 1000000 tỷ',
  );
  const [note, setNote] = useState('');

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'transparent'} />
      <HeaderComponents
        navigation={navigation}
        label={'Chi tiết vi phạm'}
        colorIcon={'#333'}
      />
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
            lable={'Thời gian bị bắt'}
            text={time}
            setText={setTime}
          />
          <TextInputCusTom
            lable={'Số thuyền viên hiện hữu'}
            text={member}
            setText={setMember}
          />
          <TextInputCusTom
            lable={'Lực lượng bắt'}
            text={lucLuongBat}
            setText={setLucLuongBat}
          />
          <TextInputCusTom
            lable={'Khu vực bị bắt'}
            text={khuVuc}
            setText={setKhuVuc}
          />
          <TextInputCusTom
            lable={'Đơn vị xử lý'}
            text={xuLy}
            setText={setXuLy}
          />
          <TextInputCusTom
            lable={'Lí do bị bắt'}
            text={LyDo}
            setText={setLyDo}
          />
          <TextInputCusTom
            lable={'Hình thức xử lý'}
            text={HinhThuc}
            setText={setHinhThuc}
          />
          <TextInputCusTom lable={'Ghi chú'} text={note} setText={setNote} />
        </View>
        <View
          style={{
            borderRadius: 10,
            marginLeft: 12,
            marginRight: 12,
            marginTop: 10,
            backgroundColor: '#FFF',
            paddingLeft: 12,
            paddingRight: 12,
            paddingVertical: 15,
          }}>
          <Text
            style={{
              color: '#3345CB',
              fontFamily: 'Roboto-Regular',
              fontSize: 16,
            }}>
            Người tạo
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Image
              source={IMAGES.avt}
              resizeMode="contain"
              style={{width: 48, height: 48, marginRight: 10}}
            />
            <View>
              <Text
                style={{
                  color: '#333',
                  fontFamily: 'Roboto-Bold',
                  fontSize: 16,
                }}>
                Lê văn kiển
              </Text>
              <Text
                style={{
                  color: '#ADADAD',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 12,
                }}>
                Chuyên viên đội rạch đốc
              </Text>
            </View>
          </View>
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
  );
};

export default DetailViolationCBScreen;
