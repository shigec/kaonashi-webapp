export function setMembers(state: any, members: any[]): void {
  state.members.members = members;
}

export function setFilterTeam(state: any, text: string): void {
  state.members.filterTeam = text;
}

