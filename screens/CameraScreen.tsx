import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import CloseSvg from '../assets/Svgs/CloseSvg';
import QrcodeSvg from '../assets/Svgs/QrcodeSvg';
import { StatusBar } from 'expo-status-bar';
import { HomeScreenNavigationProp } from './HomeScreen';

type CameraProps = {
    navigation : HomeScreenNavigationProp,
}

 const CameraScreen = ({ navigation }: CameraProps) => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const PermissionStatus = await Camera.requestCameraPermissionsAsync();
      setHasPermission(PermissionStatus.status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
        <StatusBar hidden={true} />
      <Camera style={styles.camera} type={type}>
        <View  style={{top: 24,left: 20}}>
            <TouchableOpacity onPress={()=>{
                console.log('clicked');
                navigation.navigate('Home');
            }}>
                <CloseSvg width={14} height={14} color={'#fff'}  />
            </TouchableOpacity>
        </View>
        
        <View style={styles.buttonContainer}>
            <View>
                <QrcodeSvg width={195} height={195} color={"#fff"} />
            </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
            }}>
            <Text style={styles.text}>Scan Qr code</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#7368FF',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop:18,
    paddingBottom:18,
    paddingRight:27,
    paddingLeft:27,
    borderRadius: 15,
    marginTop: 70,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontFamily:"poppins-regular",
  },
});