import { useState } from 'react';
import { Container, Grid, Paper, IconButton } from '@mui/material';
import { EventSeat, EventSeatOutlined } from '@mui/icons-material';
import EventSeatIcon from '@mui/icons-material/EventSeat';

export function Asientos () {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const renderSeats = () => {
    const totalSeats = 50;
    const seats = [];

    for (let i = 1; i <= totalSeats; i++) {
      const isSelected = selectedSeats.includes(i);

      seats.push(
        <IconButton
          key={i}
          onClick={() => handleSeatClick(i)}
          color={isSelected ? 'primary' : 'default'}
        >
          {isSelected ? <EventSeat /> : <EventSeatOutlined />}
        </IconButton>
      );
    }

    return seats;
  };

  return (
    <Container maxWidth="lg" sx={{mt: 3}}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <EventSeatIcon />
          </Grid>
          <Grid item>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)' }}>
              {renderSeats()}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
