import { theme } from '@/themes/theme';
import { options } from '@/types';
import { Chip, Grid } from '@mui/material';
import React from 'react';

interface ItemColorProps {
  options: options[];
}

function ItemColor({ options }: ItemColorProps) {
  //option.nameがごとに色を変更
  return (
    <div>
      <Grid container spacing={1} sx={{alignItems:'c'}}>
        {options.map((option) => (
          <Grid item xs={6}>
            <Chip
              size="medium"
              sx={{
                bgcolor:
                  option.name === 'チーズ'
                    ? theme.palette.categoryCheeseColor.main
                    : option.name === 'ケチャップ'
                      ? theme.palette.categoryKetchupColor.main
                      : option.name === 'マヨネーズ'
                        ? theme.palette.categoryMayonnaiseColor.main
                        : 'gray',
              }}
              component="button"
              label={option.name}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ItemColor;
