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
      //  this.openOptionsMenu();
    }

    EmailProf(): void {
        window.open("https://outlook.office.com/owa/");
    }
    CheckoutTutor(): void {
        window.open("https://tutor.stcloudstate.edu/TracWeb40/Default.html")
    }

    GoChat(): void {
        window.open("https://snatchbot.me/webchat/?botID=39005&appID=sVJ9eLJV60JXwoSAL7eP")
    }
    ngOnInit() {
    }
}