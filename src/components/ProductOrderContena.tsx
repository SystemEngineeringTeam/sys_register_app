import { Box, Typography, Card, CardContent, Button, Grid,Stack } from '@mui/material';
import ProductOrderCard from './ProductOrderCard';

// interface test_num {
//   id: number;
//   name: string;
//   price: number;
// }

// const test_num: test_num[] = [
//   {
//     id: 1,
//     name: 'テスト1',
//     price: 100,
//   },
//   {
//     id: 2,
//     name: 'テスト2',
//     price: 200,
//   },
//   {
//     id: 3,
//     name: 'テスト3',
//     price: 300,
//   }
// ];

const ProductOrderContena = () => {
  return (
    <div>
      <Box>
        <Card>
          <CardContent sx={{display:'flex'}}>

          <Stack spacing={2} alignItems="center" sx={{mr:2} }>
                <Typography component="h1">1</Typography>

                <Button variant="contained" color="primary">
                  調理前
                </Button>
          </Stack>

            <Grid container spacing={2}>

              <Grid item xs={3}>
                <ProductOrderCard />
              </Grid>
              <Grid item xs={3}>
                <ProductOrderCard />
              </Grid>
              <Grid item xs={3}>
                <ProductOrderCard />
              </Grid>
              <Grid item xs={3}>
                <ProductOrderCard />
              </Grid>

              <Grid item xs={3}>
                <ProductOrderCard />
              </Grid>
              <Grid item xs={3}>
                <ProductOrderCard />
              </Grid>
              <Grid item xs={3}>
                <ProductOrderCard />
              </Grid>
              <Grid item xs={3}>
                <ProductOrderCard />
              </Grid>

            </Grid>


          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default ProductOrderContena;
