import { Box, Typography, Card, CardContent, Button, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { DoNotDisturbOnTotalSilenceOutlined } from '@mui/icons-material';
import Ordercard from './OrderList/Ordercard';
import { useOrderUpdate } from '@/firebase/setProcess';
import { useOrderCollection } from '@/firebase/useOrderCollection';

interface ProductOrderContenaProps {
  id: number;
}

const ProductOrderContena = ({ id }: ProductOrderContenaProps) => {
  const { data } = useOrderCollection();
  const orders = (data ?? []).filter((order) => order.id === id.toString());
  const order = orders.flatMap((orderData) => {
    return orderData.order;
  });
  const [status, setStatus] = useState(false);

  const { updateOrderStatus } = useOrderUpdate();

  const handleChange = () => {
    setStatus(!status);
    void updateOrderStatus(id.toString(), 'cooking');
  };

  return (
    <div>
      <Box sx={{ width: '100vw', mx: 0, p: 2 }}>
        {' '}
        {/* 画面横いっぱいに広げる */}
        <Card elevation={3} sx={{ width: '100%' }}>
          {' '}
          {/* カード全体もフル幅に設定 */}
          <CardContent
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%', // 幅は画面いっぱいに広げる
              p: { xs: 1, sm: 2, md: 3 }, // 画面サイズごとのパディング
            }}
          >
            <Stack alignItems="center" spacing={2} sx={{ mr: 2 }}>
              <Typography color="primary" component="h1" variant="h5">
                {id}
              </Typography>

              <Button
                color={status ? 'success' : 'error'}
                onClick={handleChange}
                startIcon={status ? <CheckCircleIcon /> : <DoNotDisturbOnTotalSilenceOutlined />}
                variant="contained"
              >
                {status ? '調理完了' : '未完了'}
              </Button>
            </Stack>
            <Ordercard orders={order} />
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default ProductOrderContena;
