import RocketLogo from '../../assets/rocketseat.svg';

import { Container } from "./styles";

export function Header() {

    return (
        <Container>
            <div className="left__content">
                <img src={RocketLogo} alt="logo de foguete roxo ao lado da plavra rocketseat" />
            </div>

            <div className="right__content">
                <p>Caique Moreira</p>
                <img src="https://avatars.githubusercontent.com/u/56305107?v=4" alt="foto de perfil caique moreira" />
            </div>
        </Container>
    )
}