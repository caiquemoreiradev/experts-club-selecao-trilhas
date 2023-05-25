import styled, { css } from "styled-components";

interface EducatorContainerProps {
    backgroundGradient: string;
    color: string;
}

interface ButtonProps {
    color: string;
}

export const Container = styled.div<EducatorContainerProps>`

    display: flex;

    width: 800px;
    border-radius: 8px;

    div.left__content {

        padding: 48px;
        height: 650px;

        ${({ backgroundGradient, color }) => css`
            background: linear-gradient(20deg, ${backgroundGradient} ,rgba(18,18,20,0));
            
            p {
                color: ${color}
            }
        `}

        p.about__tecnology__description {
            font-size: 18px;
            color: var(--text);

            margin-bottom: 48px;

            font-weight: 500;
        }

        div.about__educator {

            margin-top: 48px;

            h4 {

                font-size: 32px;
                color: var(--title);
                margin-bottom: 8px;
            }

            p.about__educator__description {
                color: var(--text);

                margin: 24px 0 32px;
            }
        }

       div.buttons__container {

            display: flex;

            margin-top: 60px;

       }
    }

    div.right__content {

        border-radius: 8px;

        img {

            border-radius: 0 8px 8px 0;

            width: 300px;
            height: 650px;

            object-fit: cover;
        }
    }
`;

export const ButtonPresentation = styled.button<ButtonProps>`

    color: var(--white);

    padding: 8px 16px;

    margin-right: 16px;

    border: 0;
    border-radius: 8px;

    ${({ color }) => css`
        border: 1px solid ${color};
    `}

    text-transform: uppercase;

    background: transparent;

    width: 100%;

    transition: all 0.2s;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

export const ButtonGetPath = styled.button<ButtonProps>`

    color: var(--white);

    padding: 8px 16px;
    border: 0;
    border-radius: 8px;

    text-transform: uppercase;

    ${({ color }) => css`
        background-color ${color};
    `}

    width: 100%;

    transition: all 0.2s;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;