import { ReactElement } from 'react';
import { useOrderCollection } from '../firebase/useOrderCollection';
import { processOrderCollection } from '../utils/processOrderCollection';
import NumberButtonBox from '../components/NumberButtonBox';
import OrderWaitPeople from '../components/OrderWaitPeople';
import DisplayNumber from '../components/DisplayNumber/ DisplayNumber';
import DisplayNumberBox from '../components/DisplayNumber/DisplayNumberBox';
import { Box, Divider } from '@mui/material';

export default function Delivery() {
  // const { data } = useOrderCollection();
  // const { money} = useMoney();

  // const order = processOrderCollection(data || []);

  const cooking = [
    1, 2, 3, 5, 4, 231, 3245, 324, 332, 344, 223, 421, 324, 321, 123, 242, 234, 231, 324, 23, 4, 234, 443, 244, 232,
  ];

  const offers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // 配列を順番に表示する

  // const orders = order.map((order) => Number(order.id));
  //const orders = [Number(order)];

  return (
    <div>
      <Box sx={{ display: 'flex', alignContent:'center',justifyContent:'space-between'}}>
        <Box sx={{ width: '50%' }}>
          <Box sx={{ fontSize: 58 ,textAlign: 'center',backgroundColor: '#ffc570',  }}>お待ちの番号</Box>
          <DisplayNumberBox orders={cooking} />
          {/* <OrderWaitPeople orders={orders} /> */}
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{width: '50%' }}>
            <Box sx={{ fontSize: 58,textAlign: 'center',backgroundColor: '#ff6f00' }}>呼び出し番号</Box>
            <Box sx={{mr:'auto',ml:'auto'}}>
            <DisplayNumberBox orders={offers}  />
            </Box>
        </Box>
      </Box>
    </div>
  );
}
