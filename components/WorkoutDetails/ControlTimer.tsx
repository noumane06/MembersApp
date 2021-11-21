import React from "react"
import  { View } from "react-native"
import NextSvg from "../../assets/Svgs/WorkoutDetails/NextSvg";
import PauseSvg from "../../assets/Svgs/WorkoutDetails/PauseSvg";
import PrevSvg from "../../assets/Svgs/WorkoutDetails/PrevSvg";
import ReloadSvg from "../../assets/Svgs/WorkoutDetails/ReloadSvg";
import StopSvg from "../../assets/Svgs/WorkoutDetails/StopSvg";

interface IControlTimerProps {}

const ControlTimer: React.SFC<IControlTimerProps> = ({}) => {
  return (
      <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:"center"}}>
        <ReloadSvg width={19} height={19} color={"#F2F2F2"} />
        <PrevSvg width={12} height={12} color={"#F2F2F2"} />
        <View style={{width:80,height:80,backgroundColor:"#FFFFFF30",justifyContent:"center",alignItems:"center",borderRadius:50}} >
          <View style={{width:64,height:64,backgroundColor:"#7368FF",justifyContent:"center",alignItems:"center",borderRadius:50}}>
            <PauseSvg width={16} height={16} color={"#F2F2F2"} />
          </View>
        </View>
        <NextSvg  width={12} height={12} color={"#F2F2F2"} />
        <StopSvg  width={12} height={12} color={"#F2F2F2"} />
      </View>
      
  )
};

export default ControlTimer;
