import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget } from '../../budget/Budget';
import { BudgetMember } from '../budgetmember';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.css']
})
export class AddBudgetComponent implements OnInit {

  budget: BudgetMember = new BudgetMember();
  submitted = false;
  idMem:number;

  constructor(private membreService: MemberService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.idMem = this.route.snapshot.params['id'];
    this.newMember();
  }


  newMember(): void {
    this.submitted = false;
    this.budget = new BudgetMember();
  }

  save() {
    this.membreService.addBudgetMember(this.budget,this.idMem).subscribe(data => {
      console.log(data)
      this.budget = new BudgetMember();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.save(); 
    this.submitted = true;     
  }

  gotoList() {
    this.router.navigate(['/respo/member/membreBudgetDetails/'+this.idMem]);
  }

}
