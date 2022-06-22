import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AchatMaterial } from 'src/app/respo/besoin/AchatMateriel';
import { FraisInscription } from 'src/app/respo/besoin/FraisInscription';
import { Mobilite } from 'src/app/respo/besoin/Mobilite';
import { Member } from 'src/app/respo/member/member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-index-besoin',
  templateUrl: './index-besoin.component.html',
  styleUrls: ['./index-besoin.component.css']
})
export class IndexBesoinComponent implements OnInit {

  fraisInscriptions : FraisInscription[];
  mobilites: Mobilite[];
  materials: AchatMaterial[];
  member: Member;

  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService,

    private router: Router
  ) { }

  ngOnInit(): void {

    this.reloadData();

  }


  reloadData() {
    this.memberService.getMember(3).subscribe(data => {
      console.log(data);
      this.member = data;
      this.fraisInscriptions = this.member.fraisInscriptions;
    }, error => console.log(error));

  

  }



  accept(id: number) {
    this.router.navigate(['/respo/budget/details', id]);
  }

  reject(id: number) {
    this.router.navigate(['/respo/budget/update', id]);
  }

}
