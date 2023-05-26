import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
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
        <Button variant="secondary">Learn more...</Button>
      </Card.Body>
    </Card>
  );
}

export default InstructorProfileCard;

InstructorProfileCard.propTypes = {
  user: PropTypes.shape(

  ).isRequired,
};
