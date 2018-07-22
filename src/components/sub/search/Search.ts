import Component from 'vue-class-component';
import {MENU} from '../../../common/constant';
import store from '../../../store/index';
import CompomentBase from '../../ComponentBase';

@Component({
  template: require('./Search.html'),
  name: 'Search',
})

/**
 * Searchコンポーネント
 */
export default class Search extends CompomentBase {

  public mounted(): void {
  }

}
