import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);

  findAll() {}

  findById() {}

  createUser() {}

  updateUser() {}

  deleteUser() {}
}
