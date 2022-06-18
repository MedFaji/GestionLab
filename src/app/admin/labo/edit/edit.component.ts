import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Labo } from '../labo';
import { LaboService } from '../labo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  labo: Labo;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private laboService: LaboService) { }

  ngOnInit(): void {

    this.labo = new Labo();

    this.id = this.route.snapshot.params['id'];
    
    this.laboService.getLabo(this.id)
      .subscribe(data => {
        console.log(data)
        this.labo = data;
      }, error => console.log(error));
  }


  updateLabo() {
    this.laboService.updateLabo(this.labo)
      .subscribe(data => {
        console.log(data);
        this.labo = new Labo();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.updateLabo();    
    
  }

  gotoList() {
    this.router.navigate(['/admin/labo']);
  }

}
