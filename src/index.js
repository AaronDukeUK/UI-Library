import './styles/main.scss'
import Tooltip from './tooltip'
import Dropdown from './dropdown'
import Tabs from './tabs'
import Snackbar from './snackbar'

// create tooltip
const tooltip = new Tooltip (document.querySelector('.tooltip'));

tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
})

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init()

const button = document.querySelector('button');
button.addEventListener('click', () => {
    snackbar.showMessage('You Clicked Me!');
});

