import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import logo from '../assets/StringTutors.png';
import WelcomePillButton from '../components/WelcomePillButton';
import { signIn } from '../utils/auth';
// import { useAuth } from '../utils/context/authContext';

function Home({ user }) {
  return (
    <>
      <div className="d-flex justify-content-start welcome-bg">
        <div
          className="d-flex flex-column text-white px-5 pt-3 w-100 bgText"
          style={{
            fontSize: '1rem',
            lineHeight: '2rem',
            textAlign: 'left',
            backdropFilter: 'brightness(40%)',
          }}
        >

          {Object.keys(user).length === 0 ? (
            <>
              <div>
                <Image src={logo} width="600" height="175" />
              </div>

              <h1 className="mb-3 display-5">Welcome to String Tutors</h1>
              <div style={{
                width: '35rem',
              }}
              >
                <p>At String Tutors our focus is on the education and preservation of American Folk music.  Offering instruction in guitar, mandolin, banjo, fiddle, and banjo.</p>
                <p> Check out our instructor profiles to see who might be a good fit for you, then click Sign Up to get started learning.</p>
                <div className="pt-3">
                  <WelcomePillButton />
                </div>
                <p style={{ fontSize: '12px' }}>Instructor Signup located on top of the Instructor Profiles page.</p>
                <div className="text-white d-flex pt-4">
                  <p className="pt-3 ps-4 fs-6">Already signed up?</p>
                  <Button className="fs-5 bg-transparent border-0 light-green-text fw-bold" onClick={signIn}>Sign In</Button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mt-5 mx-auto">
                <Image src={logo} width="600" height="175" />
                <div className="mt-5 text-center">
                  <p>Thank you for signing up!</p>
                  <p>Your Profile page is where everything happens.</p>
                  <Link passHref href="/profile">
                    <Button className="dark-button btn-lg">Profile</Button>
                  </Link>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
}

export default Home;

Home.propTypes = {
  user: PropTypes.shape(),
};
Home.defaultProps = {
  user: {},
};
