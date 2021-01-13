import { LightningElement, wire, track } from "lwc";

import { getRecord, updateRecord } from "lightning/uiRecordApi";
import { getObjectInfo } from "lightning/uiObjectInfoApi";

import CONTACT_OBJECT from "@salesforce/schema/Contact";

import FIRST_NAME_FIELD from "@salesforce/schema/Contact.FirstName";
import LAST_NAME_FIELD from "@salesforce/schema/Contact.LastName";
import MOBILE_PHONE_FIELD from "@salesforce/schema/Contact.MobilePhone";
import EMAIL_FIELD from "@salesforce/schema/Contact.Email";
import CODE_FIELD from "@salesforce/schema/Contact.Code__c";

export default class ContactFormEditOnly1 extends LightningElement {
  contactRecordId = "0039D00000AUkDOQA1";
  contactRecord = {}; // * Old value of contact fields

  @track
  contactRecordEditable = {}; // * Updated value of contact fields

  @wire(getRecord, {
    recordId: "$contactRecordId",
    fields: [
      FIRST_NAME_FIELD,
      LAST_NAME_FIELD,
      MOBILE_PHONE_FIELD,
      EMAIL_FIELD,
      CODE_FIELD
    ]
  })
  contactRecordResult({ data, error }) {
    if (data) {
      console.log(data);
      console.log(JSON.stringify(data));
      this.contactRecord = data; // * Pass by reference
      this.contactRecordEditable = JSON.parse(JSON.stringify(data)); // * Pass by value
    }
    if (error) {
      console.log(error);
    }
  }

  @wire(getObjectInfo, { objectApiName: CONTACT_OBJECT })
  contactObjectInfo;

  get contactFields() {
    let contactFieldsArray = [],
      key = 0;
    if (this.contactRecordEditable && this.contactObjectInfo.data) {
      for (let field in this.contactRecordEditable.fields) {
        if (
          Object.prototype.hasOwnProperty.call(
            this.contactRecordEditable.fields,
            field
          )
        ) {
          contactFieldsArray.push({
            key: key++,
            apiName: field,
            label: this.contactObjectInfo.data.fields[field].label,
            value: this.contactRecordEditable.fields[field].value
          });
        }
      }
    }
    return contactFieldsArray;
  }

  updateContactField(event) {
    let name = event.target.name;
    console.log(name);
    if (
      Object.prototype.hasOwnProperty.call(
        this.contactRecordEditable.fields,
        name
      ) &&
      this.contactRecordEditable.fields[name]
    ) {
      console.log(this.contactRecordEditable.fields[name].value);
      this.contactRecordEditable.fields[name].value = event.target.value;
    }
    console.log(this.contactRecordEditable);
  }

  saveRecord() {
    let contact = {};
    contact.fields = { ...this.contactRecordEditable.fields };
    for (let field in contact.fields) {
      if (Object.prototype.hasOwnProperty.call(contact.fields, field)) {
        contact.fields[field] = contact.fields[field].value;
      }
    }
    contact.fields.Id = this.contactRecordEditable.id.slice();
    console.log(JSON.stringify(contact));
    updateRecord(contact)
      .then(() => {
        console.log("Record Updated");
      })
      .catch((error) => {
        console.log("Unable to update record");
        console.log(JSON.stringify(error));
        console.log(error.body.message);
      });
  }

  resetForm(event) {
    console.log(JSON.stringify(this.contactRecord));
    console.log(JSON.stringify(this.contactRecordEditable));
    this.contactRecordEditable = JSON.parse(JSON.stringify(this.contactRecord));
  }
}
