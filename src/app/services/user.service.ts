import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Users } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly http = inject(HttpClient);

  findAll(): Observable<Users> {
    return this.http.get<Users>('http://localhost:3000/users');
  }

  findById(id: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/users/${id}`);
  }

    findByName(name: string): Observable<Users> {
        return this.http.get<Users>(`http://localhost:3000/users?name=${name}`);
    }

    createUser(newUser: Partial<User>): Observable<User> {
        return this.http.post<User>('http://localhost:3000/users', {
            ...newUser,
            id: crypto.randomUUID()
        });
    }

    updateUser(updateUser: User): Observable<User> {
        return this.http.put<User>(
            `http://localhost:3000/users/${updateUser.id}`,
            updateUser
        );
    }

    deleteUser(id: string): Observable<void> {
        return this.http.delete<void>(`http://localhost:3000/users/${id}`);
    }
}
