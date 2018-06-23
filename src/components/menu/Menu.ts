import Component from 'vue-class-component';
import store from '../../store/index';
import CompomentBase from '../ComponentBase';

@Component({
  template: require('./Menu.html'),
  name: 'Menu',
})

/**
 * Menuコンポーネント
 */
export default class Menu extends CompomentBase {

}
