import { mockPromoPriceTag } from './mock/mock';
import { setPriceTag } from './modules/getPriceTag';
import { init } from './modules/slider';
import { countdown } from './modules/timer';
import './index.html';
import './index.scss';


countdown(4, 51, 16);
setPriceTag(mockPromoPriceTag);
init();
  
