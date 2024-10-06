import { Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import ChangeButton from './ChangeButton';

interface CustmizeGrafProps {
  customize: string;
}

const CustmizeGraf = ({ customize }: CustmizeGrafProps) => {
  const [selectedChange, setSelectedChange] = useState(true);

  return (
    <div>
      <Box>
        <Stack
          direction="row"
          sx={{
            wordBreak: 'break-word',
            fontSize: { xs: '15px', sm: '20px', md: '40px' },
            mt: '40px',
            ml: '40px',
            borderBottom: '1px solid #2b2b2b',
            width: '80%',
          }}
        >
          <Box sx={{ flex: 3 }}>{customize}</Box>
          <Box sx={{ flex: 1 }}>
            <ChangeButton selectedChange={selectedChange} setSelectedChange={setSelectedChange} />
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default CustmizeGraf;
