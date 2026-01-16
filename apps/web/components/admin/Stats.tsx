import React from "react";
interface Props{
    name: string,
    count: number
}
const Stats:React.FC<Props> = ({name, count}) => {
    console.log("sats card", name);
    
  return (
    <div className=" border w-full p-2">
      <h1 className="text-center text-3xl font-bold">
        {count}
      </h1>
      <h2 className="text-center text-xl">{name}</h2>
    </div>
  );
};

export default Stats;
