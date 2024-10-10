import { Box, CardMedia } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { type money } from '@/types';
import { setMoneyFnc } from '@/utils/setRegisterMoney';

interface MoneyPaidProps {
  image: string;
  paymentMoney: money;
  setPaymentMoney: React.Dispatch<React.SetStateAction<money>>;
  totalAmount: number;
}
// チケット1つの値段
const tiketAmount = 100;
const TiketCount = ({ image, paymentMoney, setPaymentMoney, totalAmount }: MoneyPaidProps) => {
  return (
    <div>
      <Box
        sx={{
          userSelect: 'none',
          border: 0.5,
          width: { xs: '7rem', sm: '9rem' },
          height: { xs: '7rem', sm: '9rem' },
          opacity: paymentMoney.tiket100 === 0 ? '0.5' : '1',
        }}
      >
        {/* 0以上の値の場合、クリック時にcountを -1 */}
        <RemoveCircleIcon
          onClick={() => {
            if (paymentMoney.tiket100 > 0) {
              setMoneyFnc(paymentMoney.tiket100 - 1, 'tiket100', setPaymentMoney);
            }
          }}
        />
        {/*   -ms-user-select: none; /* IE 10+
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none; */}
        <CardMedia
          component="img"
          image={image}
          //   チケットの合計金額 が 注文の合計金額 以下になるように
          onClick={() => {
            if ((paymentMoney.tiket100 + 1) * tiketAmount <= totalAmount) {
              setMoneyFnc(paymentMoney.tiket100 + 1, 'tiket100', setPaymentMoney);
            }
          }}
          onDragStart={(e) => {
            e.preventDefault();
          }} // ドラッグを無効化
          sx={{
            display: 'flex',
            margin: 'auto',
            height: '50%',
            width: '100%',
            objectFit: 'fill',
            position: 'relative',
          }}
        />
        <Box
          sx={{
            textAlign: 'center',
            fontSize: { xs: '0.8rem', sm: '1.5rem' },
            position: 'relative',
          }}
        >
          {paymentMoney.tiket100}
        </Box>
      </Box>
    </div>
  );
};

export default TiketCount;
