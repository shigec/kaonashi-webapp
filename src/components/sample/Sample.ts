import Component from 'vue-class-component';
import CompomentBase from '../ComponentBase';
import store from '../../store/index';

@Component({
  template: require('./Sample.html'),
  name: 'Sample'
})
/**
 * Sampleコンポーネント
 */
export default class Sample extends CompomentBase {

  created() {
    store.commit('setSampleText', 'hoge');
  }

  updated() {
  }

  mounted() {
  }

  /**
   * 
   */
  private getSampleText(): string {
    return store.state.common.sampleText;
  }

  private changeHage(): void {
    store.commit('setSampleText', 'hage');
  }

  private getCount(): number {
    return store.state.common.count;
  }

  private countUp(): void {
    store.commit('countUp');
  }

}