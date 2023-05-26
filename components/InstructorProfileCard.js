import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InstructorProfileCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Instructor Name</Card.Title>
        <Card.Text>
          Play mandolin for 15 years.
        </Card.Text>
        <Button variant="secondary">Learn more...</Button>
      </Card.Body>
    </Card>
  );
}

export default InstructorProfileCard;
