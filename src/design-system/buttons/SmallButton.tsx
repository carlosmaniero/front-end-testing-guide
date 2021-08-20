import styled from 'styled-components';
import { colors } from '../colors';
import { spacing } from '../spacing';
import { animation } from '../animation';

export const SmallButton = styled.button`
    background: ${colors.accent};
    color: ${colors.white};
    border: 0;
    min-width: 32px;
    min-height: 32px;
    box-shadow: ${spacing.defaultBoxShadow}px ${spacing.defaultBoxShadow}px 0 ${colors.assentDark};
    transition: all ${animation.fastAnimation}s;
    font-size: 1rem;
    outline: none;

    &:hover, &:focus {
        box-shadow: ${-spacing.defaultBoxShadow}px ${-spacing.defaultBoxShadow}px 0px ${colors.accent};
        background: ${colors.assentDark};
    }

    &:disabled, &:disabled:hover, &:disabled:focus {
        background: ${colors.disabled};
        color: ${colors.disabledDark};
        box-shadow: ${spacing.defaultBoxShadow}px ${spacing.defaultBoxShadow}px 0px ${colors.disabledDark};
    }
`;
