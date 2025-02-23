import * as repo from "../repository/bookRepository";


export function getAllMembers() {
  return repo.getAllMembers();
}

export function getMemberById(id: number) {
  return repo.getMemberById(id);
}

export function getMemberByFirstName(firstName: string) {
  return repo.getMemberByFirstName(firstName);
}