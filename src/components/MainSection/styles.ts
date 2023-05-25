import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    max-width: 1400px;

    padding: 0 120px 48px;

    border-bottom: 1px solid var(--text);

    div.left__content {

        h1 {
            font-size: 48px;
            color: var(--title);

            margin: 32px 0 16px;
        }

        p {
            font-size: 18px;
            color: var(--text);

            margin: 32px 0 16px;
        }

        div.buttons_action {

            display: flex;
            align-items: center;

            margin-top: 48px;

            button {

                border: 0;
                border-radius: 8px;

                text-transform: uppercase;

                padding: 8px 16px;
                width: 380px;
                height: 56px;

                margin-right: 24px;
                margin-top: 16px;
                
                font-weight: bold;
                
                color: var(--white);
                background-color: var(--green);

                transform: all 0.2s ease-in;

                &:hover {
                    cursor: pointer;
                    opacity: 0.8;
                }
            }
        }
    }

    div.right__content {

        margin-left: 80px;
    }
`;