import React from 'react';
import {TagProps} from './Tag.types';
import Svg, {Path} from "react-native-svg";

export const Tag: React.FC<TagProps> = ({width, color}) => {
    return (
        <Svg
            width={width}
            height="24"
            viewBox={`0 0 ${width} 24`}
            fill="none"
        >
            <Path
                d="M68 23V1C68 0.447715 67.5523 0 67 0H14.3487C14.1032 0 13.8663 0.090283 13.6831 0.253655L0.869251 11.6805C0.412066 12.0882 0.42557 12.8074 0.897737 13.1977L13.6903 23.7708C13.8695 23.919 14.0948 24 14.3273 24H67C67.5523 24 68 23.5523 68 23Z"
                fill={color}
            />
        </Svg>
    );
};
