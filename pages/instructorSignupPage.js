import FormComponent from '../components/forms/FormComponent';

const InstructorSignupPage = () => {
  const instructor = true;

  return (
    <>
      <title>Instructor Sign Up</title>
      <FormComponent show instructor={instructor} />
    </>
  );
};

export default InstructorSignupPage;
