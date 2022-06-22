import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Budget } from '../Budget';
import { BudgetService } from '../budget.service';
import { Location } from '@angular/common';
import { Labo } from '../../../admin/labo/labo';
import { RespoService } from 'src/app/admin/respo/respo.service';
import { Respo } from 'src/app/admin/respo/respo';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class budgetIndexComponent implements OnInit {


  budgetsLab: Budget[];

  labo: Labo;

  respo: Respo;



  constructor(
    private _location: Location,
    private route: ActivatedRoute,
    private budgetService: BudgetService,
    private respoService: RespoService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.reloadData();

  }

  backClicked() {
    this._location.back();
  }

  reloadData() {

    this.respoService.getRespo(1).subscribe(data => {

      console.log(data)
      this.respo = data;
      this.budgetsLab = this.respo.laboratoire.budgetsLabo;

    }, error => console.log(error));






  }

  deleteBudget(id: number) {
    this.budgetService.deleteBudget(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },

        error => console.log(error));
  }

  budgetDetails(id: number) {
    this.router.navigate(['/respo/budget/details', id]);
  }

  budgetUpdate(id: number) {
    this.router.navigate(['/respo/budget/update', id]);
  }

}
