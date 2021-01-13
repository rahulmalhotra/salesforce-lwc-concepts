import { LightningElement } from "lwc";

import CONTACT_OBJECT from "@salesforce/schema/Contact";

export default class ContactFormReadOnly extends LightningElement {
  objectName = CONTACT_OBJECT;
  recordId = "0039D00000AUkDOQA1";

  handleLoad(event) {
    console.log(event.type);
    console.log(event.detail);
  }

  updateRecordId(event) {
    this.recordId = "0039D00000AUk6XQAT";
  }
}
