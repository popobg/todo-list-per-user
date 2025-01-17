import { Component, inject, input, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-user-details',
  imports: [MatCardModule],
  templateUrl: './user-details.component.html',
  styles: `
    .card {
      background-color: white;
      width: 50%;
      margin-top: 10px;
    }
  `
})
export class UserDetailsComponent implements OnInit{
  
  userService = inject(UserService);
  userId = input<string>(''); // Signal pour récupérer l'ID de l'utilisateur
  user = signal<User | null>(null); // Signal pour récupérer les détails de l'utilisateur
  
  ngOnInit(): void {
    this.userService.findById(this.userId()).subscribe((user) => {
      this.user.set(user); // Mettre à jour le signal avec les détails de l'utilisateur
    });
  }
}
