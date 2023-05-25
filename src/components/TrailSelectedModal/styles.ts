import styled from "styled-components";

interface StrongProps {
    color: string;
}

export const Container = styled.div`

   div.top__content {

        display: flex;
        align-items: center;

        margin-bottom: 32px;

        h1 {
            color: var(--title);

            margin-left: 16px;
        }
    }

    p {
        color: var(--text);
    }
`;

export const SelectedTecnology = styled.strong<StrongProps>`
    color: ${({color}) => color};
`;