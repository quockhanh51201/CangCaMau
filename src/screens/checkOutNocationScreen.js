import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import HeaderComponents from '../components/headerComponents';
import {ICONS} from '../assets/icons/icons';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';
import CheckBoxComponent2 from '../components/checkBoxComponent2';

const Title = ({title}) => {
  return (
    <View style={{marginBottom: 5, marginTop: 10}}>
      <Text style={{color: '#005F94', fontFamily: 'Roboto-Bold', fontSize: 16}}>
        {title}
      </Text>
    </View>
  );
};
const TextInputCusTom = ({lable, text, setText, keyboardType}) => {
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
        {text}
        {lable}
      </Text>
      <TextInput
        placeholder="--"
        placeholderTextColor={'#333'}
        keyboardType={keyboardType}
        style={{
          color: '#333',
          fontFamily: 'Roboto-Regular',
          fontSize: 16,
        }}
        onChangeText={setText}
        value={text}
        editable={false}></TextInput>
    </View>
  );
};
const CheckOutNocationScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, marginLeft: 12, marginRight: 12}}>
      <HeaderComponents
        label={'Phiếu thông báo tàu cá xuất Bến'}
        colorIcon={'#333'}
        navigation={navigation}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{fontFamily: 'Roboto-Bold', fontSize: 14, color: '#005F94'}}>
          TB0069/1022
        </Text>
      </View>
      <ScrollView>
        <Title title={'1. Tên tàu'} />
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingBottom: 15,
            paddingLeft: 12,
            paddingRight: 12,
          }}>
          <TextInputCusTom lable={'Tên phương tiện'} />
          <TextInputCusTom lable={'Số đăng ký'} />
        </View>
        <Title title={'2. Tên chủ tàu'} />
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 6,
              backgroundColor: '#FFF',
              flexDirection: 'row',
              paddingBottom: 15,
            }}>
            <View
              style={{
                marginTop: 15,
                marginLeft: 12,
                marginBottom: 32,
                marginRight: 10,
              }}>
              <Image
                source={ICONS.Profile}
                resizeMode="contain"
                style={{height: 40, width: 40}}
              />
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View style={{flex: 10, flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: 16,
                      color: '#333',
                      flex: 5,
                    }}>
                    Phan Quốc Khánh
                  </Text>
                  <View style={{flex: 5, marginTop: 3, flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: '#005F94',
                        fontFamily: 'Roboto-Regular',
                        fontSize: 12,
                      }}>
                      Chủ tàu
                    </Text>
                    <Image
                      source={ICONS.I}
                      resizeMode="contain"
                      style={{height: 16, width: 16, marginLeft: 5}}
                    />
                  </View>
                </View>
                <View style={{marginTop: 5, flex: 1}}>
                  <Image
                    source={ICONS.Next}
                    resizeMode="contain"
                    style={{height: 12, width: 12}}
                  />
                </View>
              </View>
              <View style={{flex: 2}}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 14,
                    marginBottom: 5,
                    color: '#333',
                  }}>
                  03343500xx
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 12,
                    color: '#ADADAD',
                    paddingRight: 12,
                  }}>
                  Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà
                  Mau
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Title title={'3. Tên thuyền trưởng'} />
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 6,
              backgroundColor: '#FFF',
              flexDirection: 'row',
              paddingBottom: 15,
            }}>
            <View
              style={{
                marginTop: 15,
                marginLeft: 12,
                marginBottom: 32,
                marginRight: 10,
              }}>
              <Image
                source={ICONS.Profile}
                resizeMode="contain"
                style={{height: 40, width: 40}}
              />
            </View>
            <View style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 15,
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View style={{flex: 10, flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: 'Roboto-Bold',
                      fontSize: 16,
                      color: '#333',
                      flex: 5,
                    }}>
                    Phan Quốc Khánh
                  </Text>
                  <View style={{flex: 5, marginTop: 3, flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: '#005F94',
                        fontFamily: 'Roboto-Regular',
                        fontSize: 12,
                      }}>
                      Chủ tàu
                    </Text>
                    <Image
                      source={ICONS.I}
                      resizeMode="contain"
                      style={{height: 16, width: 16, marginLeft: 5}}
                    />
                  </View>
                </View>
                <View style={{marginTop: 5, flex: 1}}>
                  <Image
                    source={ICONS.Next}
                    resizeMode="contain"
                    style={{height: 12, width: 12}}
                  />
                </View>
              </View>
              <View style={{flex: 2}}>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 14,
                    marginBottom: 5,
                    color: '#333',
                  }}>
                  03343500xx
                </Text>
                <Text
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontSize: 12,
                    color: '#ADADAD',
                    paddingRight: 12,
                  }}>
                  Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà
                  Mau
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Title title={'4. Thời gian nhập cảng'} />
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingBottom: 15,
            paddingLeft: 12,
            paddingRight: 12,
          }}>
          <TextInputCusTom lable={'Thời gian'} />
        </View>
        <Title title={'5. Nhu cầu nhập cảng'} />
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingBottom: 15,
            paddingLeft: 12,
            paddingRight: 12,
          }}>
          <TextInputCusTom lable={'Nhu cầu nhập cảng'} />
        </View>
        <Title title={'6. Kiểm tra hồ sơ'} />
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingBottom: 20,
            paddingLeft: 12,
            paddingRight: 12,
          }}>
          <TextInputCusTom lable={'Kiểm tra hồ sơ'} />
          <TextInputCusTom lable={'Ngành nghề'} />
          <TextInputCusTom lable={'Chiều dài'} />
          <TextInputCusTom lable={'Công suất'} />
          <TextInputCusTom lable={'Số GPKT'} />
          <TextInputCusTom lable={'Ngày hết hạn đăng kiểm'} />
          <View style={{marginTop: 20}}>
            <CheckBoxComponent2
              label={
                'Nhật ký khai thác/ thu mua chuyển tải thủy sản chuyến trước'
              }
              isChecked={true}
              color={'#333'}
            />
          </View>
        </View>
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingBottom: 20,
            paddingLeft: 12,
            paddingRight: 12,
            marginTop: 5,
          }}>
          <TextInputCusTom lable={'Kiểm tra nội dung nhật kí'} />
        </View>
        <Title title={'7. Kết luận'} />
        <View
          style={{
            borderRadius: 6,
            backgroundColor: '#FFF',
            paddingBottom: 20,
            paddingLeft: 12,
            paddingRight: 12,
          }}>
          <TextInputCusTom lable={'Kết luận'} />
        </View>
        <View style={{marginTop: 20}}>
          <View style={{marginBottom: 15}}>
            <CheckBoxComponent2
              label={
                'Biên bản kiểm tra đối chiếu sản lượng thủy sản bốc dỡ qua cảng'
              }
              isChecked={true}
              color={'#333'}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <CheckBoxComponent2
              label={'Sổ danh bạ thuyền viên'}
              isChecked={true}
              color={'#333'}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <CheckBoxComponent2
              label={'Bằng thuyền trưởng máy trưởng'}
              isChecked={true}
              color={'#333'}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <CheckBoxComponent2
              label={'Giấy phép khai thác thủy sản'}
              isChecked={true}
              color={'#333'}
            />
          </View>
          <View style={{marginBottom: 15}}>
            <CheckBoxComponent2
              label={'Đăng ký đăng kiểm tàu cá'}
              isChecked={true}
              color={'#333'}
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
            marginBottom: 37,
          }}>
          <View style={{width: 173}}>
            <TouchableOpacityComponent3
              content={'Đóng'}
              color={'#333333'}
              backgroundColor={'#FFF'}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default CheckOutNocationScreen;
