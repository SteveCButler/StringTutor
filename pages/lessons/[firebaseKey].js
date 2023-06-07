import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import { getLesson } from '../../api/lessonData';

const LessonPage = () => {
  const [lesson, setLesson] = useState('');
  const router = useRouter();
  const { firebaseKey } = router.query;
  console.warn(firebaseKey);

  useEffect(() => {
    getLesson(firebaseKey).then((data) => {
      console.warn('DATA: ', data);
      const lessonContent = parse(`${data?.content}`);
      setLesson(lessonContent);
    });
  }, [firebaseKey]);

  return (
    <>
      <div>lessonPage</div>
      <div className="w-75 bg-white text-black mx-auto p-5">
        {lesson}
      </div>
    </>
  );
};

export default LessonPage;
