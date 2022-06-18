import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Respo } from '../../respo/respo';
import { Labo } from '../labo';
import { LaboService } from '../labo.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id: number;
  labo: Labo;
  respo: Respo

  constructor(private route: ActivatedRoute,private router: Router,
    private laboService: LaboService) { }

  ngOnInit(): void {
    this.labo = new Labo();

    this.id = this.route.snapshot.params['id'];
    
    this.laboService.getLabo(this.id)
      .subscribe(data => {
        
        this.labo = data;
        console.log(this.labo.responsable);
        this.respo=this.labo.responsable;
        
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['/admin/labo']);
  }

}
