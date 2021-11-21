import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ProfileCard from "../components/Profile/ProfileCard";
import { HomeScreenStyle } from "../Styles/HomeScreenStyle";
import { ProfileScreenStyle } from "../Styles/ProfileStyles";

interface IProfileScreenProps {}

const ProfileScreen: React.SFC<IProfileScreenProps> = ({}) => {
  return (
    <ScrollView style={HomeScreenStyle.container}>
      <Text style={HomeScreenStyle.HeaderTitle}>My Profil</Text>
      <View style={{ flexDirection: "column", alignItems: "center" , marginTop : 30 }}>
        <Image
          style={ProfileScreenStyle.Image}
          source={require("../assets/images/profileImg.jpg")}
        />
        <Text style={ProfileScreenStyle.ProfileTitle}>Jeniffer Winget</Text>
        <Text style={ProfileScreenStyle.Status}>Beginner</Text>
        <TouchableOpacity
          style={{
            padding: 7,
            borderRadius: 15,
            backgroundColor:"#FE7762",
            marginTop:8
          }}
        >
          <Text style={ProfileScreenStyle.EditButton}>Edit profile</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:36}}>
            <ProfileCard Type={"TotalTime"} WorkoutTitle={"Total time"} WorkoutDesc={"02:30:15"} />
            <ProfileCard Type={"Calories"} WorkoutTitle={"Burned calories"} WorkoutDesc={"7200 cal"} />
            <ProfileCard Type={"Points"} WorkoutTitle={"Points collected"} WorkoutDesc={"1200 points"} />
      </View>
      <View style={{height:90}}></View>
    </ScrollView>
  );
};

export default ProfileScreen;
