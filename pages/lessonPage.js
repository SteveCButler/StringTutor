import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';
import { getLesson } from '../api/lessonData';

const LessonPage = () => {
  const [lesson, setLesson] = useState('');
  useEffect(() => {
    getLesson('-NW58oy1qHsJGE5hsTwV').then((data) => {
      console.warn('DATA: ', data.content);
      const lessonContent = parse(data.content);
      setLesson(lessonContent);
    });
  }, []);
  return (
    <>
      <div>lessonPage</div>
      <div className="w-50 bg-white text-black mx-auto p-5">
        {lesson}
      </div>
    </>
  );
};

export default LessonPage;
