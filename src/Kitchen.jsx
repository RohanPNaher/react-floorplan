import Sink from "./Sink";
import Oven from "./Oven";

const Kitchen = () => {
  return ( 
    <>
      Kitchen
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