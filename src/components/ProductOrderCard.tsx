import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ItemOptions from './ItemOptions';
import { Grid } from '@mui/material';

const ProductOrderCard = () => {
  return (
    <div>
      <Box>
        <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <Typography variant="h4">ねぎま</Typography>
            <Typography variant="h4">X 4</Typography>
          </CardContent>

          <Box sx={{ m: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <ItemOptions />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <ItemOptions />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <ItemOptions />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <ItemOptions />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <ItemOptions />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <ItemOptions />
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default ProductOrderCard;
