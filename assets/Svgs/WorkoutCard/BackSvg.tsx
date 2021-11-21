import React from "react";
import { Svg , Path } from "react-native-svg";  
import { SvgProps } from "../HomeSvg";



const BackSvg : React.SFC<SvgProps> = ({width,height,color}) => {  

  return (
      <Svg fill="none"  viewBox="0 0 16 12"  width={width} height={height}>
        <Path fill={color} fillRule="evenodd" clipRule="evenodd" d="M8.3177 0.290932C8.70561 0.678841 8.70561 1.30777 8.3177 1.69568L2.39805 7.61533L8.3177 13.535C8.70561 13.9229 8.70561 14.5518 8.3177 14.9397C7.92979 15.3276 7.30087 15.3276 6.91296 14.9397L0.290932 8.3177C-0.0969773 7.92979 -0.0969773 7.30087 0.290932 6.91296L6.91296 0.290932C7.30087 -0.0969773 7.92979 -0.0969773 8.3177 0.290932Z" />
      </Svg>
  )
  
}

export default BackSvg ;



