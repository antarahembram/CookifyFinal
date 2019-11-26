import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.css']
})
export class HomecomponentComponent implements OnInit {

  constructor(private router:Router) { }
  fn(name)
  {
   this.router.navigate(['/search',name]);
  }
  
  ngOnInit() {
  }
}
