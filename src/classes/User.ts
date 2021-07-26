import { boolean } from "yup/lib/locale";

export class User {
    public id ?:number;
    public username : string;
    public firstname: string;
    public lastname: string;
    public is_admin: boolean;
    public is_manager: boolean;
    public image?: string;
    public phone?: string;
    public profession?: string;

    constructor({id, username, firstname, lastname, is_admin, is_manager, image, phone, profession}){
        this.username = username
        this.firstname = firstname
        this.id = parseInt(id);
        this.lastname = lastname,
        this.is_admin = is_admin;
        this.is_manager = is_manager;
        this.image = image;
        this.phone = phone;
        this.profession = profession;
    }
}
