import FormComponent from '../components/forms/FormComponent';

const StudentSignupPage = () => {
  const instructor = false;

  return (
    <FormComponent show instructor={instructor} />
  );
};

export default StudentSignupPage;
