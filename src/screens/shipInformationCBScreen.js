import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICONS} from '../assets/icons/icons';
import HeaderComponents from '../components/headerComponents';
import TouchableOpacityComponent3 from '../components/touchableOpacityComponent3';

const Title = ({title, icon}) => {
  return (
    <View
      style={{
        marginTop: 20,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <Text
        style={{
          color: '#3345CB',
          fontFamily: 'Roboto-Bold',
          fontSize: 16,
          marginRight: 5,
        }}>
        {title}
      </Text>
      {icon ? (
        <Image
          source={ICONS.Drop}
          resizeMode="contain"
          style={{width: 8, height: 6, tintColor: '#3345CB'}}
        />
      ) : (
        ''
      )}
    </View>
  );
};
const TextInputCusTom = ({lable, placeholder, text, setText}) => {
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
        placeholder={placeholder}
        placeholderTextColor={'#333'}
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
const ShipInfor = ({data}) => {
  return (
    <View
      style={{
        borderRadius: 6,
        backgroundColor: '#FFF',
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 5,
        paddingBottom: 20,
      }}>
      <TextInputCusTom
        lable={'Số đăng kí'}
        text={data.registerNum}
        placeholder={'--'}
      />

      <TextInputCusTom lable={'Tên tàu'} text={data.name} placeholder={'--'} />

      <TextInputCusTom
        lable={'Địa bàn đăng kí'}
        text={data.registerLocation}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Ngành nghề'}
        text={data.job}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Hô hiệu'}
        text={data.shortName}
        placeholder={'--'}
      />

      <TextInputCusTom lable={'Loại tàu'} text={data.type} placeholder={'--'} />

      <TextInputCusTom
        lable={'Ngày xuất xưởng'}
        text={data.mfg}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Nơi đóng'}
        text={data.shipbuildingSite}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Mẫu thiết kế'}
        text={data.design}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Cơ quan thiết kế'}
        text={data.designAgency}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Cảng biển đăng kí'}
        text={data.registerPort}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Cơ quan đăng kiểm'}
        text={data.registerAgency}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Ngày hết hạn đăng kiểm'}
        text={data.expRegister}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Khu vực hoạt động'}
        text={data.activityArea}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Đơn vị quản lý'}
        text={data.managementUnit}
        placeholder={'--'}
      />
    </View>
  );
};

const Specifications = ({data}) => {
  return (
    <View
      style={{
        borderRadius: 6,
        backgroundColor: '#FFF',
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 5,
        paddingBottom: 20,
      }}>
      <TextInputCusTom
        lable={'Số lượng máy'}
        text={data.machinesNumber}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Tổng công suât'}
        text={data.totalCapacity}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Chiều dài Lmax(m)'}
        text={data.Lmax}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Chiều dài Ltk(m)'}
        text={data.Ltk}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Chiều rộng Bmax(m)'}
        text={data.Bmax}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Chiều rộng Btk(m)'}
        text={data.Btk}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Chiều cao mạn D(m)'}
        text={data.D}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Chiều chìm d(m)'}
        text={data.d}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Mạn khô f(m)'}
        text={data.f}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Vật liệu vỏ'}
        text={data.material}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Tổng dung tích'}
        text={data.totalCapacity2}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Sức chở tối đa (Tấn)'}
        text={data.carryingCapacity}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Tốc độ tự do (Hải lý/h'}
        text={data.speed}
        placeholder={'--'}
      />
    </View>
  );
};
const Certificates = ({data}) => {
  return (
    <View
      style={{
        borderRadius: 6,
        backgroundColor: '#FFF',
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 5,
        paddingBottom: 20,
      }}>
      <TextInputCusTom
        lable={'Số giấy phép khai thác'}
        text={data.SoGPKT}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Ngày cấp GPKT'}
        text={data.NgayCapGPKT}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Ngày hết hạn GPKT'}
        text={data.NgayHetHanGPKT}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Đơn vị cấp GPKT'}
        text={data.DonViCapGPKT}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Số giấy chứng nhận an toàn kĩ thuật'}
        text={data.SoGiayCHungNhan}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Ngày cấp GCNATKT'}
        text={data.NgayCapGCNATKT}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Ngày hết hạn CGNATKT'}
        text={data.NgayHetHanGCNATKT}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Đơn vị cấp GCNATKT'}
        text={data.DonViCapGCNATKT}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Số giấy đăng kí tàu cá'}
        text={data.SoGiayDangKyTauCa}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Ngày cấp số giấy đăng kí tàu cá'}
        text={data.NgayCapSoGiayDKTauCa}
        placeholder={'--'}
      />
    </View>
  );
};
const Locator = ({data}) => {
  return (
    <View
      style={{
        borderRadius: 6,
        backgroundColor: '#FFF',
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 5,
        paddingBottom: 20,
      }}>
      <TextInputCusTom
        lable={'Nhà cung cấp mạng'}
        text={data.NhaCungCap}
        placeholder={'--'}
      />

      <TextInputCusTom lable={'Seri'} text={data.Seri} placeholder={'--'} />

      <TextInputCusTom
        lable={'Trạng thái'}
        text={data.TrangThai}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Ngày đăng kí thiết bị'}
        text={data.NgayDk}
        placeholder={'--'}
      />
    </View>
  );
};
const File = ({data}) => {
  return (
    <View
      style={{
        borderRadius: 6,
        backgroundColor: '#FFF',
        flex: 1,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 5,
        paddingBottom: 20,
      }}>
      <TextInputCusTom
        lable={'Giấy chứng nhận đăng kí tàu'}
        text={data.GCNDKT}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Giấy chứng nhận an toàn kỹ thuật'}
        text={data.GCNATKT}
        placeholder={'--'}
      />

      <TextInputCusTom
        lable={'Thiết bị định vi'}
        text={data.TBDV}
        placeholder={'--'}
      />
    </View>
  );
};
const Owner = ({data, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CrewInformationScreen')}>
      <View
        style={{
          borderRadius: 6,
          height: 103,
          backgroundColor: '#FFF',
          flexDirection: 'row',
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
                {data.name}
              </Text>
              <View style={{flex: 5, marginTop: 3}}>
                <Text
                  style={{
                    color: '#3345CB',
                    fontFamily: 'Roboto-Regular',
                    fontSize: 12,
                  }}>
                  Sở hữu
                </Text>
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
              {data.cccd}
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontSize: 12,
                color: '#ADADAD',
                paddingRight: 12,
              }}>
              {data.location}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Member = ({data, navigation}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('CrewInformationScreen')}>
              <View
                style={{
                  borderRadius: 6,
                  height: 103,
                  backgroundColor: '#FFF',
                  flexDirection: 'row',
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
                        {item.name}
                      </Text>
                      <View style={{flex: 5, marginTop: 3}}>
                        <Text
                          style={{
                            color: '#3345CB',
                            fontFamily: 'Roboto-Regular',
                            fontSize: 12,
                          }}>
                          {item.position}
                        </Text>
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
                      {item.cccd}
                    </Text>
                    <Text
                      style={{
                        fontFamily: 'Roboto-Regular',
                        fontSize: 12,
                        color: '#ADADAD',
                        paddingRight: 12,
                      }}>
                      {item.location}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const ShipInformationCBScreen = ({navigation}) => {
  const [shipInfor, setShipInfor] = useState({
    registerNum: '00175',
    name: 'Thái học',
    registerLocation: 'Trong tỉnh',
    job: 'Câu mực',
    shortName: '',
    type: 'Tàu cá',
    mfg: '13/2/2023',
    shipbuildingSite: '',
    design: 'Dân gian',
    designAgency: '',
    registerPort: 'Sông đốc',
    registerAgency: 'Trung tâm đăng kiểm cà mau',
    expRegister: '22/12/2024',
    activityArea: 'Biển Việt Nam',
    managementUnit: 'Trạm kiểm soát bồ đề',
  });
  const [specifications, setSpecifications] = useState({
    machinesNumber: '3',
    totalCapacity: '1700',
    Lmax: '1400',
    Ltk: '1400',
    Bmax: '240',
    Btk: '220',
    D: '140',
    d: '50',
    f: '0.3',
    material: 'Gỗ',
    totalCapacity2: '15.28',
    carryingCapacity: '11.84',
    speed: '120',
  });
  const [certificates, setCertificates] = useState({
    SoGPKT: '0034/2021',
    NgayCapGPKT: '03/02/2021',
    NgayHetHanGPKT: '17/1/2024',
    DonViCapGPKT: 'Chi cục thủy sản cà mau',
    SoGiayCHungNhan: '0375',
    NgayCapGCNATKT: '23/2/2022',
    NgayHetHanGCNATKT: '23/2/2024',
    DonViCapGCNATKT: 'Trung tâm đăng kiểm tàu cá cà mau',
    SoGiayDangKyTauCa: '020902',
    NgayCapSoGiayDKTauCa: '16/9/2023',
  });
  const [locator, setLocator] = useState({
    NhaCungCap: 'Viettel',
    Seri: '0209 2001 0511 2001',
    TrangThai: 'Đang hoạt động',
    NgayDk: '16/09/2022',
  });
  const [file, setFile] = useState({
    GCNDKT: 'GCNDKT.png',
    GCNATKT: 'GCNATKT.png',
    TBDV: 'dingvi.png',
  });
  const [owner, setOwner] = useState({
    name: 'Phan Văn Anh',
    cccd: '003040506070809',
    location:
      'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau',
  });
  const [member, setMember] = useState([
    {
      name: 'Phan Văn Anh',
      position: 'Thuyền trưởng',
      cccd: '003040506070809',
      location:
        'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau',
    },
    {
      name: 'Phan Văn Em',
      position: 'Thuyền phó',
      cccd: '003040506070809',
      location:
        'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau',
    },
    {
      name: 'Phan Văn Đức',
      position: 'Thuyền nhỏ',
      cccd: '003040506070809',
      location:
        'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau',
    },
    {
      name: 'Phan Văn Báo',
      position: 'Thuyền to',
      cccd: '003040506070809',
      location:
        'Sào Lưới, Xã Khánh Bình Tây Bắc, Huyện Trần Văn Thời, Tỉnh Cà Mau',
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <HeaderComponents
        label={'Thông tin chi tiết'}
        navigation={navigation}
        colorIcon={'#333'}
      />
      <StatusBar backgroundColor={'rgb(250,250,250)'} />
      <ScrollView>
        <View style={{flex: 1, marginLeft: 12, marginRight: 12}}>
          <Title title={'Thông tin tàu'} icon={true} />
          <ShipInfor data={shipInfor} />
          <Title title={'Thông số kĩ thuật'} icon={true} />
          <Specifications data={specifications} />
          <Title title={'Thông tin giấy chứng nhận'} icon={true} />
          <Certificates data={certificates} />
          <Title title={'Thông tin thiết bị định vị'} icon={true} />
          <Locator data={locator} />
          <Title title={'File đính kèm'} icon={true} />
          <File data={file} />
          <Title title={'Chủ sở hữu'} icon={true} />
          <Owner data={owner} navigation={navigation} />
          <Title title={'Thành viên'} icon={true} />
          <Member data={member} navigation={navigation} />
          {/* ========= */}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
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
        </View>
      </ScrollView>
    </View>
  );
};

export default ShipInformationCBScreen;
