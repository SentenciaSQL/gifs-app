import {Component, inject, signal} from '@angular/core';
import {GifList} from '../../components/gif-list/gif-list';
import {GifServices} from '../../services/gif.services';
import {Gif} from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search',
  imports: [
    GifList
  ],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css'
})
export default class SearchPage {

  gifService = inject(GifServices);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe(resp => {
      this.gifs.set(resp);
    })
  }

}
