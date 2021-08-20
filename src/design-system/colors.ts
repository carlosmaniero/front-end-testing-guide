import { darken, lighten } from 'polished';

const ACCENT = '#3B4CCA';
const DISABLED = '#F1F1F1';
const SECONDARY = '#FFDE00';

export const colors = {
  accent: ACCENT,
  assentDark: darken(0.2, ACCENT),
  disabled: DISABLED,
  disabledDark: darken(0.2, DISABLED),
  secondary: SECONDARY,
  secondaryLight: lighten(0.4, SECONDARY),
  white: '#ffffff',
};
