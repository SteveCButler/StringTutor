import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
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
      <div className="w-75 bg-white text-black mt-5 mx-auto p-5">
        {lesson}
      </div>
    </>
  );
};

export default LessonPage;
