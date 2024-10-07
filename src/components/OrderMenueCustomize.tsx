import { Box, Stack } from '@mui/material';

interface OrderMenueCustomizeProps {
  selectOptionName: string;
  selectOptionPrice: number;

}

const OrderMenueCustomize = ({ selectOptionName,selectOptionPrice }: OrderMenueCustomizeProps) => {
  return (
    <div>
      <Stack direction="row" sx={{ borderBottom: '1px solid #2b2b2b' }}>
        <Box sx={{ ml: '10px' }}>{selectOptionName}</Box>
        <Box sx={{ ml: 'auto' }}>+{selectOptionPrice}</Box>
      </Stack>
    </div>
  );
};

export default OrderMenueCustomize;
