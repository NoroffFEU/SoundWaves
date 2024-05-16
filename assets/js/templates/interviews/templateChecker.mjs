import { estebanInterviewTemplate } from "./estebanInterview.mjs";
import { matsInterviewTemplate } from "./matsInterview.mjs";
import { stigInterviewTemplate } from "./stigInterview.mjs";
import { zearInterviewTemplate } from "./zearInterview.mjs";

export function checkTemplateByID(id) {
    switch (id) {
        case "79701330-b132-46c5-8f12-7531911837bf":
            return matsInterviewTemplate();
            break;

        case "cf075d23-ffd0-48fd-b1c5-c602f926ee15":
            return stigInterviewTemplate();
            break;

        case "523c8f70-259a-40be-8a71-ac8b85a9f7e1":
            return zearInterviewTemplate();
            break;

        case "9abede27-6cf7-4eb9-a079-7f6d27c7ca86":
            return estebanInterviewTemplate();
            break;
            
        default:
            return `<div></div>`;
    }
}