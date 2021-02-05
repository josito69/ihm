import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MareasProviderService} from '../mareas-provider.service'

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  private tides={};
  port:string;

  constructor(private activatedRoute: ActivatedRoute,private mareas:MareasProviderService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.folder=="Inbox")this.folder="coruna";
    let date=new Date();
    let month:string=(date.getMonth()+1).toString();
    let year=date.getFullYear()+"";
    if (month.length<2)
       month="0"+month;
    this.mareas.returnTides(month,year,this.folder).subscribe(result => {
        this.tides=result});

  }

}

