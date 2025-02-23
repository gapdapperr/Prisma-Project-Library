import * as repo from "../repository/authorRepository";


export function getAllAuthors() {
  return repo.getAllAuthors();
}

export function getAuthorById(id: number) {
  return repo.getAuthorById(id);
}