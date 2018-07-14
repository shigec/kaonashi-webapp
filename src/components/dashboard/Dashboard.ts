import Component from 'vue-class-component';
import {MENU} from '../../common/constant';
import store from '../../store/index';
import CompomentBase from '../ComponentBase';

@Component({
  template: require('./Dashboard.html'),
  name: 'Dashboard',
})

/**
 * Dashboardコンポーネント
 */
export default class Dashboard extends CompomentBase {

  public created(): void {
    store.commit('setSampleText', 'hoge');
  }

  public mounted(): void {
    store.commit('setSelectedMenu', MENU.DASHBOARD);
  }

  public getCount(): number {
    return store.state.common.count;
  }

  public countUp(): void {
    store.commit('countUp');
  }

  public getSampleText(): string {
    return store.state.common.sampleText;
  }

  public changeHage(): void {
    store.commit('setSampleText', 'hage');
  }

  public getWhatsNewList(): any {
    return [
      {
        date: '2018-07-13',
        kind: 'member',
        text:  'ほげ　ほげたろうが新規登録されました。',
      },
      {
        date: '2018-07-13',
        kind: 'member',
        text:  'ほげ　ほげじろうが新規登録されました。',
      },
      {
        date: '2018-07-12',
        kind: 'project',
        text:  'ID基盤PJ (SNC品川シーサイド)',
      },
      {
        date: '2018-07-12',
        kind: 'system',
        text:  'メンテナンス情報 2018-07-26 02:00〜05:00',
      },
      {
        date: '2018-07-11',
        kind: 'project',
        text:  'ID基盤開発 (SNC品川シーサイド)が追加されました。',
      },
      {
        date: '2018-07-11',
        kind: 'project',
        text:  'ビッグデータ解析 (SNC品川シーサイド)が追加されました。',
      },
      {
        date: '2018-07-11',
        kind: 'member',
        text:  'ほげ　ほげざぶろうが新規登録されました。',
      },
      {
        date: '2018-07-10',
        kind: 'member',
        text:  'ほげ　ほげしろうが削除されました。',
      },
      {
        date: '2018-07-09',
        kind: 'system',
        text:  'メンテナンス情報 2018-07-19 02:00〜05:00',
      },
      {
        date: '2018-07-09',
        kind: 'project',
        text:  'TVメタ提供サービス開発 (SNC大崎)が追加されました。',
      }
    ];
  }

}
