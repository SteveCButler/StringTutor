import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import parse from 'html-react-parser';
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
        <div>
          <p className="fs-6">{user.name}</p>
          <p className="fs-3">{user.instrument}</p>
          {parse(`${limitedAbout}`)}...
        </div>
      </Card.Body>
      <Card.Footer>
        <Link href={`/instructor/${user.firebaseKey}`} passHref>
          <Button className="light-button btn-sm">Learn more...</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default InstructorProfileCard;

InstructorProfileCard.propTypes = {
  user: PropTypes.shape(

  ).isRequired,
};
