import * as repo from "../repository/memberRepository";


export function getAllMembers() {
  return repo.getAllMembers();
}

export function getMemberByMemberCode(memberCode: string) {
  return repo.getMemberByMemberCode(memberCode);
}

export function getMemberByFirstName(firstName: string) {
  return repo.getMemberByFirstName(firstName);
}