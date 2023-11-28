import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Stars = ({ staticRating }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((index) => (
        <span key={index}>
          {index <= staticRating ? (
            <StarIcon fontSize="small" style={{ color: 'orange' }} />
          ) : (
            <StarOutlineIcon fontSize="small" style={{ color: 'orange' }} />
          )}
        </span>
      ))}
    </div>
  );
};

export default Stars;
