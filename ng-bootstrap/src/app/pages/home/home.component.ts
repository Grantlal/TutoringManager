import {OnInit, Component} from "@angular/core";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor() { }

    Checkoff(): void {
        jQuery("body").toggleClass("m-l-xs todo-completed");
    }

    EmailTa(): void {
        window.open("https://outlook.office.com/owa/");
    }

    EmailProf(): void {
        window.open("https://outlook.office.com/owa/");
    }
    CheckoutTutor(): void {
        window.open("https://tutor.stcloudstate.edu/TracWeb40/Default.html")
    }
    ngOnInit() {
    }
}