import satData from "./satData"

const Buttons = (props) => {
  return(
    <div>
      const data = {satData}
      {props.displaySats.map((sat, id)=>{
        return (
          <button onclick={()=>props.filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={ (data)=>props.setSat(data) } >All Orbits</button>
    </div>
  )



};

export default Buttons;