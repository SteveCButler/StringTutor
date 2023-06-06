/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getStudent } from '../../../api/remoteData';
import FormComponent from '../../../components/forms/FormComponent';

export default function EditInstructor() {
  const [editStudent, setEditStudent] = useState({});

  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getStudent(firebaseKey).then((response) => setEditStudent(response));
  }, []);

  return (
    <>
      <FormComponent obj={editStudent} />
    </>
  );
}
