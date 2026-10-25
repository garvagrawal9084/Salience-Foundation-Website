import React from 'react';
import youthTrainingImg from '../assets/images/youth_football_training.jpeg';
import culturalArtsImg from '../assets/images/cultural_arts_workshop.jpeg';
import villageCouncilImg from '../assets/images/community_village_council.jpeg';
import girlsMatchImg from '../assets/images/girls_football_match.jpeg';

export const ABOUT_HERO = {
  badge: 'Non-Profit · Section 8 Company · Ranchi, Jharkhand',
  titlePrimary: 'Creating Opportunities',
  titleHighlight: 'For Talent to Grow.',
  subtitle: 'Founded in March 2022 and based in Ranchi, Jharkhand, Salience Foundation is a Section 8 non-profit working to create opportunities for rural talent across sports, arts and culture.',
  quote: 'Our belief is simple: where you come from should never determine how far you can go.',
  primaryCtaText: 'Our Story & Vision',
  secondaryCtaText: 'Contact Us',
};

export const ABOUT_OVERVIEW = {
  headline: 'Creating opportunities for talent to grow.',
  coreBelief: 'Our belief is simple: where you come from should never determine how far you can go.',
  
  // Option 2 Revised Copy
  intro: 'Back in 2012–2013, we often found ourselves wondering why so many talented children in India struggled to get the support they needed to pursue sports. Having experienced similar challenges ourselves, we knew how difficult it could be to follow a passion without the right support and opportunities.',
  
  spark: "We began to wonder: what if we could create something that helped other talented children get the opportunities we had once wished for ourselves? At the time, we were young and busy finding our own paths. We couldn't turn the idea into reality just yet, but we never quite forgot it.",
  
  founding: 'In 2022, we returned to that thought, ready to take the first step towards making it happen. That was the beginning of Salience Foundation. Founded in March 2022 and based in Ranchi, Jharkhand, Salience Foundation is a Section 8 non-profit working to create opportunities for rural talent across sports, arts and culture.',
  
  potential: 'We believe talent can be found everywhere, even where opportunities are limited. From aspiring athletes looking for a chance to compete to individuals discovering their creative abilities and communities keeping their traditions alive, we see so much potential waiting to be nurtured.',
  
  mission: "Through sports, music, dance, theatre, visual arts and cultural initiatives, we want to give people the chance to explore what they're capable of, discover new possibilities and take pride in their talents and traditions.",
  
  vision: 'What began as an idea between three friends has grown into something we care deeply about, a shared vision to help more people find the opportunities, encouragement and support they need to pursue their potential.',
  
  signoff: 'We are Swati Bala, NeelKanth Kumar and Chandan, the people behind Salience Foundation.',
  
  // Founders detail for presentation
  founders: [
    {
      name: 'Swati Bala',
      role: 'Co-Founder',
      initials: 'SB'
    },
    {
      name: 'NeelKanth Kumar',
      role: 'Co-Founder',
      initials: 'NK'
    },
    {
      name: 'Chandan',
      role: 'Co-Founder',
      initials: 'C'
    }
  ],

  // Key story milestones
  milestones: [
    {
      year: '2012–2013',
      badge: 'The Spark',
      title: 'A Shared Reflection',
      desc: 'Wondering why so many talented children in India struggle to find support for sports, and wishing for a better pathway.'
    },
    {
      year: 'Early Years',
      badge: 'The Vision',
      title: 'Holding Onto The Dream',
      desc: "Young and busy building our paths, we couldn't turn the idea into reality immediately, but we never forgot it."
    },
    {
      year: 'March 2022',
      badge: 'The Beginning',
      title: 'Salience Foundation Established',
      desc: 'Returned to the thought with clear purpose: established as a Section 8 non-profit in Ranchi, Jharkhand.'
    }
  ],

  // Full sequential paragraphs matching docx Option 2
  paragraphs: [
    'Back in 2012–2013, we often found ourselves wondering why so many talented children in India struggled to get the support they needed to pursue sports. Having experienced similar challenges ourselves, we knew how difficult it could be to follow a passion without the right support and opportunities.',
    'We began to wonder: what if we could create something that helped other talented children get the opportunities we had once wished for ourselves?',
    "At the time, we were young and busy finding our own paths. We couldn't turn the idea into reality just yet, but we never quite forgot it.",
    'In 2022, we returned to that thought, ready to take the first step towards making it happen. That was the beginning of Salience Foundation.',
    'Founded in March 2022 and based in Ranchi, Jharkhand, Salience Foundation is a Section 8 non-profit working to create opportunities for rural talent across sports, arts and culture.',
    'We believe talent can be found everywhere, even where opportunities are limited. From aspiring athletes looking for a chance to compete to individuals discovering their creative abilities and communities keeping their traditions alive, we see so much potential waiting to be nurtured.',
    "Through sports, music, dance, theatre, visual arts and cultural initiatives, we want to give people the chance to explore what they're capable of, discover new possibilities and take pride in their talents and traditions.",
    'What began as an idea between three friends has grown into something we care deeply about, a shared vision to help more people find the opportunities, encouragement and support they need to pursue their potential.'
  ]
};

