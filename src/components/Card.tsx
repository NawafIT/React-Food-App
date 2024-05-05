import { Link } from "react-router-dom"


interface Prop{
  id:number,
  title:string,
  image:string
}

const Card = ({result}:{result:Prop[]}) => {
  return (
    <>
    {result.map(element=>
      <Link to={`/recipe/${element.id}`}>
      <div key={element.id} className=" bg-slate-900 border-2 flex flex-col border-cyan-900 items-center justify-center shadow-xl p-">
        <img className="object-cover" src={element.image} alt="" />
        <p className="text-center text-white  p-1">{element.title}</p>
      </div>
      </Link>
      
      
    )}
    </>
  )
}

export default Card