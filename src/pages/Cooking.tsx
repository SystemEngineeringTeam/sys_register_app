import { Divider, Stack } from '@mui/material';
import ProductOrderContena from "@/components/ProductOrderContena.tsx"

const Cooking = () => (
  <div>
    {/* Stackで縦に並べる */}
    <Stack spacing={2} alignItems="center" divider={<Divider flexItem />}>
      {/* ividerで区切り線を入れる */}
      <ProductOrderContena />
      <ProductOrderContena />
      <ProductOrderContena />
      <ProductOrderContena />
    </Stack>
  </div>
);

export default Cooking;
