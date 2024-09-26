import React from 'react';
// eslint-disable-next-line no-restricted-imports
import { type category } from '../../types/index';
import { Box, Button } from '@mui/material';

interface CategoryBarProps {
  categorys: category[];
}
// 必要な機能
// category[]を受け取ってforEachで展開
// categoryが選択されている時は文字の色を変える
const CategoryBar = ({ categorys }: CategoryBarProps) => {
  return (
    <Box sx={{ display: 'flex', alignContent: 'center' }}>
      {categorys.map((cat) => (
        <Button
          key={cat.id}
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '0.5rem' }}
        >
          {cat.name}
        </Button>
      ))}
    </Box>
  );
};

export default CategoryBar;
