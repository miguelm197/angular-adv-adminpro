import { Component, OnInit } from '@angular/core';
import { SettingsService } from './../../services/settings.service';

@Component({
  selector: 'app-count-settings',
  templateUrl: './count-settings.component.html',
  styles: [],
})
export class CountSettingsComponent implements OnInit {

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this.settingsService.changeTheme(theme);
  }

}
