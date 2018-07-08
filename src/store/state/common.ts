import {MENU} from '../../common/constant';

interface ICommon {
  sampleText: string;
  count: number;
  userName: string;
  userId: string;
  selectedMenu: MENU;
}

const common: ICommon = {
  sampleText: '',
  count: 0,
  userName: 'userName',
  userId: '0f3c162b-41cb-44f3-af3b-8f66054eb450',
  selectedMenu: MENU.DASHBOARD,
};

export default common;
