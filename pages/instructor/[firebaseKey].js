import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getInstructor } from '../../api/remoteData';

const InstructorFullProfile = () => {
  const [instructor, setInstructor] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getInstructor(firebaseKey).then(setInstructor);
  }, [firebaseKey]);

  return (
    <div className=" dark-green p-3 rounded-2 bg-white w-75 mt-4 mx-auto">
      <div className="d-flex gap-5 mb-3 light-green-bg round-top-left round-top-right text-white">
        <Image className="round-top-left" src={instructor.image} width="250" height="200" />
        <div>
          <h1 className="mt-3">{instructor.name}</h1>
          <p className="fs-3">{instructor.instrument}</p>
        </div>

      </div>
      <p className="fs-5 mb-0">About</p>
      <p className="dark-green p-3">{instructor.about}</p>
    </div>
  );
};

export default InstructorFullProfile;
