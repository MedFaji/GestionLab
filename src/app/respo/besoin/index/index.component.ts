import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AchatMaterial } from '../AchatMateriel';
import { BesoinService } from '../besoin.service';
import { FraisInscription } from '../FraisInscription';
import { Mobilite } from '../Mobilite';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  fraisInscriptions : Observable<FraisInscription[]>;
  mobilites: Observable<Mobilite[]>;
  materials: Observable<AchatMaterial[]>;

  constructor(
    private route: ActivatedRoute,
    private besoinService: BesoinService,

    private router: Router
  ) { }

  ngOnInit(): void {

    this.reloadData();

  }


  reloadData() {
    this.fraisInscriptions = this.besoinService.getInscriptionList();
    this.mobilites = this.besoinService.getMobiliteList();
    this.materials = this.besoinService.getMaterielList();

  }



  accept(id: number) {
    this.router.navigate(['/respo/budget/details', id]);
  }

  reject(id: number) {
    this.router.navigate(['/respo/budget/update', id]);
  }



}
