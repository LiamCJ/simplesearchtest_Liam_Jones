import {Component, OnInit} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MainContentComponent} from "./components/main-content/main-content.component";


@Component({
    moduleId: module.id,
    selector: 'ss-app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [HeaderComponent, FooterComponent, MainContentComponent]
})
export class AppComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {
        //runs once component has been initialised
        console.log("App running!");
    }
}
