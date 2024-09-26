import { Box, Typography, Card, CardContent, Button, Grid, Stack } from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import { DoNotDisturbOnTotalSilenceOutlined } from '@mui/icons-material';
import Ordercard from '../OrderList/Ordercard';
import { useOrderUpdate } from '../../firebase/setProcess';
import { useOrderCollection } from '../../firebase/useOrderCollection';

interface ProductCallContenaProps {
  key: number;
  id: number;
}

const ProductCallContena = ({ key, id }: ProductCallContenaProps) => {
  const { data } = useOrderCollection();
  const orders = (data ?? []).filter((order) => order.id === id.toString());
  const order = orders.flatMap((data) => {
    return data.order;
  });

  const [status, setStatus] = useState(false);

  const { updateOrderStatus } = useOrderUpdate();

  const handleChange = () => {
    setStatus(!status);
    updateOrderStatus(id.toString(), 'offer');
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
            <Stack spacing={2} alignItems="center" sx={{ mr: 2 }}>
              <Typography component="h1" variant="h5" color="primary">
                {id}
              </Typography>

              <Button
                variant="contained"
                color={status ? 'success' : 'error'}
                startIcon={status ? <CheckCircleIcon /> : <DoNotDisturbOnTotalSilenceOutlined />}
                onClick={handleChange}
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
