import { ButtonGetPath, ButtonPresentation, Container } from "./styles";

interface EducatorProps {
    name: string;
    title: string;
    pathDescription: string;
    educatorDescription: string;
    backgroundGradient: string;
    color: string;
    educatorImg: string;
    openTrailModal: () => void;
    openPresentationModal: () => void;
}

export function EducatorCard({ 
    name, 
    title, 
    pathDescription, 
    educatorDescription, 
    backgroundGradient, 
    color, 
    educatorImg,
    openTrailModal,
    openPresentationModal
}: EducatorProps) {

    return (
        <Container backgroundGradient={backgroundGradient} color={color} >

            <div className="left__content">
                <p className="about__tecnology__description">
                   {pathDescription}
                </p>

                <div className="about__educator">
                    <h4>{name}</h4>
                    <p>{title}</p>

                    <p className="about__educator__description">
                        {educatorDescription}
                    </p>
                </div>

                <div className="buttons__container">
                    <ButtonPresentation onClick={openPresentationModal} color={color}>Assistir apresentação</ButtonPresentation>
                    <ButtonGetPath onClick={openTrailModal} color={color}>Quero essa trilha!</ButtonGetPath>
                </div>
            </div>

            <div className="right__content">
                <img src={educatorImg} alt={name} />
            </div>
        </Container>
    )
}