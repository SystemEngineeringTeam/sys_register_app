import { Box, Typography, Card, CardContent, Button, Grid, Stack } from '@mui/material';
import ProductOrderCard from './ProductOrderCard';

const ProductOrderContena = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Card>
        <CardContent sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
          <Stack
            spacing={10}
            alignItems="center"
            sx={{
              mt: { xs: 2, md: 0 },
              mr: { md: 2, xs: 0 },
              mb: { xs: 2, md: 0 },
            }}
          >
            <Typography variant="h1">111</Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{
                p: { xs: 2, sm: 3, md: 5 },
                whiteSpace: 'nowrap',
                minWidth: '100px',
              }}
            >
              調理前
            </Button>
          </Stack>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <ProductOrderCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProductOrderCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProductOrderCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProductOrderCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProductOrderCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProductOrderCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProductOrderCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ProductOrderCard />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductOrderContena;
