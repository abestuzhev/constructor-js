import './styles/main.css';
import {model} from './model'
import {Site} from "./classes/Site";
import {Sidebar} from "./classes/Sidebar";

const $site = new Site('#site');

const updateHandler = newBlock => {
   model.push(newBlock);
   $site.render(model);
};

new Sidebar('#panel', updateHandler);

$site.render(model);


