import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './components/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'getStream-ChatApp';

  constructor(
    public auth: AuthService,
     private router: Router
  ) {}

 signOut() {
  this.auth.signOut().subscribe({
    next: () => this.router.navigate(['signin'])
  });
 }
}
