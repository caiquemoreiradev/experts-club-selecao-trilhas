import styled from "styled-components";

export const Container = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 24px 48px;

    border-bottom: 1px solid var(--text);

    div.right__content {

        display: flex;
        align-items: center;

        p {
            color: var(--title);
            font-weight: bold;
        }

        img {
            height: 80px;
            width: 80px;

            border-radius: 40px;

            margin-left: 16px;
        }
    }
`;