export interface Picture {
    large:     string;
    medium:    string;
    thumbnail: string;
}

export interface Location {
    city:  string;
}

// export enum Gender {
//     Female = "female",
//     Male = "male",
// }

export interface Name {
    title: Title;
    first: string;
    last:  string;
}

export enum Title {
    MS = "Ms",
    Mr = "Mr",
    Mrs = "Mrs",
}

// export interface ID {
//     name:  string;
//     value: null | string;
// }

export interface ContributorT {
    cell: string;
    name:       Name;
    location:   Location;
    picture:    Picture;
}
