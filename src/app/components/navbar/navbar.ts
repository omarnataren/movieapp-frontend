import { ChangeDetectionStrategy, Component } from '@angular/core';
import { menuItem } from '../../app.interfaces';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar { 
  menuList: menuItem[] = [
    {name: 'Usuarios', route: '/table-usuarios'},
    {name: 'Películas', route: '/table-movies'}

  ]
}
