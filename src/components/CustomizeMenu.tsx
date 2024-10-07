import { Box, Stack } from '@mui/material';

interface CustomizeMenuProps {
  itemName: string;
  itemImg: string;
}
function CustomizeMenu({ itemName, itemImg }: CustomizeMenuProps) {
  const imageDisplaySize = { width: 200, height: 200 };
  return (
    <div>
      <Stack direction="row" alignItems="center">
        {/* alignItems="center"で真ん中に合わせて並べる */}
        <Box>
          <img src={itemImg} className="yakitori" style={imageDisplaySize} />
        </Box>
        <Box sx={{ fontSize: '60px' }}>{itemName}</Box>
      </Stack>
    </div>
  );
}

export default CustomizeMenu;
