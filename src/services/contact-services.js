import contacts from "./mocks";
import { v4 } from "uuid";

export default class ContactService {
  static async createContact(body) {
    contacts.push({ ...body, id: v4() });
    return contacts;
  }

  static getAllContacts() {
    return contacts;
  }

  static getContact(id) {
    return contacts.find((contact) => contact.id === id);
  }

  static updateContact(id, body) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === id) {
        contacts[i] = { ...body, id: contacts[i].id };
        return true;
      }
    }
    return false;
  }

  static deleteContact(id) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === id) {
        contacts.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
