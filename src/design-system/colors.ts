import { darken } from 'polished';

const ACCENT = '#3B4CCA';
const DISABLED = '#F1F1F1';

export const colors = {
  accent: ACCENT,
  assentDark: darken(0.2, ACCENT),
  disabled: DISABLED,
  disabledDark: darken(0.2, DISABLED),
  white: '#ffffff',
};
