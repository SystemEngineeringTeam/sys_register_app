import { Box } from '@mui/material';

interface OrderWaitPeopleProps {
  ordersId: number[];
}

const OrderWaitPeople = ({ ordersId }: OrderWaitPeopleProps) => {
  return (
    <div>
      <Box
        sx={{
          position: 'fixed', //下に固定する
          bottom: '0px',
          right: '0', //横全体を写すため
          left: '0', //横全体を写すため
          background: '#c8c8c8',
          textAlign: 'center',
          fontSize: '60px',
        }}
      >
        支払い待ち人数 : {ordersId.length}人
      </Box>
    </div>
  );
};

export default OrderWaitPeople;
