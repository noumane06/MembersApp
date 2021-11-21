import React from "react"
import  { View , Text} from "react-native"
import CaloriesSvg from "../../assets/Svgs/ProfileCard/CaloriesSvg";
import DiamondSvg from "../../assets/Svgs/ProfileCard/DiamondSvg";
import TimerSvg from "../../assets/Svgs/ProfileCard/TimerSvg";
import { ProfileCardStyle } from "../../Styles/ProfileStyles";

interface IProfileCardProps {
    Type: 'TotalTime' | 'Calories' | 'Points',
    WorkoutTitle : string,
    WorkoutDesc : string,
}

const ProfileCard: React.SFC<IProfileCardProps> = ({Type,WorkoutTitle,WorkoutDesc}) => {
  return (
    <View style={ProfileCardStyle.Container}>
        <View  style={ProfileCardStyle.DescCont}>
            <Text  style={ProfileCardStyle.Title}>{WorkoutTitle}</Text>
            <Text  style={ProfileCardStyle.Desc}>{WorkoutDesc}</Text>
        </View>
        {Type === 'TotalTime' && <TimerSvg width={30} height={30} color={'#1787E7'} />} 
        {Type === 'Calories' && <CaloriesSvg width={30} height={30} color={'#F6CE42'} />} 
        {Type === 'Points' && <DiamondSvg width={30} height={30} color={'#26DBDC'} />} 
    </View>
  )
};

export default ProfileCard;
