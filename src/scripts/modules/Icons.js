import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faEnvelope, faPhoneAlt, faHome, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faWhatsapp, faSkype, faInstagram, faVk, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

library.add(
  faEnvelope,
  faTelegram,
  faWhatsapp,
  faSkype,
  faPhoneAlt,
  faHome,
  faInstagram,
  faVk,
  faFacebookSquare,
  faCheck,
);

dom.watch();
