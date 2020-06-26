import production from './production';
import development from './development';

let environment = development

let isProduction = true; // Switch to change environment

if(isProduction){
    environment = production
}

export default environment;