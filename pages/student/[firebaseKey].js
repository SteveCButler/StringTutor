import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import Image from 'next/image';
import { getStudent } from '../../api/remoteData';

const InstructorFullProfile = () => {
  const [student, setStudent] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getStudent(firebaseKey).then(setStudent);
  }, [firebaseKey]);

  return (
    <div className=" dark-green p-3 rounded-2 bg-white w-75 mt-4 mx-auto">
      <div className="d-flex gap-5 mb-3 light-green-bg round-top-left round-top-right text-white">
        {/* <Image className="round-top-left" src={instructor.image} width="250" height="200" /> */}
        <div>
          <h1 className="mt-3 ms-3">{student.name}</h1>
          <p className="fs-3 ms-3">{student.instrument}</p>
        </div>

      </div>
      <p className="fs-5 mb-0">About</p>
      <p className="dark-green p-3">{student.about}</p>
    </div>
  );
};

export default InstructorFullProfile;
