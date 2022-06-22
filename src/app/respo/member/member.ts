import { Labo } from "src/app/admin/labo/labo";
import { AchatMaterial } from "../besoin/AchatMateriel";
import { Besoin } from "../besoin/besoin";
import { FraisInscription } from "../besoin/FraisInscription";
import { Mobilite } from "../besoin/Mobilite";
import { BudgetMember } from "./budgetmember";

export class Member {
    userId: number;
    login: String;
    password: String;
    nom: String;
    prenom: String;
    cin: String;
    laboratoire : Labo;
    budgetMembres: BudgetMember[];
    fraisInscriptions: FraisInscription[];
    mobilites : Mobilite[];
    achatMateriels: AchatMaterial[];

}