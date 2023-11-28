import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stars from './Stars';

const Review = () => {
    return (
        <div className="w-full max-w-[1440px] lg:px-10 md:px-8 px-6 mx-auto ">
        
              <h4 className="w-max mx-auto text-center text-orange-400 font-bold text-md mb-2 before:content-[''] relative before:w-3/5 before:h-[2px] before:bg-orange-400 before:absolute before:bottom-0 before:left-[20%]">
              Testimonial
            </h4>
        <h2 className="text-4xl font-sans text-blace font-semibold text-center pb-10 ">
                What People are Saying
              </h2>
        <div className='flex flex-row gap-10 p-2'>
        <Card sx={{ maxWidth: 345 }}>
          
          <CardContent>
          <Stars staticRating={3} />
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all 
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <button size="small">Share</button>
           
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          
          <CardContent>
          <Stars staticRating={3} />
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all 
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <button size="small">Share</button>
           
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          
          <CardContent>
          <Stars staticRating={5} />
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all 
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <button size="small">Share</button>
           
          </CardActions>
        </Card>
        </div>
        
        </div>
      );
}

export default Review