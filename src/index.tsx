/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';

import { TodoList } from './todo-list';

render(() => <TodoList />, document.getElementById('root'));
