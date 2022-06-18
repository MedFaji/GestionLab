import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Labo } from 'src/app/admin/labo/labo';
import { Respo } from 'src/app/admin/respo/respo';
import { RespoService } from 'src/app/admin/respo/respo.service';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  members: Member[];

  labo: Labo;

  respo: Respo;

  constructor(
    private respoService: RespoService,
    private memberService: MemberService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.reloadData();

  }


  reloadData() {

    this.respoService.getRespo(14).subscribe(data => {

      this.respo = data;
      this.members = this.respo.laboratoire.membres;
      console.log(this.members);
      

    }, error => console.log(error));






  }

  deleteMember(id: number) {
    this.memberService.deleteMember(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },

        error => console.log(error));
  }

  memberDetails(id: number) {
    this.router.navigate(['/respo/member/details', id]);
  }

  memberUpdate(id: number) {
    this.router.navigate(['/respo/member/update', id]);
  }

}
