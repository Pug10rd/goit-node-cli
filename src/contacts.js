import fs from "fs/promises";
import path from "path";

import { fileURLToPath } from "url";

// для ESM визначаємо __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contactsPath = path.join(__dirname, "db", "contacts.json");

console.log(contactsPath);

export async function listContacts() {
  const file = await fs.readFile(contactsPath, "utf-8");
  const parsedData = await JSON.parse(file);
  return parsedData;
  // ...твій код. Повертає масив контактів.
}

// listContacts(contactsPath);

export async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  if (contactId) {
    const contact = await contacts.find((c) => c.id === contactId || null);
    return contact;
  }
}

export async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  if (contactId) {
    const contact = await contacts.find((c) => c.id === contactId || null);
    contacts.pop(contact);
    return contact;
  }
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}

export default { listContacts, getContactById, removeContact };
