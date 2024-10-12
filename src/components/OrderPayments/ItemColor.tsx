import { theme } from '@/themes/theme';
import { options } from '@/types';
import { Chip, Grid, Grid2 } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
interface ItemColorProps {
  options: options[];
}

function ItemColor({ options }: ItemColorProps) {
  //option.nameがごとに色を変更
  return (
    <div>
      <Grid2 container spacing={1} sx={{ alignItems: 'c' }}>
        {options.map((option) => (
          <Grid item xs={6} key={uuidv4()}>
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
      </Grid2>
    </div>
  );
}

export default ItemColor;
