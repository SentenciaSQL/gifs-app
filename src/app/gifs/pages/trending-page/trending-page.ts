import {Component, computed, ElementRef, inject, viewChild} from '@angular/core';
import {GifList} from '../../components/gif-list/gif-list';
import {GifServices} from '../../services/gif.services';

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

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');


  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

    if (isAtBottom) {

    }
  }

}
