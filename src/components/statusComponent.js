import { Text, View } from "react-native"

const CheckIn  = () => {
    return (
        <View style = {{
            borderRadius: 2,
            width: 55,
            height: 16,
            backgroundColor: '#2B13C0',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style = {{
                color: '#FFF',
                fontSize: 10,
                fontFamily: 'Inter-Regular'
            }}>
                Nhập bến
            </Text>
        </View>
    )
}
const CheckOut  = () => {
    return (
        <View style = {{
            borderRadius: 2,
            width: 55,
            height: 16,
            backgroundColor: '#FD397A',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style = {{
                color: '#FFF',
                fontSize: 10,
                fontFamily: 'Inter-Regular'
            }}>
                Xuất bến
            </Text>
        </View>
    )
}
const Out  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            width: 65,
            height: 16,
            backgroundColor: '#459AC9',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style = {{
                color: '#FFF',
                fontSize: 10,
                fontFamily: 'Inter-Regular'
            }}>
                Ngoài biển
            </Text>
        </View>
    )
}
const In  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            width: 59,
            height: 16,
            backgroundColor: '#FF820F',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style = {{
                color: '#FFF',
                fontSize: 10,
                fontFamily: 'Inter-Regular'
            }}>
                Trong bờ
            </Text>
        </View>
    )
}
// ===
const NoCheckIn  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#F62825',
            width: 115,
            height: 16,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                color: '#F62825',
                fontFamily: 'Inter-Regular',
                fontSize: 10
            }}>
                Không được nhập bến
            </Text>
        </View>
    )
}
const NoCheckOut  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#F62825',
            width: 115,
            height: 16,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                color: '#F62825',
                fontFamily: 'Inter-Regular',
                fontSize: 10
            }}>
                Không được xuất bến
            </Text>
        </View>
    )
}
const WaitCheckOut  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            height: 16,
            width: 121,
            backgroundColor: '#583CFF',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                fontFamily: 'Inter-Regular',
                fontSize: 10,
                color: '#FFF'
            }}>
                Chờ xác nhận xuất bến
            </Text>
        </View>
    )
}
const WaitCheckIn  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            height: 16,
            width: 121,
            backgroundColor: '#FF9F47',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                fontFamily: 'Inter-Regular',
                fontSize: 10,
                color: '#FFF'
            }}>
                Chờ xác nhận nhập bến
            </Text>
        </View>
    )
}
const Yes  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            width: 87,
            height: 16,
            backgroundColor: '#FFC737',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                fontFamily: 'Inter-Regular',
                fontSize: 10,
                color: '#FFF'
            }}>
                Được tiếp nhận
            </Text>
        </View>
    )
}
const No  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            width: 50,
            height: 16,
            backgroundColor: '#F62825',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                fontFamily: 'Inter-Regular',
                fontSize: 10,
                color: '#FFF'
            }}>
                Từ chối
            </Text>
        </View>
    )
}
const Waiting  = () => {
    return (
        <View style = {{
            borderRadius: 8,
            width: 125,
            height: 16,
            backgroundColor: '#0ABB87',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                fontFamily: 'Inter-Regular',
                fontSize: 10,
                color: '#FFF'
            }}>
                Chờ tiếp nhận yêu cầu
            </Text>
        </View>
    )
}

export {Waiting,No,Yes,WaitCheckOut,WaitCheckIn,NoCheckIn,NoCheckOut,In,Out,CheckOut,CheckIn}