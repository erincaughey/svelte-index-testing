import 'whatwg-fetch'
import './polyfills/array-fill.js';
import App from './App.svelte';

const app = new App({
	target: document.querySelector('#charts'),
});

export default app;