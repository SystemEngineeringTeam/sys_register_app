import React from 'react'
import { Box, Button } from '@mui/material';


const DisplayNumber = ({ orders }: { orders: number }) => {
    return (
        <div>
            <Box>
            <Button
          sx={{
            flexGrow: 1,
            border: '2px solid #2b2b2b',
            textAlign: 'center',
            padding: '4px',
            borderRadius: '1vh',
            width: '180px',
            fontSize: '70px',
            margin: '12px',
            color: 'black',
          }}
        >
          {orders}
        </Button>
            </Box>
        </div>
    )
}

export default DisplayNumber