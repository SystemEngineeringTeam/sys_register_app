import { type options, type order } from '@/types';
import CreateIcon from '@mui/icons-material/Create';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

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
  selectOrder: order;
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
  selectOrder,
}: OrderMenueNameProps) => {
  // const navigate = useNavigate()

  // const handleNavigate = () => {

  //   navigate('/customizechange',{state:{selectMenuName: selectMenuName,selectMenuqty:selectMenuqty ,selectOptions:selectOptions , selectId:selectId,selectMenuId:selectMenuId,setNewOrder:setNewOrder,updateOrderData:updateOrderData}});
  // };

  return (
    <div style={{ display: 'flex' }}>
      {/* {menuname} */}
      <Link
        state={{
          selectMenuName,
          selectMenuqty,
          selectOptions,
          selectId,
          selectMenuId,
          newOrderData,
          newOrder,
          selectOrder,
        }}
        to="/customizechange"
      >
        <Box sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
          <CreateIcon />
        </Box>
      </Link>
      <Box sx={{ width:'calc(100vh / 1.3)' , ml: '30px', wordBreak: 'break-word', fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>
        {selectMenuName}
      </Box>
      <Box
        sx={{  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}
      >
        x{selectMenuqty}
      </Box>
      <Box sx={{ ml:'40px' , fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' } }}>{selectMenuPrice}</Box>
    </div>
  );
};

export default OrderMenueName;
