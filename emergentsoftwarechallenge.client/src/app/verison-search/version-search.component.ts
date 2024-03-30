import { Component, OnInit } from '@angular/core';
import { VersionSearchService } from './version-search.service';
import { SoftwareVersion } from './SoftwareVersion';

@Component({
  selector: 'app-version-search',
  templateUrl: './version-search.component.html',
  styleUrls: ['./version-search.component.css']
})
export class VersionSearchComponent implements OnInit {
  versions: SoftwareVersion[] = [];
  searchQuery: string = '';

  constructor(private versionSearchService: VersionSearchService) { }

  ngOnInit(): void {
    this.getVersions(); 
  }

  getVersions(): void {
    this.versionSearchService.getVersions().subscribe(
      v => {
        this.versions = v;
      },
      error => {
        console.error('Error fetching versions:', error);
      }
    );
  }

  searchVersions(): void {
    this.versionSearchService.searchVersions(this.searchQuery).subscribe(
      v => {
        this.versions = v;
      },
      error => {
        console.error('Error fetching versions:', error);
      }
    );
  }
}
