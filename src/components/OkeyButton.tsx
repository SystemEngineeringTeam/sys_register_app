import { updateOrder } from '@/firebase/useOrder';
import { userAtom } from '@/login/AdminLogin';
import { orderAtom, orderDataAtom } from '@/stores/orderAtom';
import { type order } from '@/types';
import { updateOrderData } from '@/utils/updateSelectOrder';
import { Button } from '@mui/material';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

interface OkeyButtonProps {
  selectId: number;
}

const  OkeyButton = ({ selectId }: OkeyButtonProps) => {
  const [newOrder, setNewOrder] = useAtom(orderAtom);
  const [newOrderData, setNewOrderData] = useAtom(orderDataAtom);
  const user = useAtomValue(userAtom);
  if (!user) {
    throw new Error('User is not logged in');
  }

  console.log('newOrder2@@@@@$$:', newOrder);

  const navigate = useNavigate();

  const handleClick = () => {
    // ここでNewOrderDataを更新
    updateOrderData(newOrderData, newOrder, setNewOrderData);

    console.log('newOrderData)))))))))):', newOrderData);

    // ここでfirebaseのデータを更新
    updateOrder(selectId.toString(), newOrderData, user);
    navigate('/orderchange', { state: { orderId: selectId } });
  };

  return (
    <div>
      <Button
        disableElevation
        onClick={handleClick}
        size="large"
        sx={{
          background: '#F68B1F',
          py: '30px', // 必要に応じてパディングを調整
          width: '200px',
        }}
        variant="contained"
      >
        決定
      </Button>
    </div>
  );
};

export default OkeyButton;
