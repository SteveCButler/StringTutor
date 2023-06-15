import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { getLesson } from '../../api/lessonData';

const LessonPage = () => {
  const [lesson, setLesson] = useState('');
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getLesson(firebaseKey).then((data) => {
      const lessonContent = parse(`${data?.content}`);
      setLesson(lessonContent);
    });
  }, [firebaseKey]);

  return (
    <>
      <div className="w-75 mx-auto">
        <div>
          <Link passHref href="/profile">
            <Button className="light-button mt-3">Back to Lessons</Button>
          </Link>
        </div>
        <div className=" bg-white text-black mt-4  p-5 rounded-2">
          {lesson}
        </div>
      </div>
    </>
  );
};

export default LessonPage;
