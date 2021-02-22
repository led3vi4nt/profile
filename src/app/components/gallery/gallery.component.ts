import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  imageOrder: number[] = [3, 2, 1, 5, 4, 16, 10, 15, 12, 6, 11, 14, 13, 19, 7];
  imgCss: string[] = ['grid-column:1/3; grid-row:1;', 'grid-column:1; grid-row:2;', 'grid-column:2; grid-row:2;',
    'grid-column:3; grid-row:1/3;', 'grid-column:4; grid-row:1;', 'grid-column:4; grid-row:2;',
    'grid-column:5; grid-row:1/3;', 'grid-column:6; grid-row:1;', 'grid-column:7; grid-row:1;',
    'grid-column:6/8; grid-row:2;', 'grid-column:8; grid-row:1/3;', 'grid-column:9/11; grid-row:1;',
    'grid-column:9; grid-row:2;', 'grid-column:10; grid-row:2;', 'grid-column:11; grid-row:1/3;'];
  imgTitles: string[] = ['',
    'Image Manipulation - I catched a Spider',
    'Image Manipulation - Sitting on the Edge',
    'Image Manipulation - Trinity /w Selfiestick',
    'Image Manipulation - Medieval Star Wars',
    'Digital Art - Gridtrapped',
    'Image Manipulation - Now you see me',
    'Image Manipulation -  Function', '', '',
    'Image Manipulation - Mouthshut',
    'Image Manipulation - Facepalm',
    'Digital Art - Out in the blue',
    'Digital Art - I love my city',
    'Digital Art - Elements',
    'Image Manipulation - Raiden from Vietnam',
    'Digital Art - Arabian Dawn', '', '',
    'Digital Art - I love my city'
  ];

  private scrollingEnabled = true;

  constructor(public dialogRef: MatDialogRef<GalleryComponent>,
    public diag: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  popImageViewer(imageId: number): void {
    const dialogRef = this.diag.open(ImageViewerComponent, {
      data: {
        title: this.imgTitles[imageId],
        source: '../../../assets/images/photoshop/image_' + imageId + '.jpg'
      },
      panelClass: 'galleryDialog'
    });
  }

}
