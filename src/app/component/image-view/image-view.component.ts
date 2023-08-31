import { Component, OnInit } from '@angular/core';
import { ImageProviderService } from 'src/app/service/image-provider.service';
import { Image } from '../interface/image.model';
@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
  images: Image[] = [];
  error: string | null = null;

  constructor(private imageService: ImageProviderService) { }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.imageService.getImages().subscribe(
      (response: any) => {
        if (response.status === 'success') {
          this.images = response.items as Image[];
        } else {
          this.error = 'Failed to fetch images';
        }
      },
    );
  }
}
