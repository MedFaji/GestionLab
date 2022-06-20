import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget } from '../../budget/Budget';
import { BudgetMember } from '../budgetmember';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-view-budget',
  templateUrl: './view-budget.component.html',
  styleUrls: ['./view-budget.component.css']
})
export class ViewBudgetComponent implements OnInit {

  id: number;
  member: Member;
  budgetMember: BudgetMember[];

  constructor(private route: ActivatedRoute,private router: Router,
    private memberService: MemberService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    
    this.memberService.getMember(this.id)
      .subscribe(data => {
        
        this.member = data;
        this.budgetMember = this.member.budgetMembres;
        console.log(this.budgetMember)
        
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/respo/member']);
  }

}
