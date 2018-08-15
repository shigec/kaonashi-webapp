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
}

const members: IMembersState = {
  members: [],
  filterTeam: ''
};

export default members;
