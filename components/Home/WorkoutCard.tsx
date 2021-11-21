import React from "react"
import  { View , Text , StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import DoneSvg from "../../assets/Svgs/WorkoutCard/DoneSvg"
import PlaySvg from "../../assets/Svgs/WorkoutCard/PlaySvg";
import { HomeScreenNavigationProp } from "../../screens/HomeScreen";

interface IWorkoutCardProps {
    isWorkoutDone: boolean,
    WorkoutTitle : string,
    WorkoutTimer : string,
    navigation : HomeScreenNavigationProp,
}

const WorkoutCardStyle = StyleSheet.create({
    Container : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
        padding : 16,
        borderRadius : 16,
        backgroundColor : "#252525",
        marginBottom : 20,
    },
    DescCont :{
        flex : 1,
        flexDirection : "column",
    },
    Title : {
        fontSize : 16,
        fontFamily:"poppins-medium",
        color : "#fff",
    },
    Timer : {
        fontSize : 14,
        fontFamily:"poppins-medium",
        color : "#828282",
    },
})

const WorkoutCard: React.SFC<IWorkoutCardProps> = ({isWorkoutDone,WorkoutTitle,WorkoutTimer,navigation}) => {
  return (
    <TouchableOpacity style={WorkoutCardStyle.Container} onPress={()=>{
        navigation.navigate("WorkoutDetails")
    }}>
        <View  style={WorkoutCardStyle.DescCont}>
            <Text  style={WorkoutCardStyle.Title}>{WorkoutTitle}</Text>
            <Text  style={WorkoutCardStyle.Timer}>{WorkoutTimer}</Text>
        </View>
        {isWorkoutDone && <DoneSvg width={15} height={15} color="#7368FF"/>}
        {!isWorkoutDone && <PlaySvg width={15} height={15} color="#FF6C59"/>}
    </TouchableOpacity>
  )
};

export default WorkoutCard;
