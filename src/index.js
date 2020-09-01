import './styles/main.css';
import {model} from './model'
import {template} from "./template";

const $site = document.querySelector('#site');
model.forEach(block => {
   const generate = template[block.type];

   $site.insertAdjacentHTML('beforeend', generate(block))
});


