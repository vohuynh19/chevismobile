import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

const BhutanIcon = ({
  size,
  ...props
}: SvgProps & {
  size: number;
}) => (
  <Svg width={size} height={size} viewBox="0 0 48 48" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M40.97 40.97c-9.372 9.373-24.568 9.373-33.94 0-9.373-9.372-9.373-24.568 0-33.94.003 0 21.567-6.373 30.94 3 9.373 9.373 3.007 30.934 3 30.94Z"
        fill="#FFDA44"
      />
      <Path
        d="M40.97 40.97c9.373-9.372 9.373-24.568 0-33.94-9.372-9.373-24.568-9.373-33.94 0l33.94 33.94Z"
        fill="#D80027"
      />
      <Path
        d="M30.274 30.276a3.647 3.647 0 0 1-3.126-.212 3.656 3.656 0 0 1-1.397-4.972l-.299-.168c3.007-.725 5.231-3.454 5.192-6.675a6.766 6.766 0 0 0-2.318-5.019l-2.191 2.245a3.645 3.645 0 0 1 1.379 2.812 3.656 3.656 0 0 1-3.608 3.697l.005.342c-2.132-2.24-5.607-2.803-8.377-1.159a6.767 6.767 0 0 0-3.187 4.518l3.04.775a3.647 3.647 0 0 1 1.745-2.6 3.656 3.656 0 0 1 5.005 1.276l.295-.175c-.875 2.966.376 6.257 3.184 7.833a6.767 6.767 0 0 0 5.506.502l-.848-3.02Zm-6.342-6.206Z"
        fill="#FF9811"
      />
      <Path
        d="m32.886 16.255-1.696 6.053-5.09-.94-3.276-6.753-8.85 3.14-.699-1.966-2.315-.285 1.745 4.917 6.09-1.558 1.731 4.878-4.21 6.213 7.145 6.095-1.354 1.587.91 2.149 3.387-3.97-4.395-4.496 3.36-3.938 7.486.54 1.705-9.236 2.052.38 1.405-1.863-5.13-.948Zm-8.888 7.908Z"
        fill="#FFEACF"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default BhutanIcon;
