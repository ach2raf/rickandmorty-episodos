import { Component, inject, signal } from '@angular/core';
import { EpisodeService } from '../../services/episode.service';
import { Episode } from '../../models/episode.model';

@Component({
  selector: 'app-episode-list',
  standalone: true,
  templateUrl: './episode-list.component.html',
})
export class EpisodeListComponent {
  private readonly episodeService = inject(EpisodeService);

  episodes = signal<Episode[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  loadEpisodes(): void {
    this.loading.set(true);
    this.error.set(null);

    this.episodeService.getEpisodes().subscribe({
      next: (response) => {
        this.episodes.set(response.results);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('No se pudieron cargar los episodios.');
        this.loading.set(false);
      },
    });
  }
}
