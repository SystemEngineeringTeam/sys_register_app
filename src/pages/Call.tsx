import CallContena from '@/components/Call/CallContena';
import { useOrderCollection } from '@/firebase/useOrderCollection';
import { processOrderCollection } from '@/utils/processOrderCollection';
import { Box, Card, Stack } from '@mui/material';

const Call = () => {
  const orderCallsId = processOrderCollection('offer');
  const orderCallsIdToNum = orderCallsId.map((callObj) => Number(callObj.id));
  const finishedCallsId = processOrderCollection('finish');
  const finishedCallsIdToNum = finishedCallsId.map((callObj) => Number(callObj.id));
  const { data } = useOrderCollection();
  return (
    <Stack>
      <Card sx={{ fontSize: '2rem', backgroundColor: 'gray' }}>
        <Box sx={{ fontSize: '2rem', margin: '1rem' }}>未完了</Box>
        <CallContena call={orderCallsIdToNum} data={data} />
      </Card>
      <Card sx={{ backgroundColor: 'success.main' }}>
        <Box sx={{ fontSize: '2rem', margin: '1rem' }}>完了</Box>
        <CallContena call={finishedCallsIdToNum} data={data} />
      </Card>
    </Stack>
  );
};

export default Call;
