import { Component, OnInit } from '@angular/core';
import { MaterialsService } from '../../service/materials.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  dataSource: any;
  constructor(
    private materialService: MaterialsService
  ) { }

  ngOnInit() {
    this.materialService.getAll().then(res=>{
      this.dataSource = res
      console.log(this.dataSource)
    })
  }

}
