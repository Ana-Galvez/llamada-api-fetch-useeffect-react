import { useEffect, useState } from "react"

interface Todo{
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}
const App = () => {
  const [todo,setTodo]=useState<Todo | null> (null)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response=>response.json())
      .then((data:Todo)=>{
        console.log(data)
        setTodo(data)
      })
      .catch(error=>console.log(error))
  },[])
  return (
    <div className="container mx-auto">
      <h1>Obtención de API con fetch</h1>
      <h2>{todo?.title}</h2>
    </div>
  )
}
export default App