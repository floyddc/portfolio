import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Recupera la lingua salvata in localStorage

// Configurazione di base di i18next
i18n
  .use(initReactI18next) // Utilizza il plugin di react-i18next
  /*.init({
    resources: {
      en: {
        translation: {
          flagIcon: '/english_flag.png',
          aboutme: `Hi! I'm Diego, I'm 22yo and in March I graduated in Information Technology Engineering, at "Università del Salento". In September I'll move to Cesena to begin the Engineering and Computer Sciences Master's Degree, at "Università di Bologna". I've been studying Computer Science since high school and I really like this field. I'm mainly interested in:
- Cybersecurity
- Networking
- Web Development
On my website you'll find everything I've produced in these last years. Enjoy!`,
          welcome: 'Welcome to our site!',
          buttonLabel: 'Switch to Italian'
          
        }
      },
      it: {
        translation: {
          flagIcon: '/italian_flag.png',
          aboutme: `Ciao! Mi chiamo Diego, ho 22 anni e a Marzo mi sono laureato in Ingegneria dell'Informazione, presso "Università del Salento". A Settembre mi trasferirò a Cesena per iniziare la Magistrale in Ingegneria e Scienze Informatiche, presso "Università di Bologna". Studio informatica dalle scuole superiori e mi piace molto questo settore. Sono particolarmente interessato agli ambiti:
- Sicurezza informatica
 - Reti
- Sviluppo web
Sul mio sito troverai tutto ciò che ho prodotto in questi ultimi anni. Buona navigazione!`,
          welcome: 'Benvenuti nel nostro sito!',
          buttonLabel: 'Cambia in Inglese'
        }
      }
      // Aggiungi altre lingue secondo necessità
    },
    lng: selectedLanguage, // Lingua predefinita
    fallbackLng: 'en', // Lingua di fallback se la lingua corrente non ha traduzioni disponibili
    interpolation: {
      escapeValue: false // Evita l'escape automatico di HTML e altri caratteri speciali
    }
  });*/

export default i18n