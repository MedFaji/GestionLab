import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget } from '../Budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  budget: Budget;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private budgetService: BudgetService) { }

  ngOnInit(): void {

    this.budget = new Budget();

    this.id = this.route.snapshot.params['id'];
    
    this.budgetService.getBudget(this.id)
      .subscribe(data => {
        console.log(data)
        this.budget = data;
      }, error => console.log(error));
  }


  updateBudget() {
    this.budgetService.updateBudget(this.budget)
      .subscribe(data => {
        console.log(data);
        this.budget = new Budget();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateBudget();    
    
  }

  gotoList() {
    this.router.navigate(['/respo/budget']);
  }

}
