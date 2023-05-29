import FormComponent from '../components/forms/FormComponent';

const InstructorSignupPage = () => {
  const instructor = true;

  return (
    <FormComponent show instructor={instructor} />
  );
};

export default InstructorSignupPage;
