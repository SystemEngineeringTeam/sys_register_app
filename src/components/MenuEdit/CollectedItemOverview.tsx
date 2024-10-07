import { Box } from '@mui/material';
import React from 'react';
import ItemOverview from './ItemOverview';
// eslint-disable-next-line no-restricted-imports
import { type items } from '../../types/index';

interface CollectedItemOverviewProps {
  OverviewItems: items[] | null;
}

const CollectedItemOverview = ({ OverviewItems }: CollectedItemOverviewProps) => {
  return (
    <Box>
      {OverviewItems?.map((OverviewItem) => (
        <Box key={OverviewItem.id}>
          <ItemOverview item={OverviewItem} />
        </Box>
      ))}
    </Box>
  );
};

export default CollectedItemOverview;
