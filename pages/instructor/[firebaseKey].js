import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import parse from 'html-react-parser';
import { getInstructor } from '../../api/remoteData';

const InstructorFullProfile = () => {
  const [instructor, setInstructor] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getInstructor(firebaseKey).then(setInstructor);
  }, [firebaseKey]);

  return (
    <>
      <div className="w-50 mx-auto">
        <Link passHref href="/instructorProfiles">
          <Button className="light-button mt-3">Back to Instructors</Button>
        </Link>
      </div>
      <div className=" dark-green p-3 rounded-2 bg-white w-50 mt-4 mx-auto">

        <div className="d-flex gap-5 mb-3 light-green-bg round-top-left round-top-right text-white">
          { instructor.image && <Image priority className="round-top-left" src={instructor.image} width="250" height="200" /> }
          <div>
            <h1 className="mt-3">{instructor.name}</h1>
            <p className="fs-3">{instructor.instrument}</p>
            <p>Years of Experience: {instructor.yearsExperience}</p>
          </div>

        </div>
        <p className="fs-5 mb-0">About</p>
        {parse(`${instructor.about}`)}
      </div>
    </>

  );
};

export default InstructorFullProfile;
