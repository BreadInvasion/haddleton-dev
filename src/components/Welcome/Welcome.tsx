import { Title, Text, Anchor, useComputedColorScheme } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <>
      <Title className={classes.title} ta="center">
        Mark{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{
            from: computedColorScheme === 'light' ? 'primaryShades.10' : 'primaryShades.1',
            to: computedColorScheme === 'light' ? 'accentShades.2' : 'accentShades.6',
          }}
        >
          Haddleton
        </Text>
      </Title>
      <Title className={classes.subtitle} ta="center">
        Project Portfolio
      </Title>
    </>
  );
}
