import { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from './context/authContext';
import Loading from '../components/Loading';
// import Signin from '../components/Signin';
import NavBar from '../components/NavBarAuth';
import NavBarPublic from '../components/NavBarPublic';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { user, userLoading } = useAuth();

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  // what the user should see if they are logged in
  if (user) {
    return (
      <>
        <NavBar handleShow={handleShow} /> {/* NavBar only visible if user is logged in and is in every view */}
        {/* <div className="container"> */}
        <Component {...pageProps} show={show} handleShow={handleShow} handleClose={handleClose} />
        {/* </div> */}
      </>
    );
  }

  return (
    <>
      <NavBarPublic handleShow={handleShow} /> {/* NavBar only visible if user is logged in and is in every view */}
      {/* <div className="container"> */}
      <Component {...pageProps} show={show} handleShow={handleShow} handleClose={handleClose} />
      {/* </div> */}
    </>
    // <Signin />;
  );
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
