import { Box, Stack } from '@mui/material';

interface CustomizeMenuProps {
  itemName: string;
  itemImg: string;
}
const CustomizeMenu = ({ itemName, itemImg }: CustomizeMenuProps) => {
  const imageDisplaySize = { width: 200, height: 200 };
  return (
    <div>
      <Stack alignItems="center" direction="row">
        {/* alignItems="center"で真ん中に合わせて並べる */}
        <Box>
          <img className="yakitori" src={itemImg} style={imageDisplaySize} />
        </Box>
        <Box sx={{ fontSize: '60px' }}>{itemName}</Box>
      </Stack>
    </div>
  );
};

export default CustomizeMenu;
