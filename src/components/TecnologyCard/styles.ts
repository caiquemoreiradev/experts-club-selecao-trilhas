import styled, { css } from "styled-components";

interface TecnologyTitleProps {
    color: string;
}

interface TecnologyContainerProps {
    background: string;
    isSelected: boolean;
}

export const Container = styled.div<TecnologyContainerProps>`

    display: flex;
    align-items: center;

    margin: 8px 16px 8px 32px ;
    
    ${({ isSelected, background }) => isSelected && css`
        background: linear-gradient(90deg, ${background} ,rgba(18,18,20,0));
    `}

    padding: 16px 24px;
    border-radius: 8px;

    transition: all 0.2s;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }

    div.right__content {

        border-bottom: 1px solid var(--text);
        padding-bottom: 8px;

        margin-left: 16px;

        h3 {
            font-size: 24px;

            color: var(--text);
            margin-bottom: 8px;
        }

        p {
            color: var(--title);
        }
    }
`;

export const TecnologyTitle = styled.strong<TecnologyTitleProps>`
    color: ${({ color }) => color};
`;

