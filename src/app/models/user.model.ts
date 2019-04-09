export class User {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public img?: string,
        public role?: string,
        public google?: boolean,
        // tslint:disable-next-line:variable-name
        public _id?: string

    ) {}
}
