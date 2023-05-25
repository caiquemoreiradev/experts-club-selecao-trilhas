import { useEffect, useState } from "react";


import { TecnologyCard } from "../TecnologyCard";
import { EducatorCard } from "../EducatorCard";

import { api } from "../../services/api";

import { Container } from "./styles";
import { TrailSelectedModal } from "../TrailSelectedModal";
import { getTecnologyLogo } from "../../utils/getTecnologyLogo";
import { TrailPresentationModal } from "../TrailPresentationModal";

interface TecnologyProps {
    id: number;
    title: string;
    path: string;
    color: string;
    background: string;
    logo: string;
    urlTecnologyPresentation: string;
}

interface EducatorProps {
    id: number;
    name: string;
    title: string;
    pathDescription: string;
    educatorDescription: string;
    backgroundGradient: string;
    color: string;
    educatorImg: string;
}

export function ThemesSection() {

    const [tecnologies, setTecnologies] = useState<TecnologyProps[]>([]);
    const [educators, setEducators] = useState<EducatorProps[]>([]);

    const [tecnologySelected, setTecnologySelected] = useState(0);
    const [educatorSelected, setEducatorSelected] = useState({} as EducatorProps);

    const [isTrailSelectedModalOpen, setIsTrailSelectedModalOpen] = useState(false);
    const [isTrailPresentationModalOpen, setIsTrailPresentationModalOpen] = useState(false);

    function handleToggleTrailSelectedModal() {
        setIsTrailSelectedModalOpen(!isTrailSelectedModalOpen);
    }

    function handleTooglePresentationModal() {

        setIsTrailPresentationModalOpen(!isTrailPresentationModalOpen);
    }

    function handleSelectedTecnology(id: number) {

        setTecnologySelected(id);
    }

    useEffect(() => {

        async function loadTecnologyCards() {

            const response = await api.get('/tecnologies');

            setTecnologies(response.data);
        }

        loadTecnologyCards();
    }, []);

    useEffect(() => {

        async function loadEducatorsInfo() {

            const response = await api.get('/educators');

            setEducators(response.data);
        }

        loadEducatorsInfo();
    }, []);

    useEffect(() => {

        function handleChangeEducator() {

            educators.filter(educator => educator.id === tecnologySelected && (

                setEducatorSelected(educator)
            ))
        }

        handleChangeEducator();
    }, [tecnologySelected, educators])


    return (
        <Container>

            <TrailSelectedModal
                tecnologySelected={tecnologies[tecnologySelected].title}
                color={tecnologies[tecnologySelected].color}
                tecnologyLogo={tecnologies[tecnologySelected].logo}
                isOpen={isTrailSelectedModalOpen}
                onRequestClose={handleToggleTrailSelectedModal}
            />

            <TrailPresentationModal
                tecnologySelected={tecnologies[tecnologySelected].title}
                color={tecnologies[tecnologySelected].color}
                tecnologyLogo={tecnologies[tecnologySelected].logo}
                urlTecnologyPresentation={tecnologies[tecnologySelected].urlTecnologyPresentation}
                isOpen={isTrailPresentationModalOpen}
                onRequestClose={handleTooglePresentationModal}
            />


            <div className="top__content">
                <h1>
                    Acesso ilimitado em {'\n'}
                    todas as trilhas
                </h1>

                <p>
                    Como assinante do plano Pro ou Ultimate, você poderá escolher a {'\n'}
                    trilha que está mais alinhada com seu objetivo e acelerar sua
                    evolução na direção certa.
                </p>
            </div>

            <section className="main">
                <div className="tecnologies__section">
                    {tecnologies.map(tecnology => (
                        <TecnologyCard
                            key={tecnology.id}
                            title={tecnology.title}
                            path={tecnology.path}
                            color={tecnology.color}
                            background={tecnology.background}
                            logo={getTecnologyLogo(tecnology.logo)}
                            isSelected={tecnologySelected === tecnology.id}

                            onClick={() => handleSelectedTecnology(tecnology.id)}
                        />
                    ))}
                </div>

                <div className="educators__section">
                    <EducatorCard
                        name={educatorSelected.name}
                        title={educatorSelected.title}
                        backgroundGradient={educatorSelected.backgroundGradient}
                        educatorDescription={educatorSelected.educatorDescription}
                        pathDescription={educatorSelected.pathDescription}
                        color={educatorSelected.color}
                        educatorImg={educatorSelected.educatorImg}

                        openTrailModal={handleToggleTrailSelectedModal}
                        openPresentationModal={handleTooglePresentationModal}
                    />
                </div>
            </section>

        </Container>
    )
}