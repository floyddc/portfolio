import React, { createContext, useState, useContext, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
                                                          // Inizializzazione di i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          flagIcon: '/uk.png',
          skills_title: 'SKILLS',
          li_skills: 'SKILLS',
          li_contacts: 'CONTACTS',
          invioOK: 'Email sent successfully!',
          placeholderEmail: 'Your email address',
          placeholderName: 'Your name',
          placeholderMessage: 'Message',
          errEmail: 'ERR.MAIL: Invalid email address.',
          errName: 'ERR.NAME: Name cannot be empty.',
          errMessage: 'ERR.MSG: Message cannot be empty.',
          sendEmail: 'Send me an email!',
          sendWhatsapp: 'Send me a message!',
          sendMethodEmail: 'Method: Email',
          sendMethodWhatsapp: 'Method: Whatsapp',
          developed_in: '©v2.0 developed in 2024',
          powered_by: 'POWERED BY',
          bachelor_degree_title: "BACHELOR'S DEGREE",
          bachelor_degree_description: "Information Technology Engineering - UniSalento",
          see_all_buttontext: "See all",
          request_service_title: "REQUEST A SERVICE",
          request_service_description: "Ask me for a job or service!",
          text_me_buttontext: "Text me",

          buy_guide_title: "COMING SOON",
          buy_guide_description: "New project...",
          buy_guide_buttontext: "N/D",
          
          masters_degree_title: "MASTER'S DEGREE",
          masters_degree_description: "Engineering and Computer Science - UniBo, Cesena campus",
          year: 'Year',
          cv: "CV - June 2024",

          experiences: "EXPERIENCES",

          erasmus_date: "Jan 2020",
          erasmus_title: "Erasmus+ ITA team member",
          erasmus_sub: 'Escola Profesional "Amar Terra Verde" (Braga) - IISS "Enrico Fermi" (Lecce)',
          erasmus_p: `Took part in a European project which involved the programming and remote control of a pair of robotic arms. Used:
          <li class="erasmus_li">- Python</li>
          <li class="erasmus_li">- NodeRED</li>
          <li class="erasmus_li">- Firebase</li>  
          <li class="erasmus_li">- Arduino</li>
          <li class="erasmus_li">- Raspberry</li>
          <li class="erasmus_li">- G-Code</li>`, 
          
          network_lesson_date: "May 2024",
          network_lesson_title: "NETWORKING LESSON",
          network_lesson_sub: "UniSalento",
          network_lesson_p: "Held a networking lesson regarding my degree thesis on the use and potential of CISCO Packet Tracer to build Smart Homes.",
          
          parsec_date: "Jun 2018 - Jul 2018",
          parsec_title: "SCHOOL-WORK ALTERNANCE",
          parsec_sub: "Parsec 3.26 Srl",
          parsec_p: `Tasks performed:
          <li class="erasmus_li">- Secretariat</li>
          <li class="erasmus_li">- Remote assistance</li>
          <li class="erasmus_li">- Replacement of PC components</li>  
          <li class="erasmus_li">- Internal network maintenance</li>`,

          timeline_bachelor_degree: "BACHELOR'S DEGREE",
          timeline_bachelor_university: "UniSalento",
          timeline_bachelor_description: "Information Technology Engineering. Focus on Computer Science, Electronics and Telecommunication.",
          timeline_bachelor_date: "Sep 2020 - Mar 2024",

          timeline_master_degree: "MASTER'S DEGREE",
          timeline_master_university: "University of Bologna - Cesena campus",
          timeline_master_description: "Engineering and Computer Science. Focus on programming techniques, software quality, AI and digital transformation.",
          timeline_master_date: "Sep 2024 - now",
        }
      },
      it: {
        translation: {
          flagIcon: '/ita.png',
          skills_title: 'COMPETENZE',
          li_skills: 'COMPETENZE',
          li_contacts: 'CONTATTI',
          invioOK: 'Email inviata con successo!',
          placeholderEmail: 'Il tuo indirizzo email',
          placeholderName: 'Il tuo nome',
          placeholderMessage: 'Messaggio',
          errEmail: 'ERR.MAIL: Indirizzo email non valido.',
          errName: 'ERR.NOME: Il nome non può essere vuoto',
          errMessage: 'ERR.MESSAGGIO: Il messaggio non può essere vuoto',
          sendEmail: 'Inviami una email!',
          sendWhatsapp: 'Inviami un messaggio!',
          sendMethodEmail: 'Metodo: Email',
          sendMethodWhatsapp: 'Metodo: Whatsapp',
          developed_in: '©v2.0 sviluppato nel 2024',
          powered_by: 'ALIMENTATO DA',
          bachelor_degree_title: "LAUREA TRIENNALE",
          bachelor_degree_description: "Ingegneria dell'Informazione - UniSalento",
          see_all_buttontext: "Vedi tutto",
          request_service_title: "RICHIEDI SERVIZIO",
          request_service_description: "Commissionami un lavoro o chiedimi aiuto!",
          text_me_buttontext: "Scrivimi",

          buy_guide_title: "IN ARRIVO",
          buy_guide_description: "Nuovo progetto...",
          buy_guide_buttontext: "N/D",

          masters_degree_title: "LAUREA MAGISTRALE",
          masters_degree_description: "Ingegneria e Scienze Informatiche - UniBo, campus di Cesena",
          year: "Anno",
          cv: "CV - Giugno 2024",

          experiences: "ESPERIENZE",
          
          erasmus_date: "Gen 2020",
          erasmus_title: "Membro team ITA Erasmus+",
          erasmus_sub: 'Escola Profesional "Amar Terra Verde" (Braga) - IISS "Enrico Fermi" (Lecce)',
          erasmus_p: `Preso parte ad un progetto europeo che prevedeva la programmazione e il controllo remoto di una coppia di bracci robotici. Sono stati utilizzati:
          <li class="erasmus_li">- Python</li>
          <li class="erasmus_li">- NodeRED</li>
          <li class="erasmus_li">- Firebase</li>  
          <li class="erasmus_li">- Arduino</li>
          <li class="erasmus_li">- Raspberry</li>
          <li class="erasmus_li">- G-Code</li>`,

          network_lesson_date: "Mag 2024",
          network_lesson_title: "LEZIONE DI RETI",
          network_lesson_sub: "UniSalento",
          network_lesson_p: "Tenuto una lezione di Reti riguardante la mia tesi di laurea, circa l'utilizzo e le potenzialità di CISCO Packet Tracer per la costruzione di abitazioni intelligenti.",        
          
          parsec_date: "Giu 2018 - Lug 2018",
          parsec_title: "ALTERNANZA SCUOLA-LAVORO",
          parsec_sub: "Parsec 3.26 Srl",
          parsec_p: `Manzioni svolte:
          <li class="erasmus_li">- Segreteria</li>
          <li class="erasmus_li">- Assistenza da remoto</li>
          <li class="erasmus_li">- Sostituzione componenti PC</li>  
          <li class="erasmus_li">- Manutenzione rete interna</li>`,

          timeline_bachelor_degree: "LAUREA TRIENNALE",
          timeline_bachelor_university: "UniSalento",
          timeline_bachelor_description: "Ingegneria dell'Informazione. Focus su Informatica, Elettronica e Telecomunicazioni.",
          timeline_bachelor_date: "Set 2020 - Mar 2024",

          timeline_master_degree: "LAUREA MAGISTRALE",
          timeline_master_university: "Università di Bologna - Campus di Cesena",
          timeline_master_description: "Ingegneria e Scienze Informatiche. Focus su tecniche di programmazione, qualità del software, IA e trasformazione digitale.",
          timeline_master_date: "Set 2024 - in corso",
        }
      }
      //altre lingue se necessario
    },
    lng: localStorage.getItem('selectedLanguage') || 'en', // lingua predefinita
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleChangeLanguage = () => {
      setLanguage(i18n.language);
    };

    i18n.on('languageChanged', handleChangeLanguage);

    return () => {
      i18n.off('languageChanged', handleChangeLanguage);
    };
  }, []);

  const changeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem('selectedLanguage', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)