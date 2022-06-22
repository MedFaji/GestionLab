import { Member } from "../member/member";
import { Besoin } from "./besoin";

export class AchatMaterial extends Besoin {
    libelle: String;
    prixMateriel: number;
    membre: Member;
}