import { LightningElement, wire } from "lwc";

import { getRecord } from "lightning/uiRecordApi";
import { getObjectInfo } from "lightning/uiObjectInfoApi";

import CONTACT_OBJECT from "@salesforce/schema/Contact";

import FIRST_NAME_FIELD from "@salesforce/schema/Contact.FirstName";
import LAST_NAME_FIELD from "@salesforce/schema/Contact.LastName";
import MOBILE_PHONE_FIELD from "@salesforce/schema/Contact.MobilePhone";
import EMAIL_FIELD from "@salesforce/schema/Contact.Email";
import CODE_FIELD from "@salesforce/schema/Contact.Code__c";

export default class ContactFormReadOnly1 extends LightningElement {
  contactRecordId = "0039D00000AUkDOQA1";

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
  contactRecord;

  @wire(getObjectInfo, { objectApiName: CONTACT_OBJECT })
  contactObjectInfo;

  get contactFields() {
    let contactFieldsArray = [],
      key = 0;
    if (this.contactRecord.data && this.contactObjectInfo.data) {
      console.log("Contact Record Data -->");
      console.log(JSON.stringify(this.contactRecord.data));
      console.log("Contact Object Info Data -->");
      console.log(JSON.stringify(this.contactObjectInfo.data));

      for (let field in this.contactRecord.data.fields) {
        if (
          Object.prototype.hasOwnProperty.call(
            this.contactRecord.data.fields,
            field
          )
        ) {
          console.log(field);
          contactFieldsArray.push({
            key: key++,
            apiName: field,
            label: this.contactObjectInfo.data.fields[field].label,
            value: this.contactRecord.data.fields[field].value
          });
        }
      }
    }
    return contactFieldsArray;
  }
}
