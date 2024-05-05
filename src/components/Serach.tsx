import { useState } from "react"
import Card from "./Card"
export const Serach = () => {
    const [value,setValue] = useState("")
    const [result,setResult] = useState(null)


    const handelClick = async (query:string) =>{
        const apiKey = import.meta.env.VITE_KEY
        const number = 12
        console.log(query)
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=${number}`
        if(query){
            const reqeust = await fetch(url)
            const response = await reqeust.json()
            setResult(response.results)
        }
    }

    
  return (
    <>
    <div className=" flex justify-center mt-5 gap-4">
       <input onChange={(e) => setValue(e.target.value)} type="text" placeholder="Search about Your Favorite foods" className="focus:outline-none border border-solid w-96 h-10 rounded-md p-4 shadow-md"/> 
       <button className="bg-slate-700 text-white  h-10 w-20 rounded-md hover:bg-slate-500 text-center shadow-md"
       onClick={ () =>
        handelClick(value)
       }>
        Search
       </button>
    </div>

    {result && <div className="p-24 flex flex-wrap gap-5 justify-center">
        <Card result={result} />
        </div>}
    </>
  )
}

export default Serach
