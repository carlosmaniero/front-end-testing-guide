import styled from 'styled-components';
import { colors } from '../colors';
import { spacing } from '../spacing';
import { animation } from '../animation';

const boxShadow = spacing.defaultBoxShadow;

export const Card = styled.div`
    color: ${colors.accent};
    background: ${colors.white};
    box-shadow: ${boxShadow}px ${boxShadow}px 0 ${colors.secondary};
    transition: all ${animation.fastAnimation};
    font-size: 1.25rem;
    padding: ${spacing.defaultPadding}px;
    border: 2px solid ${colors.secondary};

    &:hover, &:focus {
        box-shadow: ${-boxShadow}px ${-boxShadow}px 0px ${colors.secondary};
        background: ${colors.secondaryLight};
    }
`;
