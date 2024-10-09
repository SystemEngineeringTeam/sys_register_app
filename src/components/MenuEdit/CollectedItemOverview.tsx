import { Box } from '@mui/material';
import React from 'react';
import ItemOverview from './ItemOverview';
// eslint-disable-next-line no-restricted-imports
import { type items } from '../../types/index';
import { cateforyIdToItems } from '@/utils/CategoryIdToItem';

interface CollectedItemOverviewProps {
  allItems: items[] | undefined;
  selectCategoryId: string;
}

const CollectedItemOverview = ({ allItems, selectCategoryId }: CollectedItemOverviewProps) => {
  const selectItems = cateforyIdToItems(allItems, selectCategoryId);
  return (
    <Box>
      {selectItems?.map((selectItem) => (
        <Box key={selectItem.id}>
          <ItemOverview item={selectItem} />
        </Box>
      ))}
    </Box>
  );
};

export default CollectedItemOverview;
