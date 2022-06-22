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

  fraisInscriptions: FraisInscription[];
  mobilites: Observable<Mobilite[]>;
  materials: Observable<AchatMaterial[]>;

  fraisInscription: FraisInscription;
  mobilite: Mobilite;
  material: AchatMaterial;

  constructor(
    private route: ActivatedRoute,
    private besoinService: BesoinService,

    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.fraisInscription = new FraisInscription();

    this.reloadData();

  }


  reloadData() {
     this.besoinService.getInscriptionList().subscribe(data => {
      console.log(data);
      this.fraisInscriptions = data;
      
    }, error => console.log(error));;
  }



  accept(id: number) {
 
      this.fraisInscriptions[0].etatBesoin = "ACCEPTED";

    }


  reject(id: number) {
    this.fraisInscriptions[0].etatBesoin = "REJECTED";

  }






}
