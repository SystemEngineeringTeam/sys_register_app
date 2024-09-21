import { Button, ThemeProvider } from '@mui/material';
import { theme } from '../../themes/theme';
import { Link } from 'react-router-dom';
import { useOrderUpdate } from '../../firebase/setProcess';

interface OkButtonProps {
  id: string;
  totalPayment: number;
  totalAmount: number;
  to: string;
}

const OkButton = ({id, totalAmount, totalPayment, to}: OkButtonProps) => {

  const { updateOrderStatus } = useOrderUpdate(); 

  const handleChange = () => {
    updateOrderStatus(id.toString(), 'accounting');
  };



  const payChange = () => {
    return totalPayment - totalAmount >= 0;
  }

  const clickhandle = () => {
    if (!payChange()) {
      alert("お金が足りません");
    } else {
      console.log('🚀 ~ OkButton ~ clickhandle ~ payChange', payChange());
    }if(to === "/order"){
      handleChange();
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Link to={payChange() ? to : "#"} state={{ id, totalAmount, totalPayment }}>
        <Button
          variant="contained"
          color="ok"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            width: { xs: '6rem', sm: '8rem', md: '10rem' },
            height: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
          }}
          onClick={clickhandle}
        >
          OK
        </Button>
      </Link>
    </ThemeProvider>
  );
};

export default OkButton;
