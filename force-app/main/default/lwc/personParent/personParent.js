import { LightningElement } from 'lwc';

export default class PersonParent extends LightningElement {

    updateUser() {
        this.template.querySelector('c-person').updateUser();
    }
}