import React from 'react';
import Svg, {Path} from "react-native-svg";

export const Edit: React.FC = () => {
    return (
        <Svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.6588 0C14.4088 0 14.1488 0.1 13.9588 0.29L12.1288 2.12L15.8788 5.87L17.7088 4.04C18.0988 3.65 18.0988 3.02 17.7088 2.63L15.3688 0.29C15.1688 0.09 14.9188 0 14.6588 0ZM11.0588 6.02L11.9788 6.94L2.91878 16H1.99878V15.08L11.0588 6.02ZM-0.0012207 14.25L11.0588 3.19L14.8088 6.94L3.74878 18H-0.0012207V14.25Z"
                fill="#1554F6"
            />
        </Svg>
    );
};
