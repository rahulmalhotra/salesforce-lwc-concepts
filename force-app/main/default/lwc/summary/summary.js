import { LightningElement, api } from 'lwc';

export default class Summary extends LightningElement {

    @api
    open = false;
    @api
    title = 'Summary Title';
    @api
    description = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.';

    get summaryClass() {
        return this.open ? 'slds-summary-detail slds-is-open' : 'slds-summary-detail';
    }

    get summaryIcon() {
        return this.open ? 'utility:chevrondown' : 'utility:chevronright';
    }

    toggleState() {
        this.open = !this.open;
    }
}