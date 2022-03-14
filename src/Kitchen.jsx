import Sink from "./Sink";
import Oven from "./Oven";

const Kitchen = () => {
  return ( 
    <>
    <div className="label">
      Kitchen
    </div>
    <div className='oven'>
      <Oven />
    </div>
    <div className="sink">
      <Sink />
    </div>
    </>
  );
}

export default Kitchen;