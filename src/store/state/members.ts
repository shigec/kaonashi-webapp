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
}

const members: IMembersState = {
  members: [],
  filterTeam: '',
  activeItemId: '',
};

export default members;
