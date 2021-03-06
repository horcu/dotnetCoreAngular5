"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const home_service_1 = require("../../core/services/home.service");
let HomeComponent = class HomeComponent {
    constructor(hserv) {
        this.hserv = hserv;
        this.result = [];
        this.hserv.GetHomeMessage().subscribe(response => this.result = response);
        // this.hserv.GetRayshioMessage().subscribe(response => this.result = response)
        // this.hserv.PostRayshioMessage("Save me a spot at the table boys").subscribe(response => this.result = response)
    }
    ngOnInit() {
    }
};
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: 'home.component.html'
    }),
    __metadata("design:paramtypes", [home_service_1.HomeService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map