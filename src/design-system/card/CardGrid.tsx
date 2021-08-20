import styled from 'styled-components';
import { spacing } from '../spacing';

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: ${spacing.defaultPadding}px;

    @media screen and (max-width: 1400px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media screen and (max-width: 980px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 720px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;
