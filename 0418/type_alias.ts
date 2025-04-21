/// type TYPE_ALIAS = {(prop:)TYPE; ...}


let userId: string;

type UserID = string;

let id: UserID = "abc123"; // let id: string = 

type User = {
    id: number;
    name: string;
    isAdmin: boolean;
};

const u1: User = {
    id: 1,
    name: "코난",
    isAdmin: true,
};

const something = ({ id, name, isAdmin }: User) => {
    // DO something...

    //console.log(User);
    console.log(id, name, isAdmin);
}

something(u1);