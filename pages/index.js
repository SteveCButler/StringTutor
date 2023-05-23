import Image from 'next/image';
import styles from '../styles.module.css';
import hero from '../assets/heroSmaller.jpg';
// import { useAuth } from '../utils/context/authContext';

function Home() {
  // const { user } = useAuth();

  return (
    <div>
      <div className={styles.bgWrap}>
        <Image
          className="img-fluid"
          alt="guitar player"
          src={hero}
          placeholder="blur"
          quality={80}
          sizes="90vw"
          style={{
            objectFit: 'none',
          }}
        />
      </div>
      <div
        className="d-flex flex-column text-white p-5 w-50 bgText"
        style={{
          fontSize: '1.25rem',
          lineHeight: '2rem',
          textAlign: 'left',
          textShadow: '1px 1px 1px #3c5c5e',
        }}
      >
        <h1 className="mb-3 display-4">Welcome to String Tutors</h1>
        <p>At String Tutors our focus is on the education and preservation of American Folk music.  Offering instruction in guitar, mandolin, banjo, fiddle, and banjo.</p>
        <p> Looking to learn:  Take a few moments to check out our instructor profiles to see who might be a good fit for you., then click Sign Up to get started learning.    Interested in teaching: use the Instructor Signup located on top of the Instructor Profiles page.</p>
      </div>

    </div>
  );
}

export default Home;
