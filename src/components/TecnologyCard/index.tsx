import { Container, TecnologyTitle } from "./styles";

interface TecnologyProps {
    title: string;
    logo: any;
    path: string;
    color: string;
    background: string;
    isSelected?: boolean;
    onClick: () => void;
}

export function TecnologyCard({ title, logo, path, color, background, onClick, isSelected = false }: TecnologyProps) {

    return (
        <Container onClick={onClick} isSelected={isSelected} background={background}>
            <img src={logo} alt={title} />

            <div className="right__content">
                    <h3>Ignite  <TecnologyTitle color={color} >{title}</TecnologyTitle></h3>
                   
                <p>{path}</p>
            </div>
        </Container>
    )
}