import React, { useEffect, useState, useRef } from 'react';
import { Text, View, StyleSheet, Animated, Button } from 'react-native';
import Constants from 'expo-constants';
 
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#252525",
    justifyContent: "space-between",
    borderRadius: 16,
    height: 70,
    width: "80%",
  },
  progressBar: {
    position: "absolute",
    zIndex: -1,
    height: 70,
    flexDirection: "row",
    backgroundColor: "#FE7762",
    shadowColor: "#FE7762",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    borderRadius: 16,
  },
  TextContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 15,
    marginTop: 10,
    zIndex:20
  },
});
interface IProgressTypes {
  count: number;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProgressBar:React.SFC<IProgressTypes> = ({count ,}) => {
  return (
    <View style={styles.container}>
      <View style={styles.TextContainer}>
        <Text
          style={{ fontFamily: "poppins-regular", fontSize: 14, color: "#fff" }}
        >
          20x Squat thurst split jumps
        </Text>
        <Text 
        style={{ fontFamily: "poppins-regular", fontSize: 14, color: "#fff" }}
        >Details about it</Text>
      </View>
      <View style={[styles.progressBar,{width: `${parseInt((count / 120* 100).toString())}%`}]}></View>
      <View style={{alignSelf:"center",marginRight:10}}>
          <Text style={count < 100 ? {fontFamily: "poppins-regular", fontSize: 24, color: "#FE7762"} : {fontFamily: "poppins-regular", fontSize: 24, color: "#FFF"}} >{`${parseInt((count / 120* 100).toString())}%`}</Text>
      </View>
    </View>
  );
};

export default ProgressBar;

