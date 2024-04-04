import React from 'react';
import Svg, {Path} from "react-native-svg";

export const Add: React.FC = () => {
    return (
        <Svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 0V6H0V8H6V14H8V8H14V6H8V0H6Z"
                fill="white"
            />
        </Svg>
    );
};
