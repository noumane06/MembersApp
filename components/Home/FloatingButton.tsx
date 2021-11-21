import React from 'react'
import { View, Text , TouchableOpacity , StyleSheet } from 'react-native'
import ScanSvg from '../../assets/Svgs/ScanSvg'
import { HomeScreenNavigationProp } from '../../screens/HomeScreen'

interface IFloatingButton 
{
    navigation : HomeScreenNavigationProp,
}
const Style = StyleSheet.create({
    FloatinIcon :{
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: '#7368FF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#7368FF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        position: 'absolute',
        bottom: 20,
        right: 30,
    }
})
const FloatingButton:React.SFC<IFloatingButton> = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Camera');
              }}
              style={Style.FloatinIcon}
            >
              <ScanSvg width={40} height={40} color={'#FFFFFF'}/>
            </TouchableOpacity>
        </View>
    )
}

export default FloatingButton
