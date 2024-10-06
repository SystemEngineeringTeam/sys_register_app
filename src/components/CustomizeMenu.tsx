import { Box, Stack } from '@mui/material';

import { useAtom } from 'jotai';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';

interface CustomizeMenuProps {
  ordername: string;
}
const CustomizeMenu = ({ ordername }: CustomizeMenuProps) => {
  const [orderCollectionData, setOrderCollectionData] = useAtom(orderCollectionAtom);

  // const processedOptions = processOrderChange(
  //   (orderCollectionData.data || [])
  //   .flatMap((order) => order.order.flatMap((o) => o.item)),
  // );
  // console.log('🚀 ~ Order ~ order:', processedOptions);

  const imageDisplaySize = { width: 200, height: 200 };

  const image = '/yakitori.png';

  return (
    <div>
      <Stack alignItems="center" direction="row">
        {/* alignItems="center"で真ん中に合わせて並べる */}
        <Box>
          <img className="yakitori" src={image} style={imageDisplaySize} />
        </Box>
        <Box sx={{ fontSize: '60px' }}>
          {/* {processedOptions.map((order) => (
                 order.name
              ))} */}
          {ordername}
        </Box>
      </Stack>
    </div>
  );
};

export default CustomizeMenu;
