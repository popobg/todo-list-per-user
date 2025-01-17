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

    findByName(name: string): Observable<User> {
        return this.http.get<User>(`http://localhost:3000/users/${name}`);
    }

    createUser(newUser: User): void {
        this.http.post<User>('http://localhost:3000/users', newUser);
    }

    updateUser(updateUser: User): void {
        this.http.put<User>(
            `http://localhost:3000/users/${updateUser.id}`,
            updateUser
        );
    }

    deleteUser(id: string): void {
        this.http.delete<User>(`http://localhost:3000/users/${id}`);
    }
}
