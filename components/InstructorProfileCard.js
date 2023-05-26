import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';

function InstructorProfileCard({ user }) {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img className="light-green-bg p-2" variant="top" src={user.image} alt="Card image" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
          {user.instrument}
          {user.about}
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
