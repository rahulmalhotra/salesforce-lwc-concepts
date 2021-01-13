import { LightningElement } from "lwc";

import FIRST_NAME_FIELD from "@salesforce/schema/Contact.FirstName";
import LAST_NAME_FIELD from "@salesforce/schema/Contact.LastName";
import MOBILE_PHONE_FIELD from "@salesforce/schema/Contact.MobilePhone";
import EMAIL_FIELD from "@salesforce/schema/Contact.Email";
import CODE_FIELD from "@salesforce/schema/Contact.Code__c";

import CONTACT_OBJECT from "@salesforce/schema/Contact";

export default class ContactForm extends LightningElement {
  objectName = CONTACT_OBJECT;
  objectFields = [
    FIRST_NAME_FIELD,
    LAST_NAME_FIELD,
    MOBILE_PHONE_FIELD,
    EMAIL_FIELD,
    CODE_FIELD
  ];
  // objectFields = ["FirstName", "LastName", "MobilePhone", "Email", "Code__c"];

  handleLoad(event) {
    console.log(FIRST_NAME_FIELD);
    console.log(CONTACT_OBJECT);
    console.log(event.type);
    console.log(JSON.stringify(event.detail));
  }

  handleCancel(event) {
    console.log(event.type);
    console.log(JSON.stringify(event.detail));
  }

  handleSubmit(event) {
    console.log(event.type);
    console.log(JSON.stringify(event.detail));
  }

  handleSuccess(event) {
    console.log(event.type);
    console.log(JSON.stringify(event.detail));
  }

  handleError(event) {
    console.log(event.type);
    console.log(JSON.stringify(event.detail));
  }
}
