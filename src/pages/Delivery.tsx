import { ReactElement } from "react";
import { useOrderCollection } from "../firebase/useOrderCollection";
import { processOrderCollection } from "../utils/processOrderCollection";
import NumberButtonBox from "../components/NumberButtonBox";
import OrderWaitPeople from "../components/OrderWaitPeople";
import DisplayNumber from "../components/DisplayNumber/ DisplayNumber";
import DisplayNumberBox from "../components/DisplayNumber/DisplayNumberBox";
import { Box, Divider } from "@mui/material";

export default function Delivery() {
  // const { data } = useOrderCollection();
  // const { money} = useMoney();

    // const order = processOrderCollection(data || []);

      const orders = [
    1, 2, 3, 5, 4, 231, 3245, 324, 332, 344, 223, 421, 324, 321, 123, 242, 234, 231, 324, 23, 4, 234, 443, 244,
    232,
  ];

  // 配列を順番に表示する

    // const orders = order.map((order) => Number(order.id));
    //const orders = [Number(order)];

    return (
      <div>
        <Box sx={{display:'flex'}}>
          <Box sx={{backgroundColor:'#ffc570'}} >
            お待ち番号
            </Box>
            <Divider orientation="vertical" flexItem />
        <Box sx={{backgroundColor:'#ff6f00'}}>
          お呼び出し番号
          </Box>
        </Box>
        <DisplayNumberBox orders={orders} /> 
        <OrderWaitPeople orders={orders} />
      </div>
    );

}


