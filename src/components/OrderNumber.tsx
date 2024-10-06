import { Card, Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

interface OrderNumberProps {
  id: string;
}

const OrderNumber = ({ id }: OrderNumberProps) => (
  <div>
    <Grid
      container
      sx={{
        userSelect: 'none',
        flexFlow: 'column',
        textAlign: 'center',
        fontSize: { xs: '0.8rem', sm: '1rem', md: '1.5rem' },
        width: { xs: '6rem', sm: '8rem', md: '10rem' },
        // 親要素で指定する内容
        // これを当てると右上に固定される
        // position:'fixed',
        // top:{ xs: "4rem", sm: "4.5rem", md: "4.5rem" },
        // right:10,
      }}
    >
      注文番号
      <Card
        sx={{
          backgroundColor: grey[300],
          fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
          textAlign: 'center',
        }}
      >
        {/* 仮置き */}
        {id}
      </Card>
    </Grid>
  </div>
);
export default OrderNumber;
