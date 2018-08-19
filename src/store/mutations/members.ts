export function setMembers(state: any, members: any[]): void {
  state.members.members = members;
}

export function setFilterTeam(state: any, text: string): void {
  state.members.filterTeam = text;
}

export function setActiveItemId(state: any, id: string): void {
  state.members.activeItemId = id;
}

export function clearActiveItemId(state: any): void {
  state.members.activeItemId = '';
}

export function setEditMode(state: any, mode: boolean) {
  state.members.isEditMode = mode;
}

