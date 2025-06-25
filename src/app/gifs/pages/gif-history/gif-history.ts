import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';
import {GifServices} from '../../services/gif.services';
import {GifList} from '../../components/gif-list/gif-list';

@Component({
  selector: 'app-gif-history',
  imports: [
    GifList
  ],
  templateUrl: './gif-history.html',
  styleUrl: './gif-history.css'
})
export default class GifHistory {

  gifServices = inject(GifServices);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map(params => params['query'] || ''))
  )

  gifsByKey = computed(() => {
    return this.gifServices.getHistoryGifs(this.query())
  })
}
