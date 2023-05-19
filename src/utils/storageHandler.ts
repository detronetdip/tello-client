export const getItem = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data);
  else return null;
};
export const setItem = (key: string, value: object | string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const deleteItem = (key: string) => {
  localStorage.removeItem(key);
};

export const setUserStorage = (key: string, value: object) => {
  const data = getItem(key);
  setItem(key, { ...data, ...value });
};

class INDEX_DB {
  constructor(private databaseName: string, private objectStoreName: string) {
    window.addEventListener("beforeunload", () => this.closeDatabase());
  }

  async openDatabase(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.databaseName);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      request.onupgradeneeded = () => {
        const db = request.result;
        db.createObjectStore(this.objectStoreName, {
          keyPath: "id",
          autoIncrement: true,
        });
      };
    });
  }

  closeDatabase() {
    indexedDB.deleteDatabase(this.databaseName);
  }

  async storeMessage({
    senderId,
    receiverId,
    message,
    time,
  }: {
    senderId: string;
    receiverId: string;
    message: string;
    time: string;
  }) {
    try {
      const db = await this.openDatabase();
      const transaction = db.transaction(this.objectStoreName, "readwrite");
      const objectStore = transaction.objectStore(this.objectStoreName);

      const msg = { senderId, receiverId, message, time };
      const id = objectStore.add(msg);
      id.onsuccess = () => {
        console.log("added");
      };
    } catch (error) {
      console.error("Error storing message:", error);
    }
  }

  async getMessages(senderId: string):Promise<any> {
    try {
      return new Promise((res, rej) => {
        const get = async () => {
          const db = await this.openDatabase();
          const transaction = db.transaction(this.objectStoreName, "readonly");
          const objectStore = transaction.objectStore(this.objectStoreName);

          const messages: any = [];
          const request = objectStore.openCursor();

          request.onsuccess = (event) => {
            // @ts-ignore
            const cursor = event.target.result;
            if (cursor) {
              const message = cursor.value;
              if (message.senderId === senderId || message.receiverId === senderId) {
                console.log(message.senderId,message.receiverId,senderId)
                messages.push(message);
              }
              cursor.continue();
            }
          };

          transaction.oncomplete = () => {
            console.log("Messages:", messages);
            res(messages);
          };
        };
        get();
      });
    } catch (error) {
      console.error("Error retrieving messages:", error);
    }
  }
}

export const indexDB = new INDEX_DB("chat-store", "messages");
