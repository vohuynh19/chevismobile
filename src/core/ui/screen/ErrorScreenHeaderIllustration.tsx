import * as React from 'react';
import Svg, {
  Circle,
  ClipPath,
  Defs,
  G,
  Path,
  RadialGradient,
  Rect,
  Stop,
  SvgProps,
} from 'react-native-svg';

import {useIllustrationDimensions} from '../../hooks';

const ErrorScreenHeaderIllustration = (props: SvgProps) => {
  const {width, height} = useIllustrationDimensions(328, 328);

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 375 328"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      {...props}>
      <G clipPath="url(#a)">
        <Path fill="#F0F0F5" d="M0 0h375v328H0z" />
        <Path d="M342 274h351.562L717 287v41H342v-54Z" fill="#E9E8EF" />
        <Path
          d="M383 274H191l-56-13H49.5L47 274H23l-24 13v41h384v-54Z"
          fill="#E9E8EF"
        />
        <Path d="M185 274H76.5L61 287v41h124v-54Z" fill="#FAFAFF" />
        <Path
          fill="#F3F2F8"
          d="M66 289h7v99h-7zM74 289h7v99h-7zM82 289h7v99h-7zM90 289h7v99h-7z"
        />
        <Path
          fill="#FAFAFF"
          d="M111.25 214.949H29.999V344.16h81.251zM111.25 202.4H34.168v12.548h77.082z"
        />
        <Path
          opacity={0.79}
          fill="#FAFAFF"
          d="M111.25 202.4H46.716v-8.963h64.534z"
        />
        <Path fill="#FAFAFF" d="M121 194H75v-18h46z" />
        <Path fill="#FAFAFF" d="M87.05 155h-2.688v21.511h2.689z" />
        <G opacity={0.42} fill="#E9E8EF">
          <Path d="M98.25 225h-4v125.274h4zM87.324 225h-4v125.274h4zM76.4 225h-4v125.274h4zM65.477 225h-4v125.274h4zM54.55 225h-4v125.274h4zM43.627 225h-4v125.274h4z" />
        </G>
        <G opacity={0.42} fill="#E9E8EF">
          <Path d="M98.25 207h-4v7h4zM87.324 207h-4v7h4zM76.4 207h-4v7h4zM65.477 207h-4v7h4zM54.55 207h-4v7h4zM43.627 207h-4v7h4z" />
        </G>
        <Path fill="#E9E8EF" d="M342 260h18v14h-18z" />
        <Path d="M242 186h67l33 17.5V328H242V186Z" fill="#F8F8FD" />
        <Path
          fill="#FAFAFF"
          d="M299.199 176h2.689v21.511h-2.689zM290.199 176h2.689v21.511h-2.689z"
        />
        <Path
          transform="matrix(0 -1 -1 0 242 328)"
          stroke="#F0F0F5"
          d="M0-.5h142"
        />
        <Path
          transform="matrix(0 -1 -1 0 251 328)"
          stroke="#F0F0F5"
          d="M0-.5h142"
        />
        <Path
          transform="matrix(0 -1 -1 0 260 328)"
          stroke="#F0F0F5"
          d="M0-.5h142"
        />
        <Path
          transform="matrix(0 -1 -1 0 269 328)"
          stroke="#F0F0F5"
          d="M0-.5h142"
        />
        <Path
          transform="matrix(0 -1 -1 0 278 328)"
          stroke="#F0F0F5"
          d="M0-.5h142"
        />
        <Path
          transform="matrix(0 -1 -1 0 287 328)"
          stroke="#F0F0F5"
          d="M0-.5h142"
        />
        <Path
          transform="matrix(0 -1 -1 0 296 328)"
          stroke="#F0F0F5"
          d="M0-.5h142"
        />
        <Path
          transform="matrix(0 -1 -1 0 305 328)"
          stroke="#F0F0F5"
          d="M0-.5h142"
        />
        <Path
          transform="matrix(0 -1 -1 0 314 328)"
          stroke="#F0F0F5"
          d="M0-.5h142"
        />
        <Path
          transform="matrix(0 -1 -1 0 323 328)"
          stroke="#F0F0F5"
          d="M0-.5h142"
        />
        <Path
          transform="matrix(0 -1 -1 0 332 328)"
          stroke="#F0F0F5"
          d="M0-.5h142"
        />
        <Path
          stroke="#F0F0F5"
          d="M200 210.5h142M200 230.5h142M200 250.5h142M200 270.5h142M200 289.5h142M200 309.5h142"
        />
        <Path
          d="M255.298 486.458H118.954c-13.409 0-24.386-10.97-24.386-24.386V162.385c0-13.415 10.977-24.385 24.386-24.385h136.344c13.409 0 24.386 10.97 24.386 24.385v299.687c-.007 13.409-10.977 24.386-24.386 24.386Z"
          fill="#211C4E"
        />
        <Path
          d="M270.757 164.69v292.742c0 9.93-8.068 18.056-17.921 18.056H121.922c-9.853 0-17.922-8.126-17.922-18.056V164.69c0-9.93 8.062-18.056 17.922-18.056h130.914c9.853.006 17.921 8.126 17.921 18.056Z"
          fill="#FBFAFF"
        />
        <Path
          d="M214.816 157.527h-54.715c-4.455 0-8.101-3.646-8.101-8.101v-1.271c0-4.455 3.646-8.101 8.101-8.101h54.715c4.454 0 8.1 3.646 8.1 8.101v1.271c.007 4.448-3.639 8.101-8.1 8.101ZM273.014 218.917v-25.753c0-2.096 1.875-3.812 4.166-3.812h.654c2.291 0 4.166 1.716 4.166 3.812v25.753c0 2.097-1.875 3.813-4.166 3.813h-.654c-2.288.003-4.166-1.713-4.166-3.813ZM92 218.917v-25.753c0-2.096 1.875-3.812 4.166-3.812h.654c2.291 0 4.166 1.716 4.166 3.812v25.753c0 2.097-1.875 3.813-4.166 3.813h-.654c-2.288.003-4.166-1.713-4.166-3.813ZM92 254.863V229.11c0-2.097 1.875-3.813 4.166-3.813h.654c2.291 0 4.166 1.716 4.166 3.813v25.753c0 2.097-1.875 3.813-4.166 3.813h-.654c-2.288.003-4.166-1.713-4.166-3.813Z"
          fill="#211C4E"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M271.468 182.938C287.395 181.923 300 168.684 300 152.5c0-16.845-13.655-30.5-30.5-30.5S239 135.655 239 152.5c0 .329.005.657.016.984H239V183h32.468v-.062Z"
          fill="url(#b)"
        />
        <Path
          d="m262.314 145.687 7.687 7.686 7.687-7.686M262.314 161.313l7.687-7.686 7.687 7.686"
          stroke="#fff"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle
          opacity={0.36}
          cx={44.5}
          cy={44.5}
          r={44.5}
          transform="matrix(-1 0 0 1 232 202)"
          fill="#F5BDC6"
        />
        <Path
          d="M188.097 274.242c0 11.556-9.478 21.76 0 32.155 15.575 17.082-4.524 16.078-4.522 45.72 0 6.532-28.638-17.584-16.077-4.019"
          stroke="#E5536B"
          strokeWidth={4}
          strokeLinejoin="round"
        />
        <Rect
          width={41.307}
          height={4.985}
          rx={2.493}
          transform="matrix(0 1 1 0 175.764 224)"
          fill="#E5536B"
        />
        <Rect
          width={41.307}
          height={4.985}
          rx={2.493}
          transform="matrix(0 1 1 0 195.412 224)"
          fill="#E5536B"
        />
        <Path
          d="M192.845 272.24a5.024 5.024 0 1 1-10.048 0 5.024 5.024 0 0 1 10.048 0Z"
          fill="#A51930"
        />
        <Path
          d="M170.838 244.743h33.708v11.668c0 9.308-7.546 16.854-16.854 16.854s-16.854-7.546-16.854-16.854v-11.668Z"
          fill="url(#c)"
        />
        <Rect
          width={42.203}
          height={4.985}
          rx={2.493}
          transform="matrix(1 0 0 -1 166.799 245.366)"
          fill="#C21F3A"
        />
      </G>
      <Defs>
        <RadialGradient
          id="b"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(52.481 -14.198 319.046) scale(35.3023)">
          <Stop stopColor="#F78B9C" />
          <Stop offset={1} stopColor="#E5536B" />
        </RadialGradient>
        <RadialGradient
          id="c"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-126.027 166.732 83.214) scale(27.2029 23.6635)">
          <Stop stopColor="#C11A34" />
          <Stop offset={1} stopColor="#DF314D" />
        </RadialGradient>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h375v328H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ErrorScreenHeaderIllustration;
