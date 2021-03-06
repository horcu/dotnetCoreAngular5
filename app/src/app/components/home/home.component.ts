﻿import { Component, OnInit } from '@angular/core';

import { HomeService } from "../../core/services/home.service";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    result: any[] = [];        

    constructor(private hserv: HomeService) {
        this.hserv.GetHomeMessage().subscribe(response => this.result = response);
       // this.hserv.GetRayshioMessage().subscribe(response => this.result = response)
       // this.hserv.PostRayshioMessage("Save me a spot at the table boys").subscribe(response => this.result = response)
    }

    ngOnInit(): void {
    }

}