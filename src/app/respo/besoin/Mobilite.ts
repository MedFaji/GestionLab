import { Member } from "../member/member";
import { Besoin } from "./besoin";

export class Mobilite extends Besoin {

    ReferenceBillet: String;
    prixBillet: String;
    FarisSejour: String;
    membre: Member;
    
}