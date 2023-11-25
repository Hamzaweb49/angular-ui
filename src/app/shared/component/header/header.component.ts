import { Component, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {




  constructor(private dialog: MatDialog, private router: Router, private elementRef: ElementRef, private renderer: Renderer2,) {

   }


  ngOnInit() {

  }

}

