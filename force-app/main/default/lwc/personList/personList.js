import { LightningElement } from 'lwc';

export default class PersonList extends LightningElement {

    persons = [
        {
            id: 1,
            name: 'Richard Hendricks'
        },
        {
            id: 2,
            name: 'Monica'
        },
        {
            id: 3,
            name: 'Erlich Bachman'

        },
        {
            id: 4,
            name: 'Dinesh'
        },
        {
            id: 5,
            name: 'Jin Yang'
        }
    ];

}