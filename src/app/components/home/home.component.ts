import { Component } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  imports: [UserFormComponent, FormsModule],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {
  name: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    console.log("Nom d'utilisateur : " + this.name);
    const user = this.userService.findUserByName(this.name);
    if (user) {
      this.router.navigate(['/todos']);
    } else {
      console.log("Nom d'utilisateur incorrect");
    }
  }
}
