import { useLoaderData } from "react-router-dom"

const Github = () => {
    const data = useLoaderData();
    console.log(data)
  return (
    <div className="h-60 p-4 bg-gray-400">
        <h1 className="text-3xl"> Follower: {data.followers}</h1>
        <img className="w-40" src={data.avatar_url} alt="" />
      
    </div>
  )
}

export default Github
