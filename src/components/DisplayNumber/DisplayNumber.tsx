import { Box, Button } from '@mui/material';

const DisplayNumber = ({ orderId }: { orderId: number }) => {
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
          {orderId}
        </Button>
      </Box>
    </div>
  );
};

export default DisplayNumber;
