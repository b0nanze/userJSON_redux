import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "./actions";
import {useEffect} from "react";

function App() {

  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos)
  const loading = useSelector(state => state.loading)

  useEffect(() => {
    dispatch(addTodo());
  }, [])

  return (
    <div>
      <h1 className="h1">Tasks:</h1>
      {loading ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Загрузка...</span>
          </div>
      ) : (
          todos.map((todo) => {
              return(
                  <div>
                    <ul className="list-group">
                      <li className="list-group-item">{todo.title}</li>
                    </ul>
                  </div>
              )
            })
      )}
      {/*{todos.map((todo) => {*/}
      {/*  return(*/}
      {/*      <div>*/}
      {/*        {todo.title}*/}
      {/*      </div>*/}
      {/*  )*/}
      {/*/!*})}*!/ если бы данные уже были в объекте, то надо было сделать так*/}
    </div>
  );
}

export default App;
