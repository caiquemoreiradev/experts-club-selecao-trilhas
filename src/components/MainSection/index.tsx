import IgniteLogo from '../../assets/ignite.svg';


import { Container } from "./styles";

export function MainSection() {

    return (
        <Container>

            <div className="left__content">

                <img src={IgniteLogo} alt="logo ignite" />

                <h1>
                    Acelere sua carreira {'\n'}
                    em programação.
                </h1>

                <p>
                    Evolua através de um método eficiente, uma grade {'\n'}
                    currícular alinhada com o mercado e as atitudes que vão {'\n'}
                    te destacar como profissional.
                </p>

                <div className="buttons_action">
                    <button>Acelerar minha carreira</button>

                    <p><strong>Pré-requisito: </strong> ter uma base sólida no desenvolvimento web.</p>
                </div>
            </div>

            <div className="right__content">
                <img src="https://www.rocketseat.com.br/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FnL3Cr0ouTKO5mg6dFQ3L&w=750&q=75" alt="mulher loira de cabelos curtos programando" />
            </div>
        </Container>
    )
}