import Modal from 'react-modal';

import { getTecnologyLogo } from '../../utils/getTecnologyLogo';

import { Container, SelectedTecnology } from "./styles";

interface TrailModalProps {
    tecnologySelected: string;
    color: string;
    tecnologyLogo: string;
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TrailSelectedModal({ tecnologySelected, color, tecnologyLogo, isOpen, onRequestClose }: TrailModalProps) {

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={'react-modal-content'}
            overlayClassName={'react-modal-overlay'}
        >
            <Container>
                <div className="top__content">
                    <img src={getTecnologyLogo(tecnologyLogo)} alt={tecnologySelected} />
                    <h1>Você escolheu a trilha de <SelectedTecnology color={color}>{tecnologySelected}</SelectedTecnology>!</h1>
                </div>

                <p>Agora é só seguir as instruções que te enviamos por e-mail e seguir conosco para o próximo nível!</p>
            </Container>
        </Modal>
    )
}