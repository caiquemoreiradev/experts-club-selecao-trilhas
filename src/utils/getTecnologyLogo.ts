import ReactLogo from '../assets/react-js.svg';
import ReactNativeLogo from '../assets/react-native.svg';
import NodeLogo from '../assets/node-js.svg';
import ElixirLogo from '../assets/elixir.svg';

export function getTecnologyLogo(logo: string) {

    switch (logo) {
        case 'ReactJS':
            return ReactLogo;
        case 'ReactNative':
            return ReactNativeLogo;
        case 'NodeJS':
            return NodeLogo;
        case 'Elixir':
            return ElixirLogo;
        default:
            break;
    }
}