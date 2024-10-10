import React from 'react';
import { processOrderCollection } from '@/utils/processOrderCollection';
import CookingContena from '@/components/Cooking/CookingContena';

const Cooking: React.FC = () => {
  const process = 'cooking';
  const cooking = processOrderCollection(process);

  const cookings = cooking.map((cookingElem) => Number(cookingElem.id));

  return (
    <div>
      <CookingContena cooking={cookings} />
    </div>
  );
};

export default Cooking;
