import { Button, Group, useComputedColorScheme } from '@mantine/core';

export function Showcase() {
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <>
      <Group grow mt="40">
        <Button disabled color={`primaryShades.${computedColorScheme ? '1' : '10'}`} variant="light">Software</Button>
        <Button color={`primaryShades.${computedColorScheme ? '1' : '10'}`} variant="light">Game Development</Button>
        <Button color={`primaryShades.${computedColorScheme ? '1' : '10'}`} variant="light">Engineering</Button>
      </Group>
    </>
  );
}
