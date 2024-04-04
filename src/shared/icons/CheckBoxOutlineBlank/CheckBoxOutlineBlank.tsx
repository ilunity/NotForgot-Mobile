import React from 'react';
import Svg, {Path} from "react-native-svg";

export const CheckBoxOutlineBlank: React.FC = () => {
    return (
        <Svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill=""
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 2V16H2V2H16ZM16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0Z"
                fill="white"
            />
        </Svg>
    );
};
