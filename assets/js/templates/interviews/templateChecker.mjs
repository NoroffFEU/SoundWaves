import { estebanInterviewTemplate } from "./estebanInterview.mjs";
import { matsInterviewTemplate } from "./matsInterview.mjs";
import { stigInterviewTemplate } from "./stigInterview.mjs";
import { zearInterviewTemplate } from "./zearInterview.mjs";

export function checkTemplateByID(id) {
    switch (id) {
        case "0ebe0ca1-fc6d-459f-929b-8245a3b6db5c":
            return matsInterviewTemplate();
            break;

        case "79701330-b132-46c5-8f12-7531911837bf":
            return stigInterviewTemplate();
            break;

        case "ac37dfd5-d18d-4fca-b791-1c8ef360c253":
            return zearInterviewTemplate();
            break;

        case "fabafbe7-9456-4752-9035-ff9ace4dcae0":
            return estebanInterviewTemplate();
            break;
            
        default:
            return `<div></div>`;
    }
}