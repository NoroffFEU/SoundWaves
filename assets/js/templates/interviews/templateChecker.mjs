import { acreeReviewTemplate } from "./acreeReview.mjs";
import { adrianInterviewTemplate } from "./adrianInterview.mjs";
import { aiMusicReviewTemplate } from "./aiMusicReview.mjs";
import { emotionsReviewTemplate } from "./emotionsReview.mjs";
import { estebanInterviewTemplate } from "./estebanInterview.mjs";
import { ghibliReviewTemplate } from "./ghibliReview.mjs";
import { handpanReviewTemplate } from "./handpanReview.mjs";
import { headphonesReviewTemplate } from "./headphonesReview.mjs";
import { matsInterviewTemplate } from "./matsInterview.mjs";
import { musicAppsReviewTemplate } from "./musicAppsReview.mjs";
import { prepareConcertReviewTemplate } from "./prepareConcertReview.mjs";
import { recordMusicReviewTemplate } from "./recordMusicReview.mjs";
import { stigInterviewTemplate } from "./stigInterview.mjs";
import { synthReviewTemplate } from "./synthReview.mjs";
import { zearInterviewTemplate } from "./zearInterview.mjs";

export function checkTemplateByID(id) {
    switch (id) {
        case "0ebe0ca1-fc6d-459f-929b-8245a3b6db5c":
            return matsInterviewTemplate();
            break;

        case "79701330-b132-46c5-8f12-7531911837bf": // Stig Interview
            return stigInterviewTemplate();
            break;

        case "ac37dfd5-d18d-4fca-b791-1c8ef360c253": // Zear Interview
            return zearInterviewTemplate();
            break;

        case "fabafbe7-9456-4752-9035-ff9ace4dcae0": // Esteban Interview
            return estebanInterviewTemplate();
            break;
        
        case "86e02a65-612a-44b3-a5a1-ccf7317432d3": // Adrian Interview
            return adrianInterviewTemplate();
            break;

        case "523c8f70-259a-40be-8a71-ac8b85a9f7e1": // Music Apps Review
            return musicAppsReviewTemplate();
            break;

        case "9abede27-6cf7-4eb9-a079-7f6d27c7ca86": // AI Music Review
            return aiMusicReviewTemplate();
            break;
        
        case "cf075d23-ffd0-48fd-b1c5-c602f926ee15": // Acree Review
            return acreeReviewTemplate();
            break;

        case "254d3e4b-840e-44e8-ae2c-afb49a50235b": // Synth Review
            return synthReviewTemplate();
            break;

        case "70900d1c-1b26-4038-bec9-a2d90282548c": // Ghibli Review
            return ghibliReviewTemplate();
            break;

        case "deb1d673-c6dd-400d-b002-562d75a97a26": // Emotions Review
            return emotionsReviewTemplate();
            break;

        case "a1758759-8aaf-4686-a7a0-cdfa5f4eac51": // Handpan Review
            return handpanReviewTemplate();
            break;
            
        case "1168d803-ae95-4b77-9b3b-7b6e9f5e3548": // Record Music Review
            return recordMusicReviewTemplate();
            break;

        case "36fb6002-23fc-40ec-b559-2085f2a78fc7": // Prepare Concert Review
            return prepareConcertReviewTemplate();
            break;

        case "039c4468-0510-4f04-87bf-b615fa9a3a80":
            return headphonesReviewTemplate();
            break;

        default:
            return `<div></div>`;
    }
}