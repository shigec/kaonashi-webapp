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
        kind: 'MEMBER',
        text:  'Aさんが新規登録されました。',
      },
      {
        date: '2018-07-13',
        kind: 'MEMBER',
        text:  'Bさんが新規登録されました。',
      },
      {
        date: '2018-07-12',
        kind: 'MEMBER',
        text:  'Cさんが削除されました。',
      },
      {
        date: '2018-07-12',
        kind: 'SYSTEM',
        text:  'メンテナンス情報 2018-07-26 02:00〜05:00',
      },
      {
        date: '2018-07-11',
        kind: 'PROJECT',
        text:  'ID基盤開発 (SNC品川シーサイド)が追加されました。',
      },
      {
        date: '2018-07-11',
        kind: 'PROJECT',
        text:  'ビッグデータ解析 (SNC品川シーサイド)が追加されました。',
      },
      {
        date: '2018-07-11',
        kind: 'MEMBER',
        text:  'Dさんが新規登録されました。',
      },
      {
        date: '2018-07-10',
        kind: 'MEMBER',
        text:  'Eさんが削除されました。',
      },
      {
        date: '2018-07-09',
        kind: 'SYSTEM',
        text:  'メンテナンス情報 2018-07-19 02:00〜05:00',
      },
      {
        date: '2018-07-09',
        kind: 'PROJECT',
        text:  'TVメタ提供サービス開発 (SNC大崎)が追加されました。',
      },
    ];
  }

}
