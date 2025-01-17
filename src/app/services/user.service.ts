import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private readonly http = inject(HttpClient);
    private readonly userUrl = 'http://localhost:3000/users';

    findAll() { }

    findById() {
        
     }

    createUser() { }

    updateUser() { }

    deleteUser() { }
}
