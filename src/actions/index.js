import { uxDesign } from '../data/pages/UXDesign';
import { identityDesign } from '../data/pages/IdentityDesign';
import { printDesign } from '../data/pages/PrintDesign';
import { webDev } from '../data/pages/WebDev';

export const FETCH_CATEGORY = 'FETCH_CATEGORY';
export const MODAL_ON = 'MODAL_ON';
export const MODAL_OFF = 'MODAL_OFF';

export function fetchCategory(path) {
  let request;

  switch (path) {
    case 'web-ux-design':
      request = uxDesign;
      break;
    case 'identity-design':
      request = identityDesign;
      break;
    case 'print-design':
      request = printDesign;
      break;
    case 'web-ios-development':
      request = webDev;
      break;
    default:
      request = uxDesign;
  }

  return {
    type: FETCH_CATEGORY,
    payload: request
  };
}

export function openModal(image) {
  return {
    type: MODAL_ON,
    payload: image
  };
}

export function closeModal() {
  return {
    type: MODAL_OFF,
    payload: null
  };
}
