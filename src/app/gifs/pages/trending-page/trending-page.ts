import {Component, computed, inject} from '@angular/core';
import {GifList} from '../../components/gif-list/gif-list';
import {GifServices} from '../../services/gif.services';

// const imageUrls: string[] = [
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
// ];

@Component({
  selector: 'app-trending',
  imports: [
    GifList
  ],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css'
})
export default class TrendingPage {

  // gifs = imageUrls;

  gifService = inject(GifServices);



}
