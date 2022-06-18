import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Labo } from 'src/app/admin/labo/labo';
import { Budget } from '../Budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: number;
  labo: Labo;
  budget: Budget;

  constructor(private route: ActivatedRoute,private router: Router,
    private budgetService: BudgetService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    
    this.budgetService.getBudget(this.id)
      .subscribe(data => {
        console.log(data)
        this.budget = data;
        this.labo = this.budget.laboratoire;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/respo/budget']);
  }

}
