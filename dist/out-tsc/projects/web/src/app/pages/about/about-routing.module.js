import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { GroupPageComponent } from './components/group-page/group-page.component';
import { LocationPageComponent } from './components/location-page/location-page.component';
import { StoryPageComponent } from './components/story-page/story-page.component';
const routes = [
    { path: '',
        component: AboutPageComponent,
        children: [
            { path: 'story', component: StoryPageComponent },
            { path: 'group', component: GroupPageComponent },
            { path: 'location', component: LocationPageComponent },
            { path: '', redirectTo: 'story', pathMatch: 'full' }
        ]
    }
];
let AboutRoutingModule = class AboutRoutingModule {
};
AboutRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AboutRoutingModule);
export { AboutRoutingModule };
//# sourceMappingURL=about-routing.module.js.map