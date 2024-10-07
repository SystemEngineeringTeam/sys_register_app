import { orderAtom } from '@/stores/orderAtom';
import { options, order } from '@/types';
import CreateIcon from '@mui/icons-material/Create';
import { Box } from '@mui/material';
import { useSetAtom } from 'jotai';
import { Link, useNavigate } from 'react-router-dom';

// interface OrderMenueNameProps{
//     menuname:string;
// }

interface OrderMenueNameProps {
  selectMenuName: string;
  selectMenuPrice: number;
  selectMenuqty: number;
  selectOptions: options[];
  selectId: number;
  selectMenuId: string;
  newOrderData: order[];
  newOrder: order;
}

const OrderMenueName = ({
  selectMenuName,
  selectMenuPrice,
  selectMenuqty,
  selectOptions,
  selectId,
  selectMenuId,
  newOrderData,
  newOrder,
}: OrderMenueNameProps) => {
  // const navigate = useNavigate()

  // const handleNavigate = () => {

  //   navigate('/customizechange',{state:{selectMenuName: selectMenuName,selectMenuqty:selectMenuqty ,selectOptions:selectOptions , selectId:selectId,selectMenuId:selectMenuId,setNewOrder:setNewOrder,updateOrderData:updateOrderData}});
  // };

  return (
    <div style={{ display: 'flex' }}>
      {/* {menuname} */}
      <Link
        to="/customizechange"
        state={{
          selectMenuName: selectMenuName,
          selectMenuqty: selectMenuqty,
          selectOptions: selectOptions,
          selectId: selectId,
          selectMenuId: selectMenuId,
          newOrderData: newOrderData,
          newOrder: newOrder,
        }}
      >
        <Box sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
          <CreateIcon></CreateIcon>
        </Box>
      </Link>
      <Box flex={3} sx={{ ml: '30px', wordBreak: 'break-word', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
        {selectMenuName}
      </Box>
      <Box
        flex={1.5}
        sx={{ ml: { xs: '30px', sm: '50px', md: '520px' }, fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}
      >
        x{selectMenuqty}
      </Box>
      <Box sx={{ ml: 'auto', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>{selectMenuPrice}</Box>
    </div>
  );
};

export default OrderMenueName;
