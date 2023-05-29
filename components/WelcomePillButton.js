import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const WelcomePillButton = () => (
  <>
    <Link passHref href="/instructorProfiles">
      <Button
        className="pillButtonLeft pillButton"
      >Instructors Profiles
      </Button>
    </Link>
    <Link passHref href="/studentSignupPage">
      <Button
        className="pillButtonRight pillButton"
      >Student Sign Up
      </Button>
    </Link>
  </>

);

export default WelcomePillButton;
