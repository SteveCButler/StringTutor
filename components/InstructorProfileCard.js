import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';

function InstructorProfileCard({ user }) {
  function limitWords(paragraphId, wordLimit) {
    const paragraph = `${user.about}`;
    const text = paragraph.trim(); // Get the text content and remove leading/trailing spaces
    const words = text.split(' '); // Split the text into an array of words
    const limitedWords = words.slice(0, wordLimit); // Extract the subset of words based on the limit
    const limitedText = limitedWords.join(' '); // Join the subset of words back into a string
    const briefAbout = limitedText; // Set the new text content with limited words
    return briefAbout;
  }

  // Usage: Limit the displayed words to 10
  const limitedAbout = limitWords('myParagraph', 15);

  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img className="light-green-bg p-2" variant="top" src={user.image} alt="Card image" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          <p className="fs-5">{user.instrument}</p>
          <p>{limitedAbout}...</p>
        </Card.Text>
        <Link href={`/instructor/${user.firebaseKey}`} passHref>
          <Button variant="secondary">Learn more...</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default InstructorProfileCard;

InstructorProfileCard.propTypes = {
  user: PropTypes.shape(

  ).isRequired,
};
