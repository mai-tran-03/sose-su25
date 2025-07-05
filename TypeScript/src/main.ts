// function
const getFullName = (given_name: string, surname: string): string => {
    return given_name + " " + surname;
};

console.log(getFullName("Me", "Too"));

type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null;

// object -> interface
interface IUser {
    id: ID;
    name: string;
    age?: number; // make optional
    getMessage(): string;
}

const user: IUser = {
    id: "1",
    name: "MT",
    age: 20,
    getMessage() {
        return "Hello" + name;
    }
};

const user2: IUser = {
    id: "2",
    name: "TT",
    getMessage() {
        return "Hello" + name;
    },
};

console.log(user.name);

// union
const popularTags: PopularTag[] = ["now", "future"];
const nowTag: MaybePopularTag = "now"; // values: null, str, not others

let userName: string = "user";
let pageName: string | number = "1";
let errorMessage: string | null = null;

let user3: IUser | null = null;

// no return
const doSmth = (): void => {
    console.log("doSmth");
};

let foo: any = "foo"; // no ts checks, avoid using any

// function never end
const neverEnd = (): never => {
    throw "never";
};