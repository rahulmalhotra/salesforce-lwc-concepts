import { LightningElement, track, api } from 'lwc';

export default class Person extends LightningElement {

    @api
    location;

    /*
    *   @track - Whenever you want to make a propery of a data member reactive
    *   @api - Whenever you want to make a data member or member function public
    *
    *   Note:-
    *   When you need to update the whole data member, no decorator is required
    *   but, if you need to update the property of your data member in lwc component
    *   you need to use a decorator - track
    */

    @track
    user = {
        firstName: 'Richard',
        lastName: 'Hendricks'
    };

    @api
    updateUser() {
        console.log('function called');
        // this.user = {
        //     firstName: 'Gavin',
        //     lastName: 'Belson'
        // };
        this.user.firstName = 'Gavin';
    }

}