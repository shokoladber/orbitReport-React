import satData from "./satData"

const Buttons = (props) => {
  return(
    <div>
      {props.displaySats.map((sat, id)=>{
        return (
          <button onclick={()=>props.filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button>All Orbits</button>
    </div>
  )



};

export default Buttons;