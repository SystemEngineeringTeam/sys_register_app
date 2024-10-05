import { type money } from '@/types';
import { Box } from '@mui/material';
import React from 'react';

interface MoneyMapProps {
  registerMoney: money;
}
const MoneyMap = ({ registerMoney }: MoneyMapProps) => {
  return (
    <Box sx={{ textAlign: 'right' }}>
      <Box>
        1円×{registerMoney[1]}枚 = {registerMoney[1] * 1}円
      </Box>
      <Box>
        5円×{registerMoney[5]}枚 = {registerMoney[5] * 5}円
      </Box>
      <Box>
        10円×{registerMoney[10]}枚 = {registerMoney[10] * 10}円
      </Box>
      <Box>
        50円×{registerMoney[50]}枚 = {registerMoney[50] * 50}円
      </Box>
      <Box>
        100円×{registerMoney[100]}枚 = {registerMoney[100] * 100}円
      </Box>
      <Box>
        500円×{registerMoney[500]}枚 = {registerMoney[500] * 500}円
      </Box>
      <Box>
        1000円×{registerMoney[1000]}枚 = {registerMoney[1000] * 1000}円
      </Box>
      <Box>
        5000円×{registerMoney[5000]}枚 = {registerMoney[5000] * 5000}円
      </Box>
      <Box>
        10000円×{registerMoney[10000]}枚 = {registerMoney[10000] * 10000}円
      </Box>
    </Box>
  );
};

export default MoneyMap;
