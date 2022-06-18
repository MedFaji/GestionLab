import { Component, OnInit } from '@angular/core';
import { Labo } from '../labo';
import { Observable } from "rxjs";
import { LaboService } from '../labo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit {

  labos: Observable<Labo[]>;
  idLab: number;

  constructor(private laboService: LaboService,
    private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.labos = this.laboService.getLabosList();
  }

  deleteLabo(id: number) {
    this.laboService.deleteLabo(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        
        error => console.log(error));
  }

  laboDetails(id: number){
    this.router.navigate(['/admin/labo/details', id]);
  }

  laboUpdate(id: number){
    this.router.navigate(['/admin/labo/update', id]);
  }
  
  getBudgets(id: number){
    this.router.navigate(['/admin/labo/budgets', id]);
  }


}
