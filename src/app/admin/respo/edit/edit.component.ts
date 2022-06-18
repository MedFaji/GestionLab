import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Labo } from '../../labo/labo';
import { LaboService } from '../../labo/labo.service';
import { Respo } from '../respo';
import { RespoService } from '../respo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  respo: Respo;
  submitted = false;
  idLab:number;
  labos: Observable<Labo[]>;

  constructor(private route: ActivatedRoute,private router: Router,
    private respoService: RespoService, private laboService: LaboService) { }

  ngOnInit(): void {

    this.respo = new Respo();

    this.id = this.route.snapshot.params['id'];
    
    this.respoService.getRespo(this.id)
      .subscribe(data => {
        console.log(data)
        this.respo = data;
      }, error => console.log(error));

      this.reloadData();
  }

  reloadData() {
    this.labos = this.laboService.getLabosList();
    
  }
  
  onChange(value: any){
    console.log(value);
    this.idLab = value;
}


  updateRespo() {
    this.respoService.createRespo(this.respo,this.idLab)
      .subscribe(data => {
        console.log(data);
        this.respo = new Respo();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateRespo();    
    
  }

  gotoList() {
    this.router.navigate(['/admin/respo']);
  }

}
