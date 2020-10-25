import { LightningElement } from 'lwc';

export default class PersonDetails extends LightningElement {

    name = 'Richard';
    details = 'Richard is the CEO and Founder of Pied Piper';
    showDetails = false;
    actionButtonLabel = 'Show Details';

    toggleDetails() {
        this.showDetails = !this.showDetails;
        this.actionButtonLabel = this.showDetails ? 'Hide Details' : 'Show Details';
        console.log(this.showDetails);
    }
}