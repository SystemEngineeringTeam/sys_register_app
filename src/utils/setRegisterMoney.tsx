import { type money } from '@/types';

export function setMoneyFnc(
  num: number,
  moneyKind: 'date' | 1 | 5 | 10 | 50 | 100 | 500 | 1000 | 5000 | 10000 | 'total',
  setRegisterMoney: React.Dispatch<React.SetStateAction<money>>,
) {
  switch (moneyKind) {
    case 'date':
      // eslint-disable-next-line no-case-declarations
      const today = new Date();
      // eslint-disable-next-line no-case-declarations
      const dateTime = today.getTime();
      setRegisterMoney((prev) => ({ ...prev, date: dateTime }));
      break;
    case 'total':
      setRegisterMoney((prev) => ({ ...prev, total: num }));
      break;
    case 1:
      setRegisterMoney((prev) => ({ ...prev, '1': num, total: prev.total - (prev[1] - num) * moneyKind }));
      break;
    case 5:
      setRegisterMoney((prev) => ({ ...prev, '5': num, total: prev.total - (prev[5] - num) * moneyKind }));
      break;
    case 10:
      setRegisterMoney((prev) => ({ ...prev, '10': num, total: prev.total - (prev[10] - num) * moneyKind }));
      break;
    case 50:
      setRegisterMoney((prev) => ({ ...prev, '50': num, total: prev.total - (prev[50] - num) * moneyKind }));
      break;
    case 100:
      setRegisterMoney((prev) => ({ ...prev, '100': num, total: prev.total - (prev[100] - num) * moneyKind }));
      break;
    case 500:
      setRegisterMoney((prev) => ({ ...prev, '500': num, total: prev.total - (prev[500] - num) * moneyKind }));
      break;
    case 1000:
      setRegisterMoney((prev) => ({ ...prev, '1000': num, total: prev.total - (prev[1000] - num) * moneyKind }));
      break;
    case 5000:
      setRegisterMoney((prev) => ({ ...prev, '5000': num, total: prev.total - (prev[5000] - num) * moneyKind }));
      break;
    case 10000:
      setRegisterMoney((prev) => ({ ...prev, '10000': num, total: prev.total - (prev[10000] - num) * moneyKind }));
      break;
    default:
  }
}
