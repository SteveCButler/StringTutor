import Image from 'next/image';
import Button from 'react-bootstrap/Button';
// import styles from '../styles.module.css';
// import hero from '../assets/heroSmaller.jpg';
import logo from '../assets/StringTutors.png';
import StudentSignUp from '../components/forms/StudentSignup';
import WelcomePillButton from '../components/WelcomePillButton';
import { signIn } from '../utils/auth';
// import { useAuth } from '../utils/context/authContext';

function Home() {
  // const { user } = useAuth();

  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className="d-flex flex-column text-white p-5 w-50 bgText"
          style={{
            fontSize: '1.25rem',
            lineHeight: '2rem',
            textAlign: 'left',
            textShadow: '1px 1px 1px #3c5c5e',
          }}
        >
          <div>
            <Image src={logo} width="800" height="250" />
          </div>

          <h1 className="mb-3 display-4">Welcome to String Tutors</h1>
          <p>At String Tutors our focus is on the education and preservation of American Folk music.  Offering instruction in guitar, mandolin, banjo, fiddle, and banjo.</p>
          <p> Looking to learn:  Take a few moments to check out our instructor profiles to see who might be a good fit for you., then click Sign Up to get started learning.    Interested in teaching: use the Instructor Signup located on top of the Instructor Profiles page.</p>
          <div className="pt-3">
            <WelcomePillButton />
          </div>
          <div className="text-white d-flex pt-4">
            <p className="pt-3 ps-4 fs-6">Already signed up?</p>
            <Button className="fs-5 bg-transparent border-0 dark-green fw-bold" onClick={signIn}>Sign In</Button>
          </div>
        </div>

        {/* <div className="mt-4">
          <Image
            alt="guitar player"
            src={hero}
            width="600"
            height="800"
          />
        </div> */}
      </div>
      <StudentSignUp />
    </>
  );
}

export default Home;
