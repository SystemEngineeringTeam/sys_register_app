import { Box, Button } from '@mui/material';

interface DisplayNumberProps {
  ordersId: number;
}

const DisplayNumber = ({ ordersId }: DisplayNumberProps) => {
  return (
    <div>
      <Box>
        <Button
          sx={{
            flexGrow: 1,
            border: '2px solid #2b2b2b',
            textAlign: 'center',
            padding: '3px',
            borderRadius: '1vh',
            width: '165px',
            fontSize: '60px',
            margin: '10px',
            color: 'black',
          }}
        >
          {ordersId}
        </Button>
      </Box>
    </div>
  );
};

export default DisplayNumber;
