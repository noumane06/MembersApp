import React from "react";
import { Svg , Path } from "react-native-svg";  
import { SvgProps } from "../HomeSvg";



const ReloadSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 17 20"  width={width} height={height}>
        <Path stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M1.07179 15C3.28093 18.8263 8.17365 20.1373 12 17.9282C15.8263 15.7191 17.1373 10.8263 14.9282 7C12.7191 3.17366 7.82634 1.86266 4 4.0718L1.40192 5.5718M1.40192 5.5718L2.5 1.47372M1.40192 5.5718L5.5 6.66988"/>
      </Svg>
  )
  
}

export default ReloadSvg ;
