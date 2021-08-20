import { ReactElement } from 'react';
import styled from 'styled-components';
import './App.css';
import { Pokedex } from './components/pokedex/Pokedex';
import { spacing } from './design-system/spacing';

const AppWrapper = styled.main`
  padding: ${spacing.defaultPadding}px;
`;

const App = (): ReactElement => (
  <AppWrapper>
    <Pokedex />
  </AppWrapper>
);

export default App;
