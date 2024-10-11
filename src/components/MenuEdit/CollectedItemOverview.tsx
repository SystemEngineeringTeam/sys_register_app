import { Box } from '@mui/material';
import React from 'react';
import ItemOverview from './ItemOverview';
// eslint-disable-next-line no-restricted-imports
import { category, type items } from '../../types/index';
import { cateforyIdToItems } from '@/utils/CategoryIdToItem';

interface CollectedItemOverviewProps {
  allItems: items[] | undefined;
  selectCategoryId: string;
  categorys?: category[];
}

const CollectedItemOverview = ({ allItems, selectCategoryId, categorys }: CollectedItemOverviewProps) => {
  const selectItems = cateforyIdToItems(allItems, selectCategoryId);
  return (
    <Box>
      {selectItems?.map((selectItem) => (
        <Box key={selectItem.id}>
          <ItemOverview item={selectItem} allItems={allItems} categorys={categorys} />
        </Box>
      ))}
    </Box>
  );
};

export default CollectedItemOverview;