import React from 'react';
import Svg, {Path} from "react-native-svg";

export const ArrowLeft: React.FC = () => {
    return (
        <Svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
        >
            <Path
                d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                fill="#49454F"
            />
        </Svg>
    );
};
