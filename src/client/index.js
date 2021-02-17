//should import the main function of your application javascript, it should import your scss, and it should export your main function from your application javascript.
//But in order to import, where will you need to export itلازم اعمللهااكسبورت في المكان الاصلي اللي هي فيه

import { performAction } from './js/app';
import { removeResult } from './js/app';
import { show } from './js/burgerMenu';
import { close } from './js/burgerMenu';
import './media/logo2.png';
import './media/img15.jpg';

//font awesom
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
library.add(faCheck);
dom.watch();

import './styles/style.scss';

export {
    performAction,
    removeResult,
    show,
    close
};

alert("I EXIST !!");