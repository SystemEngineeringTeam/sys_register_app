import { type money } from '@/types';

export function setMoneyFnc(
  num: number,
  moneyKind: 'date' | 1 | 5 | 10 | 50 | 100 | 500 | 1000 | 5000 | 10000 | 'tiket100' | 'total',
  setRegisterMoney: React.Dispatch<React.SetStateAction<money>>,
) {
  // NaNが入らないようにする処理
  let tmpNum = num;
  if (Number.isNaN(tmpNum)) {
    tmpNum = 0;
  }
  switch (moneyKind) {
    case 'date':
      // eslint-disable-next-line no-case-declarations
      const today = new Date();
      // eslint-disable-next-line no-case-declarations
      const dateTime = today.getTime();
      setRegisterMoney((prev) => ({ ...prev, date: dateTime }));
      break;
    case 'total':
      setRegisterMoney((prev) => ({ ...prev, total: tmpNum }));
      break;
    case 1:
      setRegisterMoney((prev) => ({ ...prev, '1': tmpNum, total: prev.total - (prev[1] - tmpNum) * moneyKind }));
      break;
    case 5:
      setRegisterMoney((prev) => ({ ...prev, '5': tmpNum, total: prev.total - (prev[5] - tmpNum) * moneyKind }));
      break;
    case 10:
      setRegisterMoney((prev) => ({ ...prev, '10': tmpNum, total: prev.total - (prev[10] - tmpNum) * moneyKind }));
      break;
    case 50:
      setRegisterMoney((prev) => ({ ...prev, '50': tmpNum, total: prev.total - (prev[50] - tmpNum) * moneyKind }));
      break;
    case 100:
      setRegisterMoney((prev) => ({ ...prev, '100': tmpNum, total: prev.total - (prev[100] - tmpNum) * moneyKind }));
      break;
    case 500:
      setRegisterMoney((prev) => ({ ...prev, '500': tmpNum, total: prev.total - (prev[500] - tmpNum) * moneyKind }));
      break;
    case 1000:
      setRegisterMoney((prev) => ({ ...prev, '1000': tmpNum, total: prev.total - (prev[1000] - tmpNum) * moneyKind }));
      break;
    case 5000:
      setRegisterMoney((prev) => ({ ...prev, '5000': tmpNum, total: prev.total - (prev[5000] - tmpNum) * moneyKind }));
      break;
    case 10000:
      setRegisterMoney((prev) => ({
        ...prev,
        '10000': tmpNum,
        total: prev.total - (prev[10000] - tmpNum) * moneyKind,
      }));
      break;
    case 'tiket100':
      setRegisterMoney((prev) => ({
        ...prev,
        tiket100: tmpNum,
        total: prev.total - (prev[moneyKind] - tmpNum) * 100,
      }));
      break;
    default:
  }
}
