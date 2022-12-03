import {AfterViewInit, Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

import * as DarkReader from 'darkreader';
import {LocalStorageService} from 'angular-web-storage';
import {ConfirmationService} from 'primeng/api';
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {

  routeUrl: any = '';
  token: any = {
    name: '',
    dept: '',
    asc: ''
  };
  isDarkEnabled = DarkReader.isEnabled();


  showMobileMenu = false;
  private activeBreakpoint: string = '';

  constructor(
              private confirmationService: ConfirmationService,
              private mediaObserver: MediaObserver,
              private localStorageService: LocalStorageService,
              private router: Router) {
    router.events
      .subscribe(
        (event: any) => {
          if (event instanceof NavigationStart) {
            this.routeUrl = event.url;
          }
        });
  }

  ngOnInit(): void {

    this.mediaObserver
      .asObservable()
      .subscribe((change) => {
        this.activeBreakpoint = change[0].suffix;
        this.showMobileMenu = false;
      });

    this.routeUrl = this.router.url;

    if (this.localStorageService.get('dark')) {
      this.enableDarkMode();
    } else {
      if (this.token['dark-mode']) {
        this.enableDarkMode();
      }
    }
  }

  logout() {
  }

  routeTo(route: string) {
    this.router.navigate([`./admin/${route}/`]);
    this.showMobileMenu = false;
  }

  enableDarkMode() {
    DarkReader.setFetchMethod(window.fetch);
    DarkReader.enable({
      brightness: 100,
      contrast: 90
    });
    this.isDarkEnabled = DarkReader.isEnabled();
    this.localStorageService.set('dark', DarkReader.isEnabled());
  }

  disableDarkMode() {
    DarkReader.disable();
    this.isDarkEnabled = DarkReader.isEnabled();
    this.localStorageService.set('dark', DarkReader.isEnabled());
  }

  ngAfterViewInit(): void {
  }

  get requestSidebar() {
    return ['Xs', 'Sm'].includes(this.activeBreakpoint) ? 'bottom' : 'right';
  }
}
