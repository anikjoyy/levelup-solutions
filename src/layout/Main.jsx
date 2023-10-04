import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
