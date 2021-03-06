import React from "react";
import { Svg , Path } from "react-native-svg";  
import { SvgProps } from "../HomeSvg";



const DoneSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 16 12"  width={width} height={height}>
        <Path fill={color} d="M5.68493 11.2C5.44493 11.2 5.22491 11.12 5.04491 10.94L1.06493 6.96003C0.704932 6.60003 0.704932 6.04004 1.06493 5.68004C1.42493 5.32004 1.98491 5.32004 2.34491 5.68004L5.70492 9.02003L13.6849 1.06004C14.0449 0.700037 14.6049 0.700037 14.9649 1.06004C15.3249 1.42004 15.3249 1.98004 14.9649 2.34004L6.34491 10.94C6.14491 11.12 5.92493 11.2 5.68493 11.2Z"  />
      </Svg>
  )
}

export default DoneSvg ;
