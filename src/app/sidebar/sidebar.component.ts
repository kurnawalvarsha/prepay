import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  openRequest(){
    console.log("openRequest" );
    this.router.navigate(['/requests'])
    .then(success => console.log('navigation success?' , success))
    .catch(console.error); 
 }

}
