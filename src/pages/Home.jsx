import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodos } from "../features/todos/todoSlice";

const Home = () => {
  const todosData = useSelector((state) => state.todoSlice.todos);
const dispatch=useDispatch();

const handleDelete=(id)=>{
  dispatch(deleteTodos(id))
}
  return (
    <section className="sm:min-h-[74.1vh] h-full min-h-[77vh]">
      <div className="container mx-auto">
      <h2 className="text-4xl my-6 text-center">Todo List of Redux</h2>
        <div className="flex justify-center flex-col items-center  w-full md:w-1/2 mx-auto sm:p-0 p-4 mb-6">
     
          <table className="border w-full" >
            <thead>
              <tr className="text-center bg-green-600 text-white">
                <th className="border p-2">ID</th>
                <th className="border p-2">Author</th>
                <th className="border p-2">Title</th>
                <th className="border p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {todosData &&
                todosData.map((todo) => {
                  const {id,author,title}=todo;
                  return (
                    <tr className="text-center" key={id}>
                      <td className="border p-4">{id}</td>
                      <td className="border p-4">{author}</td>
                      <td className="border p-4">{title}</td>
                      <td>
                        <Link to='/edit-todos' state={{id,author,title}}>
                        <button className="px-3 py-2 border hover:bg-white hover:text-black mr-3 ">
                          Edit
                        </button>
                        </Link>
                        <button className="px-3 py-2 border hover:bg-white hover:text-red-400 " onClick={()=>handleDelete(id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Home;
