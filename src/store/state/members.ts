interface IMemberData {
  id: string,
  name: string,
  gender: string,
  age: number,
  dept: string,
  unit: string,
  team: string,
  position: string,
  projectName: string,
  projectId: string,
}

interface IMembersState {
  members: IMemberData[],
  filterTeam: string,
  activeItemId: string,
  isEditMode: boolean,
}

const members: IMembersState = {
  members: [],
  filterTeam: '',
  activeItemId: '',
  isEditMode: false,
};

export default members;
