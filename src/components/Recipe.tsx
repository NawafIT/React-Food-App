import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Prop{
    title:string,
    image:string
    instructions:String
  }
  

const Recipe = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState<Prop>(); // Explicitly typed as RecipeDetail | null

    const apiKey = import.meta.env.VITE_KEY;

    useEffect(() => {
        const doFetch  = async () => {
            const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            setDetail(data);
        };

        doFetch();
        
    }, [id]);

   
    return (
        <>
            {detail && (
                <div className="p-5">
                    <h1 className="px-5 text-2xl">{detail.title}</h1>
                    <img className="w-80" src={detail.image} alt="" />
                    <h1 className="px-5 text-3xl">Steps:</h1>
                    <div className="p-5" dangerouslySetInnerHTML={{ __html: detail.instructions }} />
                </div>
            )}
        </>
    );
};

export default Recipe;
