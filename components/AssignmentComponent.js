import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const AssignmentComponent = ({ assignment }) => (
  <>
    <tr>
      <td key={assignment.lessonId}>
        <Link passHref href={`/lessons/${assignment.lessonId}`}>
          <Button className="bg-transparent dark-link border-0">
            {assignment.lessonName}
          </Button>
        </Link>
      </td>
    </tr>

  </>
);

export default AssignmentComponent;

AssignmentComponent.propTypes = {
  assignment: PropTypes.shape().isRequired,
};
