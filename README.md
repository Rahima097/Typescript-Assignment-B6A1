# **Blog Post 1: What are some differences between interfaces and types in TypeScript?**

TypeScript-এ `interface` এবং `type` দুটোই object-এর shape বা structure নির্ধারণ করতে ব্যবহার করা হয়। তবে দুটির মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।

### 1. **Extension / Inheritance**
- `interface` সহজে extend করা যায়।
- `type` extend করা যায়, তবে তা union বা intersection ব্যবহার করে করতে হয়।

#### উদাহরণ:

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  position: string;
}

type Person = {
  name: string;
  age: number;
};

type Employee = Person & {
  position: string;
};

### 2. **Declaration Merging**
- `interface` auto-merge হতে পারে।
- `type` কখনো merge হতে পারে না।

### 3. **Use Case**
- `interface` সাধারণত objects, classes, API structure ইত্যাদির জন্য ব্যবহার হয়।
- `type` ব্যবহার হয়: union types, primitive aliases, function signatures, complex mapped types ইত্যাদিতে।


# **Blog Post 2: What is the use of the keyof keyword in TypeScript? Provide an example.**

keyof TypeScript-এর একটি শক্তিশালী keyword যা একটি object-এর সমস্ত key থেকে union type তৈরি করে। এটি টাইপ-সেইফ function লিখতে অসাধারণভাবে সহায়ক।
একটি object-এর keys সংগ্রহ করে একটি union type বানায়।

#### উদাহরণ:

interface User {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User;

### 2. Function-এ keyof ব্যবহার

এটি function-কে নিশ্চিত করে যে কেবলমাত্র valid key-ই ব্যবহার করা হচ্ছে।

### 3. keyof + Generics = Type Safety Boost

এটি ভুল property assign হওয়া সম্পূর্ণভাবে প্রতিরোধ করে।