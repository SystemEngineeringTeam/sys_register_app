import { orderAtom } from '@/stores/orderAtom';
import { type options, type order } from '@/types';
import { Box, Stack } from '@mui/material';
import { useAtom } from 'jotai';
import OrderMenueCustomize from './OrderMenueCustomize';
import OrderMenueName from './OrderMenueName';
import { useEffect } from 'react';

interface OrderMenueContenaProps {
  selectMenuName: string;
  selectMenuPrice: number;
  selectMenuImg: string;
  selectMenuqty: number;
  selectOptions: options[];
  selectId: string;
  selectMenuId: string;
  setNewOrderData: React.Dispatch<React.SetStateAction<order[]>>;
  selectOrder: order;
  index: number;
  newOrderData: order[];
}

const OrderMenueContena = ({
  selectMenuName,
  selectMenuPrice,
  selectMenuImg,
  selectMenuqty,
  selectOptions,
  selectId,
  selectMenuId,
  selectOrder,
  newOrderData,
}: OrderMenueContenaProps) => {
  const imageDisplaySize = { width: 200, height: 200 };
  // const [newOrder, setNewOrder] = useState<order>(selectOrder);

  const [newOrder, setNewOrder] = useAtom(orderAtom);

  useEffect(() => {
    setNewOrder(selectOrder);
  }, [selectOrder]);

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
            <img className="yakitori" src={selectMenuImg} style={imageDisplaySize} />
          </Box>
        </Stack>

        <Stack sx={{ flex: 5 }}>
          <Stack sx={{ mr: '20px' }}>
            <OrderMenueName
              newOrder={newOrder!}
              newOrderData={newOrderData}
              selectId={Number(selectId)}
              selectMenuId={selectMenuId}
              selectMenuName={selectMenuName}
              selectMenuPrice={selectMenuPrice}
              selectMenuqty={selectMenuqty}
              selectOptions={selectOptions}
              selectOrder={selectOrder}
            />
          </Stack>
          <Stack sx={{ ml: '20px', mr: '20px' }}>
            {selectOptions.map((option, index) => {
              return (
                <OrderMenueCustomize key={index} selectOptionName={option.name} selectOptionPrice={option.price} />
              );
            })}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default OrderMenueContena;
