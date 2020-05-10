import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hifi',
  templateUrl: './hifi.component.html',
  styleUrls: ['./hifi.component.scss']
})
export class HifiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
