import { orderDataAtom } from '@/stores/orderAtom';
import { type order } from '@/types';
import { updateOrderData } from '@/utils/updateSelectOrder';
import { Button } from '@mui/material';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

interface OkeyButtonProps {
  selectId: number;
  newOrderData: order[];
  newOrder: order;
}

const OkeyButton = ({ selectId, newOrderData, newOrder }: OkeyButtonProps) => {
  const setNewOrderData = useSetAtom(orderDataAtom);
  const navigate = useNavigate();

  const handleClick = () => {
    updateOrderData(newOrderData, newOrder, setNewOrderData);
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
