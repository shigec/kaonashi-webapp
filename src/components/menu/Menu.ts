import Component from 'vue-class-component';
import store from '../../store/index';
import CompomentBase from '../ComponentBase';
import {MENU} from '../../common/constant';

@Component({
  template: require('./Menu.html'),
  name: 'Menu',
})

/**
 * Menuコンポーネント
 */
export default class Menu extends CompomentBase {

  public isSelected(menuNo: number): boolean {
    const selectedMenuNo: number = store.state.common.selectedMenu;
    return menuNo === selectedMenuNo;
  }

}
