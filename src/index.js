import {showHome} from './home.js';
import {showAbout} from './about.js';
import css from './styles/styles.css'

let body = document.querySelector('body');
let header = document.querySelector("header");
let home = document.querySelector("h3#home");
let about = document.querySelector("h3#about");
let content = document.querySelector("div#content");
showHome(home,content);
showAbout(about,content);

