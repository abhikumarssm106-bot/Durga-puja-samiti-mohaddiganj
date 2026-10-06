export interface ScheduleItem {
  id: string;
  date: string;
  day: string;
  time: string;
  title: string;
  description: string;
  venue: string;
  category: 'Morning' | 'Afternoon' | 'Evening' | 'Night';
}

export const scheduleData: ScheduleItem[] = [
  {
    id: '1',
    date: '09 अक्टूबर, 2024',
    day: 'महा षष्ठी',
    time: 'सुबह 08:00 बजे',
    title: 'कल्पारंभ और बोधन',
    description: 'पवित्र वैदिक मंत्रों और कलश स्थापना के साथ देवी का आह्वान।',
    venue: 'मुख्य पंडाल',
    category: 'Morning',
  },
  {
    id: '2',
    date: '09 अक्टूबर, 2024',
    day: 'महा षष्ठी',
    time: 'शाम 06:30 बजे',
    title: 'संध्या आरती',
    description: 'पहली शाम की आरती और भव्य पंडाल में भक्तों का स्वागत।',
    venue: 'मुख्य पंडाल',
    category: 'Evening',
  },
  {
    id: '3',
    date: '10 अक्टूबर, 2024',
    day: 'महा सप्तमी',
    time: 'सुबह 09:00 बजे',
    title: 'नवपत्रिका स्थापना',
    description: 'कोलाबोउ (नवपत्रिका) का स्नान और स्थापना।',
    venue: 'मुख्य पंडाल',
    category: 'Morning',
  },
  {
    id: '4',
    date: '10 अक्टूबर, 2024',
    day: 'महा सप्तमी',
    time: 'दोपहर 12:30 बजे',
    title: 'महा भोग वितरण',
    description: 'पवित्र खिचड़ी और लाबड़ा प्रसाद का वितरण।',
    venue: 'प्रसाद काउंटर',
    category: 'Afternoon',
  },
  {
    id: '5',
    date: '11 अक्टूबर, 2024',
    day: 'महा अष्टमी',
    time: 'सुबह 10:00 बजे',
    title: 'पुष्पांजलि',
    description: 'भक्त पवित्र मंत्रों के साथ माँ दुर्गा को फूल अर्पित करते हैं।',
    venue: 'मुख्य पंडाल',
    category: 'Morning',
  },
  {
    id: '6',
    date: '11 अक्टूबर, 2024',
    day: 'महा अष्टमी',
    time: 'रात 11:45 बजे',
    title: 'संधि पूजा',
    description: '108 कमल और 108 दीपों के साथ अष्टमी और नवमी की पवित्र संधि।',
    venue: 'मुख्य पंडाल',
    category: 'Night',
  },
  {
    id: '7',
    date: '12 अक्टूबर, 2024',
    day: 'महा नवमी',
    time: 'दोपहर 12:00 बजे',
    title: 'नवमी होम',
    description: 'विश्व शांति और समृद्धि के लिए महा यज्ञ।',
    venue: 'यज्ञ शाला',
    category: 'Morning',
  },
  {
    id: '8',
    date: '13 अक्टूबर, 2024',
    day: 'विजयादशमी',
    time: 'सुबह 09:00 बजे',
    title: 'सिंदूर खेला',
    description: 'विवाहित महिलाएँ देवी और एक-दूसरे को सिंदूर लगाती हैं।',
    venue: 'मुख्य पंडाल',
    category: 'Morning',
  },
  {
    id: '9',
    date: '13 अक्टूबर, 2024',
    day: 'विजयादशमी',
    time: 'शाम 04:00 बजे',
    title: 'विसर्जन शोभा यात्रा',
    description: 'प्रतिमा विसर्जन के लिए भव्य शोभा यात्रा।',
    venue: 'मोहद्दीगंज मार्ग',
    category: 'Afternoon',
  },
];
