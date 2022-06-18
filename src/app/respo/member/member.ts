import { Labo } from "src/app/admin/labo/labo";
import { BudgetMember } from "./budgetmember";

export class Member {
    userId: number;
    login: String;
    password: String;
    nom: String;
    prenom: String;
    cin: String;
    laboratoire : Labo;
    budgetMembres: BudgetMember;
}