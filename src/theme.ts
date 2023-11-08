import { MantineColorsTuple, createTheme } from '@mantine/core';

const primaryShades: MantineColorsTuple = [
  '#fdeded',
  '#f5d6d6',
  '#efa8a8',
  '#e97877',
  '#e5514e',
  '#e33933',
  '#e32d25',
  '#ca211a',
  '#b31b16',
  '#9d1010',
  '#730c0c',
];

const secondaryShades: MantineColorsTuple = [
  '#feecec',
  '#f6d4d4',
  '#f2a4a4',
  '#ef7271',
  '#ed4a46',
  '#ec322b',
  '#ec271d',
  '#d21d13',
  '#bb160f',
  '#a40a0a',
  '#220202',
];

const accentShades: MantineColorsTuple = [
  '#ffe9e9',
  '#ffd1d1',
  '#fba0a1',
  '#f76d6d',
  '#f34141',
  '#f12625',
  '#f21616',
  '#d8070b',
  '#c10008',
  '#a90003',
];

export const theme = createTheme({
  colors: {
    primaryShades,
    secondaryShades,
    accentShades,
  },
});
