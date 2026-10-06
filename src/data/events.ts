export interface CulturalEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  image: string;
  category: string;
}

export const eventsData: CulturalEvent[] = [
  {
    id: 'e1',
    title: 'Bhajan & Kirtan Sandhya',
    date: 'Oct 06, 2024',
    time: '8:00 PM',
    venue: 'Main Stage',
    description: 'Soul-stirring classical and folk bhajans presented by distinguished vocalists of Sasaram and Varanasi.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXw_XoK8iArbfveNKOSn7yFPw8e1GGPwwlIacfNOgB3jBP5yVx63KOzG1kjKb7Rn0At_z-5GcduGTpwty_wcTPhycoWtYVxiFB3GtiC9JqM35PhGD4xCibiC37OozuXnThMLNiYyCiKwsdIHKbdY1o16-vN5TNNIuBACvD-SdeCvROomyLG9DvmEShoJzn-5fhO0Oobw7i0LP9HdbaCvs4_5AYRl1tHSTB4v9lJAWUbKH1j_N-9afM',
    category: 'Devotional Melody',
  },
  {
    id: 'e2',
    title: 'Mega Dhunuchi Naach',
    date: 'Oct 08, 2024',
    time: '7:30 PM',
    venue: 'Pandal Courtyard',
    description: 'Spectacular traditional dance with smoldering earthen incense burners performed to fast-tempo dhak beats.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-8CUcgdkUuJjb4EZSI_3yTYhTJWSsh9uvBta0N4sRge4klbR00IXDz1XPV1oowDcOBXDMfyY_Ro77D66PVujlb4qPQDbnT0HdQ6GBtpR2kkzLXOaacK73WSl0-SFKkNs5CNv4lfhIwKrpZ1zlYje-YJD6kNDSPJdWriPyKWf5BUtfkoXHa_OGTohD2g7m-EEYaQbkuJrn49zglN8dP5kLR5eIfT3aAvHFx2_gchmyrS3SPiDGwzCJ',
    category: 'Sacred Dance',
  },
  {
    id: 'e3',
    title: 'Sasaram Lok-Natya & Sloka Recitation',
    date: 'Oct 09, 2024',
    time: '6:30 PM',
    venue: 'Auditorium',
    description: 'Chandi Path recital by youth scholars followed by historic Mahishasuramardini dance drama.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfRf5FxQ4v_92b0g808a_Wz-EK5CWPy8HG-5MWbVC75XekN0pDZCY2I0eR20wCLZQpbmgX-kTeONrtQ557RbkrbDEuN0Kf5gOh7SE_ZFbsP-Dwr1gavQM2xlvwtQmQXgQQUnswgD_XIvj5OAgXKbxdchj3Q-Y-ET-7iQklww8fiGclYmxOMBPQ-KU7x-5-y0qtms8HioMrNavXZMaCZhronDRrOBNJP1NJ9ClWL_cS8pK2AZUmsyn9',
    category: 'Folklore & Recitation',
  }
];
