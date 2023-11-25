import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {




  constructor(private dialog: MatDialog, private router: Router) {

   }


  ngOnInit() {

  }

  isDashboardRoute(): boolean {
    return this.router.url === '/dashboard';
  }

}

