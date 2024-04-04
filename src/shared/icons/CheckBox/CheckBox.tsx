import React from 'react';
import Svg, {Path} from "react-native-svg";

export const CheckBox: React.FC = () => {
    return (
        <Svg
            width={18}
            height={18}
            fill="none"
        >
            <Path
                fill="#fff"
                fillRule="evenodd"
                d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2ZM7 14 2 9.192l1.4-1.346L7 11.308 14.6 4 16 5.346 7 14Z"
                clipRule="evenodd"
            />
        </Svg>
    );
};
