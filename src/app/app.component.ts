import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-learning-project';

  malware = "Some Random Data receiving from API";

  trustedContent: SafeHtml;

  constructor(private sanitizer: DomSanitizer) { 
    this.trustedContent = this.sanitizer.bypassSecurityTrustHtml(this.malware);
  }
}
