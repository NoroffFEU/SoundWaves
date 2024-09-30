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
    case "91b5ac6a-db6d-4cb0-b4fc-9c1a8a85ec4a": // Mats Interview
      return matsInterviewTemplate();
      break;

    case "137fbde7-a0c7-4a6f-afa9-a5013b97bc6d": // Stig Interview
      return stigInterviewTemplate();
      break;

    case "9195bd3d-1745-4fb7-b005-91cd8dba2ebc": // Zear Interview
      return zearInterviewTemplate();
      break;

    case "22e9b46e-f973-4849-89b6-e29f02f8bc3c": // Esteban Interview
      return estebanInterviewTemplate();
      break;

    case "f04716f9-8d93-452d-a2d3-f6e3a9270e9a": // Adrian Interview
      return adrianInterviewTemplate();
      break;

    case "8e2ee29e-51a5-49ff-ad80-5923dd656fd4": // Music Apps Review
      return musicAppsReviewTemplate();
      break;

    case "1811b890-4341-4096-820e-9ba201dcc71b": // AI Music Review
      return aiMusicReviewTemplate();
      break;

    case "fabb8f54-480e-4097-9381-4b5f9dffdd5a": // Acree Review
      return acreeReviewTemplate();
      break;

    case "88adc83f-2cdc-4938-99ca-1255e0ccfb37": // Synth Review
      return synthReviewTemplate();
      break;

    case "70900d1c-1b26-4038-bec9-a2d90282548c": // Ghibli Review
      return ghibliReviewTemplate();
      break;

    case "6c11e64a-d3ce-4b91-b26f-a0553da5bf54": // Emotions Review
      return emotionsReviewTemplate();
      break;

    case "be416e39-029d-4ddf-a251-0d90af490480": // Handpan Review
      return handpanReviewTemplate();
      break;

    case "ef5b4806-5fbd-4618-95a9-411ffe3617b4": // Record Music Review
      return recordMusicReviewTemplate();
      break;

    case "eed6bad4-9deb-4662-90ac-c3d70ffaa6e7": // Prepare Concert Review
      return prepareConcertReviewTemplate();
      break;

    case "b9f814b0-3a77-473d-8931-3be0b718ab4e":
      return headphonesReviewTemplate();
      break;

    default:
      return `<div></div>`;
  }
}
