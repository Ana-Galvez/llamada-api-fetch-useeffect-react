import { useEffect, useState } from "react"

interface Todo{
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}
const App = () => {
  const [todo,setTodo]=useState<null | Todo> (null)
  const [error, setError] = useState<null | string>(null)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response=>{
        if (response.ok) return response.json()
        setError("Hubo un error al cargar los datos")
      })
      .then((data:Todo)=>{
        console.log(data)
        setTodo(data)
      })
      .catch(error=>console.log(error)
       )
      
  },[])

  if (error) return <p className="text-center text-danger">{error}</p>
  if (!todo) return <p className="text-center">Cargando datos....</p>

  return (
    <div className="container mx-auto">
      <h1>Obtención de API con fetch</h1>
      <h2>Título de la tarea: {todo.title}</h2>
      <h2 className={todo.completed ? 'text-success' : 'text-danger'}>Estado de la tarea: {todo.completed ? "Tarea completada" : "Tarea NO completada"}</h2>
    </div>
  )
}
export default App