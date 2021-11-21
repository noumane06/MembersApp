import React from "react"
import  { TouchableOpacity, View } from "react-native"
import PlaySvg from "../../assets/Svgs/WorkoutCard/PlaySvg";
import NextSvg from "../../assets/Svgs/WorkoutDetails/NextSvg";
import PauseSvg from "../../assets/Svgs/WorkoutDetails/PauseSvg";
import PrevSvg from "../../assets/Svgs/WorkoutDetails/PrevSvg";
import ReloadSvg from "../../assets/Svgs/WorkoutDetails/ReloadSvg";
import StopSvg from "../../assets/Svgs/WorkoutDetails/StopSvg";

interface IControlTimerProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  isPaused: boolean;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

const ControlTimer: React.SFC<IControlTimerProps> = ({isPaused,setIsPaused,setCount}) => {

  return (
      <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:"center"}}>
        <TouchableOpacity onPress={()=>{setCount(0)}} >
          <ReloadSvg width={19} height={19} color={"#F2F2F2"} />
        </TouchableOpacity>
        <PrevSvg width={12} height={12} color={"#F2F2F2"} />
        <TouchableOpacity onPress={()=>{setIsPaused(!isPaused)}} style={{width:80,height:80,backgroundColor:"#FFFFFF30",justifyContent:"center",alignItems:"center",borderRadius:50}} >
          <View style={{width:64,height:64,backgroundColor:"#7368FF",justifyContent:"center",alignItems:"center",borderRadius:50}}>
            {!isPaused && <PauseSvg width={16} height={16} color={"#F2F2F2"} />}
            {isPaused && <PlaySvg width={16} height={16} color={"#F2F2F2"} />}
          </View>
        </TouchableOpacity>
        <NextSvg  width={12} height={12} color={"#F2F2F2"} />
        <TouchableOpacity onPress={()=>{setCount(0);setIsPaused(true)}} >
          <StopSvg  width={12} height={12} color={"#F2F2F2"} />
        </TouchableOpacity>
      </View>
      
  )
};

export default ControlTimer;
