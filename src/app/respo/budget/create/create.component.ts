import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget } from '../Budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  budget: Budget = new Budget();
  submitted = false;
  idLab:number;

  constructor(private budgetService: BudgetService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.idLab = this.route.snapshot.params['id'];
    this.newBudget();
  }


  newBudget(): void {
    this.submitted = false;
    this.budget = new Budget();
  }

  save() {
    this.budgetService
    .createBudget(this.budget,this.idLab).subscribe(data => {
      console.log(data)
      this.budget = new Budget();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.save(); 
    this.submitted = true;     
  }

  gotoList() {
    this.router.navigate(['/respo/budget/index']);
  }

}
