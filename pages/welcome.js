import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import logo from '../assets/StringTutors.png';
import { signIn } from '../utils/auth';

const Welcome = () => (

  <div
    className="d-flex flex-column text-white mt-5 p-5 w-100 bgText"
    style={{
      fontSize: '1.25rem',
      lineHeight: '2rem',
      textAlign: 'left',
      textShadow: '1px 1px 1px #3c5c5e',
    }}
  >
    <div className="mx-auto">
      <Image src={logo} width="600" height="250" />

    </div>
    <div className="w-25 mx-auto mt-5 ps-5">
      <Link passHref href="/instructorSignupPage">
        <Button className="pillButtonLeft pillButton w-50" onClick={signIn}>Instructors</Button>
      </Link>
      <Link passHref href="/">
        <Button className="pillButtonRight pillButton w-50">Students</Button>
      </Link>
    </div>

  </div>

);

export default Welcome;
