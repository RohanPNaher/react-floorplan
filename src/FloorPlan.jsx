import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = () => {
  return ( 
    <>
      This is a floorplan!
      <div>
        <div>
          <Kitchen />
        </div>
        <div>
          <LivingRoom />
        </div>
        <div>
          <Bedroom />
        </div>
        <div>
          <Bath />
        </div>
      </div>
    </>
  );
}

export default FloorPlan;