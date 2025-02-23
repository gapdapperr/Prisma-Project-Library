import * as repo from "../repository/bookRepository";

export function getAllAuthors() {
  return repo.getAllAuthors();
}

export function getAuthorById(id: number) {
  return repo.getAuthorById(id);
}