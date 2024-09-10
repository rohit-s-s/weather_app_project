type Display = {
    name?:string,
    temp?:number,
    desc?:string
}

function Display({name,temp,desc}:Display) {
  return (
    <>
      <h3>Today</h3>
      <h1>{name}</h1>
      <h4>Temperature : {temp}</h4>
      <h4>{desc}</h4>
    </>
  );
}

export default Display;
