import React from 'react';
// eslint-disable-next-line no-restricted-imports
import { type category } from '../../types/index';
import { Box, Button } from '@mui/material';
import { blue, orange } from '@mui/material/colors';
import { Link } from 'react-router-dom';

interface CategoryBarProps {
  categorys: category[];
  selectcategoryId: string;
  setSelectcategoryId: React.Dispatch<React.SetStateAction<string>>;
  selectEdit: string;
  selectAdd: string;
}
// 必要な機能
// category[]を受け取ってforEachで展開
// categoryが選択されている時は文字の色を変える
const CategoryBar = ({ categorys, selectcategoryId, setSelectcategoryId , selectEdit , selectAdd}: CategoryBarProps) => {

  const state = {
    selectAdd: "add",
    selectEdit: undefined
  };

  return (

    
    <Box sx={{ display: 'flex', alignContent: 'center' }}>
      {categorys.map((cat) => (
        <Button
          key={cat.id}
          component={Link}
          to="/test"
          state={{state}}
          onClick={() => {
            setSelectcategoryId(cat.id);

          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '0.5rem',
            color: selectcategoryId === cat.id ? orange[900] : blue[300],
          }}
        >
          {cat.name}
          
        </Button>
      ))}
    </Box>
  );
};

export default CategoryBar;
