import Modal from 'react-modal';

import { getTecnologyLogo } from '../../utils/getTecnologyLogo';

import { Container, SelectedTecnology } from "./styles";

interface TrailPresentationProps {
    tecnologySelected: string;
    color: string;
    tecnologyLogo: string;
    urlTecnologyPresentation: string;
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TrailPresentationModal({ tecnologySelected, color, tecnologyLogo, urlTecnologyPresentation, isOpen, onRequestClose }: TrailPresentationProps) {

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
                    <h1>Trilha <SelectedTecnology color={color}>{tecnologySelected}</SelectedTecnology></h1>
                </div>

                <iframe
                    width="100%"
                    height="280"
                    src={urlTecnologyPresentation}
                    title={`${tecnologySelected} presentation`}
                    allowFullScreen
                    />
            </Container>
        </Modal>
    )
}