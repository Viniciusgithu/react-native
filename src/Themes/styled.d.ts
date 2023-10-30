import dark from './dark';

import 'styled-components/native';

declare module 'styled-components/native' {
  type ThemeType = typeof dark;

  export interface DefaultTheme extends ThemeType { }
}

/*

Tipando a forma como o Theme (no caso o dark), será usado na aplicação.

Forma de acessar o theme:

background: ${({ theme }) => theme.COLORS.BACKGROUND};

*/