function formatValue(input: string | number | boolean): string | number | boolean {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    if (typeof input === "number") {
        return input * 10;
    }
    return !input;
}


function getLength(data: string | any[]): number {
    if (typeof data === "string") {
        return data.length;
    }
    if (Array.isArray(data)) {
        return data.length;
    }
    return 0;
}


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}


interface RatedItem {
    title: string;
    rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[] {
    return items.filter(item => item.rating >= 4);
}


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive === true);
}



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`;
}


function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
  const uniqueValues: (string | number)[] = [];

  for (const value of arr1) {
    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    }
  }

  for (const value of arr2) {
    if (!uniqueValues.includes(value)) {
      uniqueValues.push(value);
    }
  }

  return uniqueValues;
}


interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    const discountRate = product.discount ?? 0;
    const discountedPrice = product.price - (product.price * discountRate) / 100;
    return total + discountedPrice * product.quantity;
  }, 0);
}











