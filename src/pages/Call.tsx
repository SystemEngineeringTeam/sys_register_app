import CallContena from "../components/Call/CallContena";
import { processOrderCollection } from "../utils/processOrderCollection";

const Call = () => {

  const process = "offer";
  const call = processOrderCollection(process);

  const calls = call.map((call) => Number(call.id));
  return(
  <div>
    
    <CallContena call={calls} />
  </div>
  );
}

export default Call;
