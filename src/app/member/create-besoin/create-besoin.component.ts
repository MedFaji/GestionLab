import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FraisInscription } from 'src/app/respo/besoin/FraisInscription';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-create-besoin',
  templateUrl: './create-besoin.component.html',
  styleUrls: ['./create-besoin.component.css']
})
export class CreateBesoinComponent implements OnInit {

  fraisInscription: FraisInscription = new FraisInscription();
  submitted = false;
  now = new Date();

  constructor(private memberService: MemberService,
    private router: Router) { }

  ngOnInit(): void {
    this.newBesoins();
  }


  newBesoins(): void {
    this.submitted = false;
    this.fraisInscription = new FraisInscription();
  }

  save() {
    this.fraisInscription.dateBesoin = this.now;
    this.fraisInscription.etatBesoin = "PENDING";

    this.memberService
    .createInscription(this.fraisInscription,4).subscribe(data => {
      console.log(data)
      this.fraisInscription = new FraisInscription();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.save(); 
    this.submitted = true;     
  }

  gotoList() {
    this.router.navigate(['/member/']);
  }


}
