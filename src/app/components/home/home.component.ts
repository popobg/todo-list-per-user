import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  name: string = '';
  errorMessage: string = '';
  user: User | undefined;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    console.log("Nom d'utilisateur : " + this.name);
    this.userService.findByName(this.name).subscribe((users) => {
      if (users[0]) {
        if (users[0].admin === false) {
          this.router.navigate(['/users/list']);
        } else {
          this.router.navigate(['/todos']);
        }
      } else {
        this.errorMessage = "L'utilisateur n'existe pas";
      }
    });
  }
}
