import { Box, Stack } from '@mui/material';
import OrderMenueCustomize from './OrderMenueCustomize';
import OrderMenueName from './OrderMenueName';

interface OrderMenueContenaProps {
  selectMenuName: string;
  selectMenuPrice: number;
  selectMenuImg: string;
  selectMenuqty: number;
  selectCustomizeName: string;
  selectCustomizePrice: number;
  id:number;
}

const OrderMenueContena = ({
  selectMenuName,
  selectMenuPrice,
  selectMenuImg,
  selectMenuqty,
  selectCustomizeName,
  selectCustomizePrice,
  id,
}: OrderMenueContenaProps) => {
  const imageDisplaySize = { width: 200, height: 200 };
  // const custommenus = [
  //   { menu: 'たれ', price: 30 },
  //   { menu: '塩', price: 10 },
  //   { menu: 'チーズ', price: 20 },
  //   { menu: '辛い', price: 20 },
  //   { menu: '青のり', price: 10 },
  // ];

  console.log('menuqty:' +  selectMenuName);
  console.log('customizename:' + selectCustomizeName);
  console.log('customizeprice:' + selectCustomizePrice);

  return (
    <div>
      <Stack
        direction="row"
        sx={{
          borderBottom: '1px solid #2b2b2b',
        }}
      >
        <Stack
          sx={{
            flex: 1,
            textAlign: 'center',
          }}
        >
          {/* flexは幅の割合 */}
          <Box>
            <img src={selectMenuImg} className="yakitori" style={imageDisplaySize} />
          </Box>
        </Stack>

        <Stack sx={{ flex: 5 }}>
          <Stack sx={{mr:'20px'}}>
            <OrderMenueName
              selectMenuName={selectMenuName}
              selectMenuPrice={selectMenuPrice}
              selectMenuqty={selectMenuqty}
              selectCustomizeName={selectCustomizeName}
              id={id}
            />
          </Stack>
          <Stack sx={{ml:'20px', mr:'20px'}}>
            <OrderMenueCustomize selectCustomizeName={selectCustomizeName} selectCustomizePrice={selectCustomizePrice} />
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default OrderMenueContena;