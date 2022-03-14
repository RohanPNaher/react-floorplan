import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = () => {
  return ( 
    <>
      <main className='grid-container'>
        <div className="bedRoom bed1">
          <Bedroom bedNum={1} />
        </div>
        <div className="kitchen">
          <Kitchen />
        </div>
        <div className="bathRoom full">
          <Bath size={'Full'}/>
        </div>
        <div className="bedRoom bed2">
          <Bedroom bedNum={2} />
        </div>
        <div className="livingRoom">
          <LivingRoom />
        </div>
        <div className="bathRoom half">
          <Bath size={'Half'} />
        </div>
        <div className="bedRoom bed3">
          <Bedroom bedNum={3} />
        </div>
      </main>
    </>
  );
}

export default FloorPlan;