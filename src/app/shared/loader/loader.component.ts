import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  lottieOptions: any = {
    loading: {path: '../../assets/loaders/galaxy.json'}
  };

  constructor() { }

  ngOnInit(): void {
  }

}
