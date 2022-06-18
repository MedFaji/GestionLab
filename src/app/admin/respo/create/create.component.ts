import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Labo } from '../../labo/labo';
import { LaboService } from '../../labo/labo.service';
import { Respo } from '../respo';
import { RespoService } from '../respo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  respo: Respo = new Respo();
  labos: Observable<Labo[]>;
  idLab:number;
  submitted = false;

  constructor(private respoService: RespoService,
    private laboService: LaboService,
    private router: Router) { }

  ngOnInit(): void {
    this.newRespo();
    this.reloadData();
    

  }

  onChange(value: any){
    console.log(value);
    this.idLab = value;
}

  reloadData() {
    this.labos = this.laboService.getLabosList();
    
  }

  newRespo(): void {
    this.submitted = false;
    this.respo = new Respo();
  }

  save() {
    this.respoService
    .createRespo(this.respo,this.idLab).subscribe(data => {
      console.log(data)
      this.respo = new Respo();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.save(); 
    this.submitted = true;     
  }

  gotoList() {
    this.router.navigate(['/admin/respo']);
  }

}
