import React from 'react'
import { View , ScrollView, Text , StyleSheet } from 'react-native'
import { Divider } from 'react-native-paper';
import FloatingButton from '../components/Home/FloatingButton';
import WorkoutCard from '../components/Home/WorkoutCard';
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenStyle } from '../Styles/HomeScreenStyle';
import { createStackNavigator} from '@react-navigation/stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import WorkoutDetails from './WorkoutDetails';
import BackSvg from '../assets/Svgs/WorkoutCard/BackSvg';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Stack = createStackNavigator();

type RootStackParamList = {
    WorkoutList: undefined,
    WorkoutDetails : undefined
};


export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'WorkoutList'
>;

interface HomeProps {
    navigation : HomeScreenNavigationProp,
}

const WorkoutList:React.SFC<HomeProps> = ({navigation}) => {
    return (
        <View style={HomeScreenStyle.container}>
            <Text style={HomeScreenStyle.HeaderTitle} >My workout week</Text>
            <Divider style={{ marginTop: 20 , backgroundColor:"#3F3F3F", height :2}} />
            <ScrollView>
                <View style={{height:20}}></View>
                <WorkoutCard navigation={navigation} isWorkoutDone={true} WorkoutTitle={'20x Jump rope'} WorkoutTimer={'02:00'} key={Math.random().toString()}  />
                <WorkoutCard navigation={navigation} isWorkoutDone={true} WorkoutTitle={'20x Jump rope'} WorkoutTimer={'02:00'} key={Math.random().toString()}  />
                <WorkoutCard navigation={navigation} isWorkoutDone={false} WorkoutTitle={'20x Squat thrust split jumps'} WorkoutTimer={'02:00'} key={Math.random().toString()}  />
                <WorkoutCard navigation={navigation} isWorkoutDone={false} WorkoutTitle={'20x Squat thrust split jumps'} WorkoutTimer={'02:00'} key={Math.random().toString()}  />
                <View style={{height:90}}></View>
            </ScrollView>
        </View>
    )
}

const HomeScreen:React.SFC<HomeProps> = ({navigation}) => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    options={{headerShown: false}}
                    name="WorkoutList"
                >
                    {({navigation}) => <WorkoutList navigation={navigation}/>}
                </Stack.Screen>
                <Stack.Screen
                name="WorkoutDetails"
                options={{
                    title: '',
                    headerStyle: {
                        backgroundColor: '#131112',
                        elevation: 0,
                        shadowOpacity: 0
                    },
                    headerTransparent: true,
                    headerLeft: () =>(
                        <TouchableOpacity style={{marginLeft:10 , flexDirection:'row' , alignItems:'center'}} onPress={()=>{
                            navigation.goBack();
                        }}>
                            <BackSvg width={18} height={18} color={'#fff'} />
                            <Text style={{color:"#FFF", fontSize:18,fontFamily:'poppins-regular',marginLeft:10,marginTop:5}}>Back</Text>
                        </TouchableOpacity>
                    )
                }}
                >
                    {({navigation}) => <WorkoutDetails navigation={navigation}/>}
                </Stack.Screen>
            </Stack.Navigator>
            <FloatingButton navigation={navigation}/>
        </>
    )
}

export default HomeScreen
