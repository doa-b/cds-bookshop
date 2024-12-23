using {sap.capire.bookshop as my} from '../db/schema';

// user alice is a default user with admin prileges. No password

service AdminService @(requires: 'authenticated-user') {
    entity Books   as projection on my.Books;
    entity Authors as projection on my.Authors;
}
