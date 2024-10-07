import { Box, Typography, Card, CardContent, Button, Stack } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect, useState } from 'react';
import { DoNotDisturbOnTotalSilenceOutlined } from '@mui/icons-material';
import Ordercard from '@/components/OrderList/Ordercard';
import { useOrderUpdate } from '@/firebase/setProcess';
import { type orderCollection } from '@/types';

interface ProductCallContenaProps {
  id: number;
  data: orderCollection[] | undefined;
}

const ProductCallContena = ({ id, data }: ProductCallContenaProps) => {
  const orderCollections = (data ?? []).filter((orderColl) => orderColl.id === id.toString());
  const order = orderCollections.flatMap((ordersData) => {
    return ordersData.order;
  });
  const targetOrderCollection = (data ?? []).find((orderColl) => orderColl.id === id.toString());
  const [status, setStatus] = useState(false);
  useEffect(() => {
    if (targetOrderCollection !== undefined) {
      setStatus(targetOrderCollection?.offer);
    }
  }, []);
  // if (targetOrderCollection !== undefined) {
  //   setStatus(targetOrderCollection?.offer);
  // }
  const { updateOrderStatus } = useOrderUpdate();

  const handleChange = () => {
    setStatus(!status);
    void updateOrderStatus(id.toString(), 'offer');
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
                {status ? '提供済' : '未完了'}
              </Button>
            </Stack>
            <Ordercard orders={order} />
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default ProductCallContena;
