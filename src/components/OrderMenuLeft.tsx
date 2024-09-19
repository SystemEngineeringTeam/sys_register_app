import React from 'react';
import NumberButton from '../components/NumberButton';
import { Box, Grid } from '@mui/material';
import NumberButtonBox from '../components/NumberButtonBox';
import OrderWaitPeople from '../components/OrderWaitPeople';
import { orderCollectionAtom } from '../firebase/FirebaseUtils';
import { useAtom } from 'jotai';
import { processOrderCollection } from '../utils/processOrderCollection';
import { processOrderChange } from '../utils/processOrderChange';
import OrderMenueContena from './OrderMenueContena';
import Yakitori from '/yakitori_solt.png';

interface OrderMenueLeftProps {
  orders:  {
    id: string | null;
}[]
  processedoptions: {
    name: string | null;
    price: number | null;
  }[];
  menuqty: {
    qty: number | null;
  }[];
  customize: {
    name: string;
    price: number;
  }[];
}

const OrderMenuLeft = ({ orders, processedoptions, menuqty
  , customize
  }
  : OrderMenueLeftProps) => {
  // const orders = [
  //   1, 2, 3, 4, 4, 5, 4, 231, 3245, 324, 332, 344, 223, 421, 324, 321, 123, 242, 234, 231, 324, 23, 4, 234, 443, 244,
  //   232,
  // ];

  console.log('processedOptions:' + processedoptions);
  console.log('menuqty:' + menuqty);

  // const mapes = processedoptions.map((order) => {
  //   console.log("processedOptions:"+order.name)
  // })

  // const price = processedoptions.map((order) => {
  //   console.log("processedprice"+order.price)
  // })

  // const mape = menuqty.map((order) => {
  //   console.log("menqty:" + mape)
  //   return order.qty
  // })

  // const ordername = processedoptions.map((order) => {
  //   return order.name || ''
  // })

  // const orderprice = processedoptions.map((order) => {
  //   return order.price || 0
  // })

  const order = Number(orders);

  return (
    <div>
      <Box>
        <Box>
          {/* processedoptions をループして OrderMenueContena をレンダリング */}
          {/* {processedoptions.map((option, index) => (
            <OrderMenueContena
              key={index}
              ordername={option.name || ''}
              orderprice={option.price || 0}
              orderimg={option.name || ''}
              menuqty={menuqty|| 0} // menuqtyもループ内で対応
              customizename={customize.name || ''} // customizeも合わせてレンダリング
              customizeprice={customize.price || 0}
            />
          ))} */}

          {/* customize もループして別のカスタマイズ情報をレンダリング
          {customize.map((custom, index) => (
            <OrderMenueContena
              key={`custom-${index}`}
              customizename={custom.name || ''}
              customizeprice={custom.price || 0}
            />

          ))} */}

          {/* {order.map((orderIndex:number) => {
           
            const qty = menuqty[orderIndex - 1] || { qty: 0 };

            console.log('menuoption:' + menuoption);
            console.log('processedoptions:' + processedoptions);
            console.log('qty:' + qty);
            console.log('menuoption.name'+menuoption.name);
            console.log('menuoption.price'+menuoption.price);
            console.log('qty'+qty.qty);

            return (
              <OrderMenueContena
                ordername={menuoption.name || ''}
                orderprice={menuoption.price || 0}
                orderimg={menuoption.name || ''}
                menuqty={qty.qty || 0}
                customize={customize.name || ''}
              />
            );
          })} */}


            {/* <OrderMenueContena
              ordername={order.name || ''}
              orderprice={order.price || 0}
              customizename={order.name || ''}
              customizeprice={order.price || 0}
              menuqty={menuqty}
              orderimg={order.name || ''}
            /> */}


            {/* {customize.map((order) => {
              <OrderMenueContena
                customize={order.name || ''}
                />
            })}

            <OrderMenueContena menuqty={menuqty}/> */}

          {/* <OrderMenueContena
              ordername={ordername}
              orderprice={orderprice}
              orderimg={ordername}
              menuqty={mape}
          /> */}

          {/* processedoptions をループして OrderMenueContena をレンダリング */}
          {processedoptions.map((option, index) => {
            const qty = menuqty[index]?.qty || 0; // menuqtyから該当する数量を取得
            const custom = customize?.[index]; // カスタマイズ情報を取得（必要な場合）

            return (
              <OrderMenueContena
                key={index}
                ordername={option.name || ''}
                orderprice={option.price || 0}
                orderimg={option.name || ''}
                menuqty={qty} // menuqtyの値を渡す
                customizename={custom?.name || ''} // カスタマイズ名を渡す（カスタマイズがある場合）
                customizeprice={custom?.price || 0} // カスタマイズ価格を渡す（カスタマイズがある場合）
              />
            );
          })}
          
        </Box>
      </Box>
    </div>
  );
};

export default OrderMenuLeft;