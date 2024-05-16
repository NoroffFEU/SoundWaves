import { matsInterviewTemplate } from "./matsInterview.mjs";

export function checkTemplateByID(id) {
    switch (id) {
        case "79701330-b132-46c5-8f12-7531911837bf":
            return matsInterviewTemplate();
            break;
        default:
            return `<div></div>`;
    }
}