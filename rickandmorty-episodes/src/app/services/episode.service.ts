import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpisodeResponse } from '../models/episode.model';

@Injectable({ providedIn: 'root' })
export class EpisodeService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://rickandmortyapi.com/api/episode';

  getEpisodes(): Observable<EpisodeResponse> {
    return this.http.get<EpisodeResponse>(this.apiUrl);
  }
}
