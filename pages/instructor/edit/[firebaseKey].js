/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getInstructor } from '../../../api/remoteData';
import FormComponent from '../../../components/forms/FormComponent';

export default function EditInstructor() {
  const [editInstructor, setEditInstructor] = useState({});

  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getInstructor(firebaseKey).then((response) => setEditInstructor(response));
  }, []);

  return (
    <>
      <FormComponent instructor obj={editInstructor} />
    </>
  );
}
