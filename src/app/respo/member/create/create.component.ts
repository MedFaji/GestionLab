import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  member: Member = new Member();
  submitted = false;
  idLab:number;

  constructor(private membreService: MemberService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.idLab = this.route.snapshot.params['id'];
    this.newMember();
  }


  newMember(): void {
    this.submitted = false;
    this.member = new Member();
  }

  save() {
    this.membreService
    .createMember(this.member,this.idLab).subscribe(data => {
      console.log(data)
      this.member = new Member();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.save(); 
    this.submitted = true;     
  }

  gotoList() {
    this.router.navigate(['/respo/member/index']);
  }

}
