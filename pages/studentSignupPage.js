import FormComponent from '../components/forms/FormComponent';

const StudentSignupPage = () => {
  const instructor = false;

  return (
    <>
      <title>Student Sign Up</title>
      <FormComponent show instructor={instructor} />
    </>
  );
};

export default StudentSignupPage;
