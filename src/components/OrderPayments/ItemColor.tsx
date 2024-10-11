import { theme } from '@/themes/theme';
import { options } from '@/types';
import { Chip } from '@mui/material';
import React from 'react';

interface ItemColorProps {
  options:options[] ;
}

function ItemColor({ options }: ItemColorProps) {

    //option.nameがごとに色を変更
  return (
    <div>
      {options.map((option) => (

        <Chip
          sx={{
            bgcolor:
                option.name === 'チーズ' ? 
                theme.palette.categoryCheeseColor.main:
                option.name === 'ケチャップ'? 
                theme.palette.categoryKetchupColor.main:
                option.name === 'マヨネーズ'?
                theme.palette.categoryMayonnaiseColor.main:
                'gray',
          }}
          component="button"
          label={option.name}
        />
      ))}
    </div>
  );
}

export default ItemColor;
