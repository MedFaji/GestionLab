import { Member } from "src/app/respo/member/member";
import { Budget } from "../../respo/budget/Budget";
import { Respo } from "../respo/respo";
export class Labo {
    id: number;
    nomLabo: string;
    depatement: string;
    budgetsLabo: Budget[];
    responsable : Respo;
    membres: Member[]
}
