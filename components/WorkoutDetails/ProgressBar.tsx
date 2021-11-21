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
    width: "65%",
    backgroundColor: "#FE7762",
    shadowColor: "#FE7762",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    // elevation: 9,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  TextContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 15,
    marginTop: 10,
    zIndex:20
  },
});

const ProgressBar = () => {

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
      <View style={styles.progressBar}></View>
      <View style={{alignSelf:"center",marginRight:10}}>
          <Text style={{fontFamily: "poppins-regular", fontSize: 24, color: "#FE7762"}} >65%</Text>
      </View>
    </View>
  );
};

export default ProgressBar;