export const MULTIFACETED_PILLARS = [
  {
    title: 'Rural Sporting Talents',
    subtitle: 'Unlocking Athletic Potential',
    badge: 'Sports Excellence',
    image: youthTrainingImg,
    desc: 'We identify and nurture exceptional athletes in remote regions, providing access to quality coaching, equipment, nutrition, and competitive platforms so young athletes can reach their full potential.',
    icon: (
      <svg className="w-7 h-7 text-brand-black" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    tags: ['Grassroots Scouting', 'Coaching & Mentorship', 'Tournament Pathways']
  },
  {
    title: 'Artistic Learning & Expression',
    subtitle: 'Music, Dance, Theatre & Visual Arts',
    badge: 'Creative Arts',
    image: culturalArtsImg,
    desc: 'Through music, dance, theatre, and visual arts, we cultivate creative expression and passion, giving individuals the chance to explore what they are capable of and discover new possibilities.',
    icon: (
      <svg className="w-7 h-7 text-brand-black" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    tags: ['Music & Dance', 'Theatre & Drama', 'Visual Arts Workshops']
  },
  {
    title: 'Cultural Heritage & Traditions',
    subtitle: 'Preserving Heritage & Passing It On',
    badge: 'Cultural Development',
    image: villageCouncilImg,
    desc: 'We are committed to celebrating and preserving local cultural traditions and heritage, keeping them alive for future generations while fostering social harmony and community pride.',
    icon: (
      <svg className="w-7 h-7 text-brand-black" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tags: ['Heritage Preservation', 'Cultural Initiatives', 'Tradition & Folklore']
  },
  {
    title: 'Community Transformation',
    subtitle: 'Equal Opportunity for All',
    badge: 'Social Impact',
    image: girlsMatchImg,
    desc: 'Guided by our simple conviction that where you come from should never determine how far you can go, we partner with communities, schools, and families to foster inclusive, lasting growth.',
    icon: (
      <svg className="w-7 h-7 text-brand-black" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    tags: ['Equal Opportunity', 'Gender Equality', 'Community Ownership']
  }
];

export const COLLABORATION_AREAS = [
  {
    title: 'Communities & Families',
    desc: 'Working directly with village elders, families, and youth coordinators to build grassroots trust and establish local training spaces.'
  },
  {
    title: 'Educational Institutions',
    desc: 'Partnering with rural schools and colleges to ensure sports and artistic participation boost learning and academic continuity.'
  },
  {
    title: 'Sports Organisations & Clubs',
    desc: 'Collaborating with regional sports bodies and certified coaches to open competitive pathways and tournament exposure for rural athletes.'
  },
  {
    title: 'Artists & Cultural Practitioners',
    desc: 'Engaging traditional folk artists, music mentors, and cultural practitioners to conduct creative workshops and keep traditions alive.'
  }
];

export const ABOUT_STATS = [
  {
    value: '1200',
    suffix: '+',
    label: 'Youth Reached & Empowered',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  },
  {
    value: '45',
    suffix: '+',
    label: 'Rural Hamlets & Villages',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    value: '42',
    suffix: '%',
    label: 'Female Trainee Ratio',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    value: '100',
    suffix: '%',
    label: 'Free Access for Students',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export const GOVERNANCE_CREDENTIALS = [
  {
    title: 'Section 8 Non-Profit Company',
    desc: 'Founded in March 2022 and registered under Section 8 of the Companies Act, 2013, based in Ranchi, Jharkhand.',
    badge: 'Legal Entity'
  },
  {
    title: 'Section 12A & 80G Compliant',
    desc: 'Donors receive tax exemption benefits under Section 80G of the Income Tax Act, India.',
    badge: 'Tax Exemption'
  },
  {
    title: 'MCA CSR-1 Registered',
    desc: 'Certified with the Ministry of Corporate Affairs for eligible corporate CSR funding and partnerships.',
    badge: 'CSR Eligible'
  },
  {
    title: 'Independent Audited Accounts',
    desc: 'Annual financial and impact audits conducted by certified chartered accountants.',
    badge: 'Audit Verified'
  }
];

export const ABOUT_FAQS = [
  {
    question: 'Where is Salience Foundation based and when was it established?',
    answer: 'Salience Foundation is a Section 8 non-profit organization established in March 2022 and headquartered in Ranchi, Jharkhand. We work to create opportunities for rural talent across sports, arts, and culture.'
  },
  {
    question: 'Who are the people behind Salience Foundation?',
    answer: 'Salience Foundation was founded by Swati Bala, NeelKanth Kumar, and Chandan. What began in 2012–2013 as an idea between three friends has grown into a shared vision to help more people find the opportunities, encouragement, and support they need to pursue their potential.'
  },
  {
    question: 'How did the journey of Salience Foundation begin?',
    answer: 'Back in 2012–2013, we often found ourselves wondering why so many talented children in India struggled to get the support they needed to pursue sports. Having experienced similar challenges ourselves, we knew how difficult it could be to follow a passion without the right support. In 2022, we returned to that thought and officially founded the foundation.'
  },
  {
    question: 'How does Salience Foundation identify and nurture rural sporting talents?',
    answer: 'We organize grassroots trials and athletic screenings in remote villages across Jharkhand and surrounding regions. Enrolled athletes receive free coaching, football gear, physical conditioning, and tournament exposure.'
  },
  {
    question: 'What artistic learning and cultural opportunities are offered beyond sports?',
    answer: 'Through sports, music, dance, theatre, visual arts, and cultural initiatives, we give people the chance to explore what they are capable of, discover new possibilities, and take pride in their talents and traditions.'
  },
  {
    question: 'How can partners and sponsors collaborate with Salience Foundation?',
    answer: 'Corporates, educational institutions, sports bodies, artists, and supporters can partner with us for CSR projects, equipment sponsorship, or academy infrastructure development. You can reach out directly via our Contact page.'
  }
];
