import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileImageComponent } from './components/profile-image/profile-image.component';
import { TopDetailsComponent } from './components/top-details/top-details.component';
import { MidExperiencesComponent } from './components/mid-experiences/mid-experiences.component';
import { BottomContactComponent } from './components/bottom-contact/bottom-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { BadgeComponent } from './components/badge/badge.component';
@NgModule({
  declarations: [
    AppComponent,
    ProfileImageComponent,
    TopDetailsComponent,
    MidExperiencesComponent,
    BottomContactComponent,
    GalleryComponent,
    ImageViewerComponent,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
