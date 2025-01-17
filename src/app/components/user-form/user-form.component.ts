import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-form',
    imports: [
        MatFormField,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        FormsModule
    ],
    templateUrl: './user-form.component.html',
    styles: ``
})
export class UserFormComponent {
    constructor(private userService: UserService, private router: Router) {}

    onSubmit(userForm: any): void {
        this.userService.createUser({
            name: userForm.name.value,
            description: userForm.description.value,
            admin: userForm.admin.value
        }).subscribe({
            next: () => {
                this.router.navigate(['/users/list']);
            },
            error: (err) => console.error("Erreur lors de la création d'un utilisateur", err)
        });
    }
}
