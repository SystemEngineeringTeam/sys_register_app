import { type money } from '@/types';
import { setMoneyFnc } from '@/utils/setRegisterMoney';
import { Box, CardMedia, TextField } from '@mui/material';

interface RegisterChengeProps {
  image: string;
  moneyKind: 'date' | 1 | 5 | 10 | 50 | 100 | 500 | 1000 | 5000 | 10000 | 'total';
  setRegisterMoney: React.Dispatch<React.SetStateAction<money>>;
}
const RegisterChenge = ({ image, moneyKind, setRegisterMoney }: RegisterChengeProps) => {
  const handleChange = (event: { target: { value: string } }) => {
    if (Number.isNaN(Number.parseInt(event.target.value, 10))) {
      setMoneyFnc(0, moneyKind, setRegisterMoney);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setMoneyFnc(Number.parseInt(event.target.value, 10), moneyKind, setRegisterMoney);
    }
  };
  return (
    <div>
      <Box
        sx={{
          border: 1,
          width: { xs: '7rem', sm: '9rem' },
          height: { xs: '7rem', sm: '9rem' },
          // opacity: count === 0 ? '0.5' : '1',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            display: 'flex',
            margin: 'auto',
            height: '50%',
            width: '100%',
            objectFit: 'fill',
            position: 'relative',
          }}
          image={image}
        />
        <Box
          sx={{
            marginTop: '0.5rem',
          }}
        >
          <TextField label="枚数" onChange={handleChange} style={{ fontSize: '10rem' }} type="number" />
        </Box>
      </Box>
    </div>
  );
};
export default RegisterChenge;
