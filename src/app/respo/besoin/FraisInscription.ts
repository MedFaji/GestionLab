import { Member } from "../member/member";
import { Besoin } from "./besoin";

export class FraisInscription extends Besoin{
     
     referenceConference: String;
     fraisInscription: number;
     membre: Member;
}