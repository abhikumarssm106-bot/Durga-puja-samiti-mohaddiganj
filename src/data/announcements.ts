export interface Announcement {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  important: boolean;
  time?: string;
  icon?: string;
}

export const announcementsData: Announcement[] = [
  {
    id: 'a1',
    title: 'महा आरती और संधि पूजा',
    date: '07 अक्टूबर, 2024',
    time: 'शाम 7:00 बजे',
    description: 'हजारों भक्तों की उपस्थिति में 108 कमल अर्पण और 108 दीप प्रज्ज्वलन का विशेष समारोह।',
    category: 'महा सप्तमी',
    important: true,
    icon: 'wb_twilight'
  },
  {
    id: 'a2',
    title: 'भव्य सांस्कृतिक संध्या',
    date: '08 अक्टूबर, 2024',
    time: 'रात 8:00 बजे',
    description: 'पारंपरिक धुनुची नाच प्रतियोगिता, प्रामाणिक कासर-घंटा और शंख वादन के साथ।',
    category: 'महा अष्टमी',
    important: true,
    icon: 'theater_comedy'
  },
  {
    id: 'a3',
    title: 'विसर्जन शोभा यात्रा',
    date: '12 अक्टूबर, 2024',
    time: 'शाम 4:00 बजे',
    description: 'मोहद्दीगंज के निर्धारित ऐतिहासिक मार्गों से होते हुए माँ दुर्गा की भव्य पवित्र विसर्जन यात्रा।',
    category: 'विजयादशमी',
    important: true,
    icon: 'water_drop'
  }
];
