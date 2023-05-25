import styled from "styled-components";

export const Container = styled.div`

    padding: 64px 60px;
    margin: 0 auto;

    max-width: 1400px;

    div.top__content {

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 70px;

        h1 {
            font-size: 36px;
            color: var(--title);

            margin: 32px 0 16px;

            max-width: 360px;
        }

        p {
            max-width: 420px;

            font-size: 16px;
            color: var(--text);

            margin: 32px 0 16px;

            line-height: 22px;
        }
    }

    section.main {

        display: flex;
        align-items: center;

        margin-top: 56px;

        padding: 56px 0;
    }
`;