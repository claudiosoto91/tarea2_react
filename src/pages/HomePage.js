import { useReducer, useRef } from "react";
import NavBar from './../components/NavBar';

const ListaTareas = () => {
    const inputRef = useRef();

    const [tasks, dispatch] = useReducer( (state = [], action) => {
        switch(action.type){
            case 'add_task': {
                return [
                    ...state,
                    { id: state.length, title: action.title }
                ]
            }
            case 'remove_task':{
                return state.filter( (task, index) => index !==action.index);
            }
            case 'all_remove':{
                return []
            }
            default: {
                return state;
            }
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputRef.current.value === "" ){

        }else {
            dispatch({
                type: 'add_task',
                title: inputRef.current.value
            })
            inputRef.current.value = "";
        }

    }


    return (
        <>
            <NavBar />
            <div className="w-auto mx-auto bg-secondary p-5">
                <h1 className="fs-1 text-center">Lista de Tareas</h1>
                <form className="w-25 mx-auto d-flex flex-column text-center " onSubmit={handleSubmit}>
                    <label className="mt-3 fs-3">Ingresar Tarea</label>
                    <input className="mt-3 rounded border-0 p-2" type="text"  name="title" ref={inputRef} />
                    <button className="btn btn-primary rounded mt-3" onClick={() => dispatch({type: 'add_task'}) }>Agregar</button>

                </form>
                <div className="row">
                    <button className="btn btn-danger col-3 mx-auto mt-5" onClick={() => {dispatch({type: 'all_remove'})}}>Borrar Todo</button>
                </div>
                <div className="container row gap-3 mt-5 justify-content-center">
                    {tasks && tasks.map((task, index) => (
                        <div className="card text-center col-3 p-4" key={index}>
                            <h2>Tarea</h2>
                            <p>{task.title}</p>
                            <button className="btn btn-danger" onClick={() => dispatch({type:'remove_task', index})}>Borrar Tarea</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}

export default ListaTareas;