import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
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
      <h1>{instructor.name}</h1>
      <p className="fs-3">{instructor.instrument}</p>
      <p className="fs-5 mb-0">About</p>
      <p className="light-green-bg text-white p-3">{instructor.about}</p>
    </div>
  );
};

export default InstructorFullProfile;
