import { Outlet } from 'react-router-dom';

import Header from '@/components/header/header';
import Nav from '@/components/nav/nav';

export default function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Nav />
    </div>
  );
}
