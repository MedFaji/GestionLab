import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Labo } from '../labo';
import { LaboService } from '../labo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  labo: Labo = new Labo();
  submitted = false;

  constructor(private laboService: LaboService,
    private router: Router) { }

  ngOnInit(): void {
    this.newLabo();
  }


  newLabo(): void {
    this.submitted = false;
    this.labo = new Labo();
  }

  save() {
    this.laboService
    .createLabo(this.labo).subscribe(data => {
      console.log(data)
      this.labo = new Labo();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.save(); 
    this.submitted = true;     
  }

  gotoList() {
    this.router.navigate(['/admin/labo']);
  }

}
