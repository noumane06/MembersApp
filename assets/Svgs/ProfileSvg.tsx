import React from "react";
import { Svg , Path , Circle   } from "react-native-svg";  
import { SvgProps } from "./HomeSvg";



const ProfileSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 17 19"  width={width} height={height}>
        <Circle cx="8.5" cy="4.5" r="3" stroke={color} strokeWidth='2' />
        <Path d="M1.5 17.5L1.5 16.5C1.5 13.7386 3.73858 11.5 6.5 11.5H10.5C13.2614 11.5 15.5 13.7386 15.5 16.5V17.5H1.5Z" stroke={color} strokeWidth='2' />
      </Svg>
  )
}

export default ProfileSvg ;



