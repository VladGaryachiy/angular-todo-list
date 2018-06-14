import Todo from './todo';


let Todos: Todo[] = [

];

interface ObjForData {
  data: Todo[];
}

const decoration: ObjForData = {
  data : null
};


function setLocalStorage(todos: Todo[]) {
  decoration.data = todos;

  const objStr = JSON.stringify(decoration.data);
  localStorage.setItem('object', objStr);

}

function getLocalStorage() {
  const todos = JSON.parse(localStorage.getItem('object'));
  Todos = todos;
}


export {Todos, setLocalStorage, getLocalStorage};
