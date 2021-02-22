import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from '../gallery/gallery.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'mid-experiences',
  templateUrl: './mid-experiences.component.html',
  styleUrls: ['./mid-experiences.component.css']
})
export class MidExperiencesComponent implements OnInit {
  public galleryUnseen = true;
  public professions = ['dotnet','java','spring','angular','break','html','css','javascript','typescript']

  constructor(public diag: MatDialog) {}

  ngOnInit(): void {
  }

  popGallery(): void {
    const dialogRef = this.diag.open(GalleryComponent, {
      data: { scrollAfterViewInit: this.galleryUnseen },
      panelClass: 'galleryDialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.galleryUnseen = false;
    });
  }

}
