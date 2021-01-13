import { LightningElement } from "lwc";

import CONTACT_OBJECT from "@salesforce/schema/Contact";

export default class ContactFormEditOnly extends LightningElement {
  objectName = CONTACT_OBJECT;

  handleLoad(event) {
    console.log(event.type);
    console.log(event.detail);
  }

  handleSubmit(event) {
    console.log(event.type);
    console.log(event.detail);
    event.preventDefault(); // stop the default behaviour of the event - submit the record
    let fields = event.detail.fields;
    fields.MobilePhone = "9090909090909090";
    this.template.querySelector("lightning-record-edit-form").submit(fields);
  }

  handleSuccess(event) {
    console.log(event.type);
    console.log(event.detail);
    console.log(event.detail.id);
  }

  handleError(event) {
    console.log(event.type);
    console.log(event.detail);
    console.log(event.detail.detail);
  }

  resetForm(event) {
    const fields = this.template.querySelectorAll("lightning-input-field");
    fields.forEach((field) => {
      field.reset();
    });
  }
}
