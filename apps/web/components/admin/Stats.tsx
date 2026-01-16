import type React from "react"
interface Props {
  name: string
  count: number
}
const Stats: React.FC<Props> = ({ name, count }) => {
  return (
    <div className=" border w-full p-2">
      <h1 className="text-center text-3xl">{count}</h1>
      <h2 className="text-center text-xl text-muted-foreground">{name}</h2>
    </div>
  )
}

export default Stats
