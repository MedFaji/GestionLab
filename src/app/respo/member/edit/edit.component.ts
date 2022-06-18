import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  member: Member;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private memberService: MemberService) { }

  ngOnInit(): void {

    this.member = new Member();

    this.id = this.route.snapshot.params['id'];
    
    this.memberService.getMember(this.id)
      .subscribe(data => {
        console.log(data)
        this.member = data;
      }, error => console.log(error));
  }


  updateBudget() {
    this.memberService.updateMember(this.member)
      .subscribe(data => {
        console.log(data);
        this.member = new Member();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateBudget();    
    
  }

  gotoList() {
    this.router.navigate(['/respo/member']);
  }

}
