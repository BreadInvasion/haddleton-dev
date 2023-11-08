import { Welcome } from '../components/Welcome/Welcome';
import { Logo } from '../components/Logo/Logo';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Showcase } from '../components/Showcase/Showcase';

export function HomePage() {
  return (
    <>
      <Logo />
      <Welcome />
      <Showcase />
    </>
  );
}
