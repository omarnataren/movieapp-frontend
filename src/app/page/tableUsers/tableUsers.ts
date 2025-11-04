import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '../../app.interfaces';

@Component({
  selector: 'app-table-users',
  imports: [],
  templateUrl: './tableUsers.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableUsers { 

  Users: User[] = [
    {id: 1, nombre: 'Omar', telefono: '1234567890', email: 'omar@example.com', edad: 30, isPremium: true},
    {id: 2, nombre: 'Ana', telefono: '0987654321', email: 'ana@example.com', edad: 25, isPremium: false},
    {id: 3, nombre: 'Luis', telefono: '5555555555', email: 'luis@example.com', edad: 28, isPremium: true}
  ]
}
