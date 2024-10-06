import { processCustomizeChange } from '@/utils/processCustomizeChange';
import { processNumber } from '@/utils/processOrderChange';
import { Box } from '@mui/material';
import OrderMenueContena from './OrderMenueContena';

interface OrderMenueLeftProps {
  id: number;
}

const OrderMenuLeft = ({ id, }: OrderMenueLeftProps) => {

  // const process = 'accounting';
  // // accountのデータのid
  // const order = processOrderCollection(process);

  // orderのidを数値に変換
  // const orders = order.map((order) => Number(order.id));

  // 

  // const menu = processOrderChange((data || []).flatMap((order) => order.order.flatMap((o) => o.item)));
  // console.log('🚀 ~ menu:', menu);

  const menuqty = processNumber((data || []).flatMap((order) => order.order));
  console.log('🚀 ~ menuqty:', menuqty);

  const customize = processCustomizeChange((data || []).flatMap((order) => order.order.flatMap((o) => o.options)));

  return (
    <div>
      <Box>
        <Box>
          {orders.map(() => {
            const selectMenu = menu[id];
            const selectCustomize = customize[id];
            const selectMenuqty = menuqty[id];

            return (
              <OrderMenueContena
                selectMenuName={selectMenu.name || ''}
                selectMenuPrice={selectMenu.price || 0}
                selectMenuImg={selectMenu.name || ''}
                selectMenuqty={selectMenuqty.qty || 0} // menuqtyの値を渡す
                selectCustomizeName={selectCustomize.name || ''} // カスタマイズ名を渡す（カスタマイズがある場合）
                selectCustomizePrice={selectCustomize.price || 0} // カスタマイズ価格を渡す（カスタマイズがある場合）
                id={id}
              />
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default OrderMenuLeft;
