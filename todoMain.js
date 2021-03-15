import {todoButton,todoInput,todoList} from './todoDom.js';
import {addTodo, deleteCheck} from './todoHelper.js';

export const App = () => {
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
}


