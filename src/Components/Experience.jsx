import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { LayoutGroup, motion } from "framer-motion"
import { useState } from "react"

export default function Experience() {
  function Submenu({ children }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <motion.ul
        layout
        style={{ height: isOpen ? "auto" : 40 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='bg-white h-2'>
          Hellp
        </div>
      </motion.ul>
    )
  }

  return (
    <motion.div layout transition={{ duration: 0.3 }} >
      <div className="flex wrap justify-between pl-[10%] pr-[10%] 2xl:pl-[20%] 2xl:pr-[20%] h-[10rem] lg:h-full">
      <Card sx={
        { width: 345,
          background: 'black'
        }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={require("../Logos/Raytheon-Logo.png")}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Electrical Engineer II
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, background: 'black' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={require("../Logos/Northrop.png")}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Associate Software Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>

      <LayoutGroup>
        <Submenu />
        <Submenu />
      </LayoutGroup>
    </div>
    /></motion.div>
  );
}