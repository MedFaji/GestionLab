import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Respo } from '../respo';
import { RespoService } from '../respo.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  respos: Observable<Respo[]>;
  idLab: number;

  constructor(private respoService: RespoService,
    private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.respos = this.respoService.getResposList();
  }

  deleteRespo(id: number) {
    this.respoService.deleteRespo(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        
        error => console.log(error));
  }

  respoDetails(id: number){
    this.router.navigate(['/admin/respo/details', id]);
  }

  respoUpdate(id: number){
    this.router.navigate(['/admin/respo/update', id]);
  }
  
  getBudgets(id: number){
    this.router.navigate(['/admin/respo/budgets', id]);
  }


}
