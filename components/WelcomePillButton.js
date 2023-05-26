import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const WelcomePillButton = ({ handleShow }) => (
  <>
    <Link passHref href="/instructorProfiles">
      <Button className="pillButtonLeft pillButton">Instructors Profiles</Button>
    </Link>
    <Link passHref href="/">
      <Button className="pillButtonRight pillButton" onClick={handleShow}>Student Sign Up</Button>
    </Link>
  </>

);

WelcomePillButton.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

export default WelcomePillButton;
