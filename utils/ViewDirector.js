import { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from './context/authContext';
import Loading from '../components/Loading';
// import Signin from '../components/Signin';
import NavBarAuth from '../components/NavBarAuth';
import NavBarPublic from '../components/NavBarPublic';
import { getUserByUID } from '../api/remoteData';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => {
  const [userObj, setUserObj] = useState([]);
  const { user, userLoading } = useAuth();

  const getUser = async () => {
    const response = await getUserByUID(user.uid);
    setUserObj(response);
  };

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  // what the user should see if they are logged in
  if (user) {
    getUser();
    return (
      <>
        <NavBarAuth />
        {/* <div className="container"> */}
        <Component {...pageProps} user={user} userObj={userObj} />
        {/* </div> */}
      </>
    );
  }
  // what the user should see if they are not logged in
  return (
    <>
      <NavBarPublic />
      {/* <div className="container"> */}
      <Component {...pageProps} />
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
