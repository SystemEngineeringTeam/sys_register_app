import { ReactElement } from 'react';
import { useOrderCollection } from '../firebase/useOrderCollection';
import { processOrderCollection } from '../utils/processOrderCollection';
import NumberButtonBox from '../components/NumberButtonBox';
import OrderWaitPeople from '../components/OrderWaitPeople';
import DisplayNumber from '../components/DisplayNumber/DisplayNumber';
import DisplayNumberBox from '../components/DisplayNumber/DisplayNumberBox';
import { Box, Divider } from '@mui/material';

export default function Delivery() {
  // const { data } = useOrderCollection();
  // const { money} = useMoney();

  // const order = processOrderCollection(data || []);

  const cooking = processOrderCollection('cooking');
  const cookings = cooking.map((cooking) => Number(cooking.id));

  const offer = processOrderCollection('offer');
  const offers = offer.map((offer) => Number(offer.id));

  // 配列を順番に表示する

  // const orders = order.map((order) => Number(order.id));
  //const orders = [Number(order)];

  return (
    <div>
      <Box sx={{ display: 'flex', alignContent:'center',justifyContent:'space-between'}}>
        <Box sx={{ width: '50%' }}>
          <Box sx={{ fontSize: 58 ,textAlign: 'center',backgroundColor: '#ffc570',  }}>お待ちの番号</Box>
          <DisplayNumberBox orders={cookings} />
          {/* <OrderWaitPeople orders={orders} /> */}
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{width: '50%' }}>
            <Box sx={{ fontSize: 58,textAlign: 'center',backgroundColor: '#ff6f00' }}>呼び出し番号</Box>
            <Box sx={{width:'auto'}}>
            <DisplayNumberBox orders={offers}  />
            </Box>
        </Box>
      </Box>
    </div>
  );
}
