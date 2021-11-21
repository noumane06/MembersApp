import React, { useEffect, useRef, useState } from "react"
import  { View , Text , ImageBackground , StyleSheet } from "react-native";
import { HomeScreenNavigationProp } from "./HomeScreen";
import { LinearGradient } from 'expo-linear-gradient';
import ProgressBar from "../components/WorkoutDetails/ProgressBar";
import { ScrollView } from "react-native-gesture-handler";
import ControlTimer from "../components/WorkoutDetails/ControlTimer";
import moment from 'moment';
interface IWorkoutDetailsProps {
    navigation : HomeScreenNavigationProp,
}

const WorkoutDetails: React.SFC<IWorkoutDetailsProps> = ({navigation}) => {
  const countInterval = useRef<any>(null);
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    countInterval.current = setInterval(() =>{
      if (count < 120 && !isPaused) {
        setCount((old) => old + 1)
      }
    }, 1000);
    return () => {
      clearInterval(countInterval.current); //when user exits, clear this interval.
    };
    
  }, [isPaused, count]);

  return (
    <ScrollView>
       <ImageBackground
          style={styles.image}
          source={require('../assets/images/trainer.jpg')}
        >
        <LinearGradient 
        colors={['#13111200', '#131112']} 
        style={{height : '100%', width : '100%'}}>
          <View style={{marginTop:463 , justifyContent: 'center', alignItems: 'center'}}>
            <ProgressBar count={count} setIsPaused={setIsPaused} />
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text}>{moment.utc(count*1000).format("mm:ss")}</Text>
      </View>
      <View style={{marginLeft:65,marginRight:65,marginTop:18,marginBottom:18}}>
        <ControlTimer isPaused={isPaused} setIsPaused={setIsPaused} setCount={setCount} />
      </View>
      <View style={{height:60}}>
      </View>
    </ScrollView>
  )
};
const styles = StyleSheet.create({

  image: {
    width: '100%',
    height: 550,
  },
  text: {
    color :'#fff',
    fontFamily:'poppins-medium',
    fontSize:40
  }
});
export default WorkoutDetails;

