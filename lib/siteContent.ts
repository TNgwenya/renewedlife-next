const facebookHref = 'https://www.facebook.com/renewedlifeint/';
const instagramHref = 'https://www.instagram.com/renewedlifeint/';
const youtubeHref = 'https://www.youtube.com/@renewedlifeinternational2138';

function getValidSiteUrl() {
  const fallbackUrl = 'https://renewedlifeint.com';
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawSiteUrl) {
    return fallbackUrl;
  }

  try {
    const parsedUrl = new URL(rawSiteUrl);

    if (parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:') {
      return parsedUrl.toString().replace(/\/$/, '');
    }
  } catch {
    return fallbackUrl;
  }

  return fallbackUrl;
}

const siteUrl = getValidSiteUrl();

export const formspreeEndpoint =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mbdzdvpn';

export const churchInfo = {
  name: "Renewed Life",
  legalName: "Renewed Life International",
  shortName: "Renewed Life",
  tagline: "Believe. Belong. Become.",
  brandIdea:
    "A local church where people encounter God, are rooted in the Word, and are welcomed into genuine spiritual family.",
  websiteHref: siteUrl,
  city: "Dube, Soweto, Johannesburg",
  venue: "Mampuru Hall",
  addressLine1: "01621 Sobuza Street",
  addressLine2: "Dube, Soweto, 1800",
  addressLine3: "Johannesburg, South Africa",
  phoneDisplay: "+27 61 436 4130",
  phoneHref: "tel:+27614364130",
  email: "info@renewedlifeint.com",
  emailHref: "mailto:info@renewedlifeint.com",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Mampuru+Hall,+01621+Sobuza+Street,+Dube,+Soweto,+1800,+South+Africa",
  mapEmbedSrc:
    'https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sMampuru+Hall,+01621+Sobuza+Street,+Dube,+Soweto,+South+Africa',
  whatsappBaseHref: 'https://wa.me/27614364130',
  whatsappHref:
    'https://wa.me/27614364130?text=Hi%20Renewed%20Life%2C%20I%E2%80%99d%20like%20more%20information%20about%20visiting%20on%20Sunday.',
  whatsappVisitFollowupHref:
    'https://wa.me/27614364130?text=Hi%20Renewed%20Life%2C%20I%E2%80%99ve%20just%20planned%20my%20visit%20and%20I%E2%80%99m%20looking%20forward%20to%20joining%20you.',
  whatsappPrayerHref:
    'https://wa.me/27614364130?text=Hi%20Renewed%20Life%2C%20I%20would%20like%20prayer%20%2F%20pastoral%20support.',
  givingPrimaryHref: 'mailto:info@renewedlifeint.com',
  givingPrimaryLabel: 'Email the church office',
  whatsappGivingHref:
    'https://wa.me/27614364130?text=Hi%20Renewed%20Life%2C%20I%20would%20like%20help%20with%20giving%20details.',
  livestreamHref: youtubeHref,
  youtubeHref,
  serviceTimes: [
    { label: "Sunday Service", time: "10:00 AM – 1:00 PM" },
    { label: "Bible Study", time: "Wednesday · 6:00 PM – 8:00 PM" },
  ],
  weeklyRhythm: [
    { label: "Sunday Service", day: "Sunday", time: "10:00 AM – 1:00 PM" },
    { label: "Bible Study", day: "Wednesday", time: "6:00 PM – 8:00 PM" },
    { label: "Connect Groups", day: "Tuesday", time: "6:00 PM – 7:30 PM" },
    { label: "Youth Connect", day: "Thursday", time: "8:00 PM – 9:00 PM · monthly" },
    { label: "Women Connect", day: "Thursday", time: "6:00 PM – 7:00 PM · fortnightly" },
    { label: "Men’s Breakfast", day: "Saturday", time: "8:00 AM – 12:00 PM · monthly" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Plan Your Visit", href: "/plan-your-visit" },
  { label: "About", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Sermons", href: "/sermons" },
  { label: "Events", href: "/events" },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

export const upcomingEvents = [
  {
    title: 'Youth Connect',
    date: '14 March 2026',
    time: '18:00',
    venue: 'Mampuru Hall',
    description: 'A youth gathering for worship, prayer, and practical biblical encouragement.',
    recurrence: 'Recurring monthly',
    ctaLabel: 'WhatsApp to register',
    ctaHref: `${churchInfo.whatsappBaseHref}?text=${encodeURIComponent('Hi Renewed Life, I would like to register for Youth Connect on 14 March 2026.')}`,
  },
  {
    title: 'Passover Conference',
    date: '1 April - 5 April 2026',
    time: '18:00',
    venue: 'Mampuru Hall',
    description: 'The Lamb that takes away our sins.',
    recurrence: 'Conference event',
    ctaLabel: 'WhatsApp to register',
    ctaHref: `${churchInfo.whatsappBaseHref}?text=${encodeURIComponent('Hi Renewed Life, I would like to register for the Passover Conference.')}`,
  },
  {
    title: 'Night Prayer',
    date: '20 March 2026',
    time: '18:00 - 3:00 AM',
    venue: 'Mampuru Hall',
    description: 'A night of prayer and worship.',
    recurrence: 'Special prayer gathering',
    ctaLabel: 'WhatsApp to register',
    ctaHref: `${churchInfo.whatsappBaseHref}?text=${encodeURIComponent('Hi Renewed Life, I would like to register for Night Prayer on 20 March 2026.')}`,
  },
];

export const homepageActions = [
  {
    title: "Plan your first Sunday",
    description: "Get service times, directions, and a simple guide to your first Sunday at Mampuru Hall.",
    href: "/plan-your-visit",
    actionLabel: 'Plan my first Sunday',
  },
  {
    title: "Watch a recent message",
    description: "Watch a recent sermon and get a feel for the preaching, worship, and spiritual direction of the church.",
    href: "/sermons",
    actionLabel: 'Watch a sermon',
  },
  {
    title: "Visit with your family",
    description: "See practical reassurance for parents, children, and first-time family visits before Sunday arrives.",
    href: "/families",
    actionLabel: 'See the family guide',
  },
  {
    title: "Find your next step",
    description: "Explore ministries, connect groups, and practical ways to become rooted in the life of the church.",
    href: "/ministries",
    actionLabel: 'See ministries',
  },
  {
    title: "Connect with us",
    description: "Reach out with questions, prayer needs, or to let us know you are joining us this Sunday.",
    href: "/contact",
    actionLabel: 'Contact the church',
  },
];

export const coreValues = [
  {
    title: "Believe",
    description: "We lead people to trust Jesus, stand on Scripture, and live by the power of the Holy Spirit.",
    scriptures: [
      'Trust in the Lord with all your heart. Proverbs 3:5',
      'Your word is a lamp to my feet and a light to my path. Psalm 119:105',
    ],
  },
  {
    title: "Belong",
    description: "Church is family. We are building a spiritual home where every generation can be welcomed, known, and strengthened.",
    scriptures: [
      'So we, though many, are one body in Christ, and individually members one of another. Romans 12:5',
      'How good and pleasant it is when brothers dwell in unity. Psalm 133:1',
    ],
  },
  {
    title: "Become",
    description: "We want believers to grow into maturity, discover their God-given purpose, and live with courage and conviction.",
    scriptures: [
      'Until we all attain... to mature manhood, to the measure of the stature of the fullness of Christ. Ephesians 4:13',
      'We are his workmanship, created in Christ Jesus for good works. Ephesians 2:10',
    ],
  },
];

export const churchStory =
  "Renewed Life International was birthed in response to God’s call in late 2018 and officially launched on 6 January 2019. What began in the pastors’ lounge with the founding family, simple faith, and very limited resources has grown into a Christ-centered church committed to transformed lives through the Word of God, the power of the Holy Spirit, and genuine Christian fellowship.";

export const churchStoryMoments = [
  {
    label: '2018',
    title: 'A call from God',
    description:
      'Renewed Life International was birthed in response to God’s call, with a burden to build a Christ-centered church family grounded in the Word and the Spirit.',
  },
  {
    label: '2019',
    title: 'Official launch',
    description:
      'The church officially launched on 6 January 2019 and began gathering people into worship, discipleship, prayer, and community.',
  },
  {
    label: 'Today',
    title: 'Growing with purpose',
    description:
      'Renewed Life continues to grow as a church family marked by worship, prayer, biblical teaching, and a heart for people.',
  },
];

export const missionStatement =
  "Our mission is to reach the unchurched with the gospel of Jesus Christ, make disciples, and equip believers for works of service and their God-ordained purpose, so that the Body of Christ may be built up into maturity and the fullness of Christ.";

export const visionStatement =
  "Our vision is to become a body of Holy Spirit-filled believers whose minds and lives are transformed to live above reproach, triumph in every situation, and impact the world around them for the glory of God.";

export const ministries = [
  {
    title: "Women’s Ministry",
    description: "A space where women pray together, encourage one another, and grow as disciples of Jesus in everyday life.",
    audience: "Women of all ages",
    rhythm: "Fortnightly and during special gatherings",
    cta: "Join the Women’s Ministry",
    whatHappens: "Prayer, biblical encouragement, honest conversation, and practical strengthening for everyday life.",
    nextStepDescription: "Message the church team and ask about the next Women’s Ministry gathering or conference opportunity.",
    contactHref: `${churchInfo.whatsappBaseHref}?text=${encodeURIComponent('Hi Renewed Life, I would like more information about the Women\'s Ministry.')}`,
  },
  {
    title: "Men’s Ministry",
    description: "A ministry helping men grow in godly leadership, strong character, and faithful responsibility at home, in church, and in the community.",
    audience: "Men of all ages",
    rhythm: "Monthly Men’s Breakfast and special gatherings",
    cta: "Join the Men’s Ministry",
    whatHappens: "Men gather for discipleship, encouragement, practical teaching, and conversations about leadership and responsibility.",
    nextStepDescription: "Ask about the next Men’s Breakfast or upcoming gathering and we will help you connect.",
    contactHref: `${churchInfo.whatsappBaseHref}?text=${encodeURIComponent('Hi Renewed Life, I would like more information about the Men\'s Ministry.')}`,
  },
  {
    title: "Youth Renewed",
    description: "A youth community where young people worship, ask honest questions, build friendships, and learn to follow Christ boldly.",
    audience: "Teenagers and young adults",
    rhythm: "Monthly Youth Connect and youth-focused gatherings",
    cta: "Join Youth Renewed",
    whatHappens: "Young people gather for worship, conversation, friendship, discipleship, and practical encouragement for real life.",
    nextStepDescription: "Reach out for the next Youth Connect date and the best way to join in.",
    contactHref: `${churchInfo.whatsappBaseHref}?text=${encodeURIComponent('Hi Renewed Life, I would like more information about Youth Renewed.')}`,
  },
  {
    title: "Children’s Ministry",
    description: "A safe and joyful environment where children learn the Bible, grow in prayer, and experience church in a way they can understand.",
    audience: "Children",
    rhythm: "During Sunday services and special children’s programs",
    cta: "Bring your child to Children’s Ministry",
    whatHappens: "Children are welcomed with age-appropriate biblical care, simple guidance, prayer, and a joyful church environment.",
    nextStepDescription: "Before visiting, message the team for the latest children’s arrangements and arrival guidance for your family.",
    contactHref: `${churchInfo.whatsappBaseHref}?text=${encodeURIComponent('Hi Renewed Life, I would like more information about the Children\'s Ministry and current Sunday arrangements.')}`,
  },
  {
    title: "Senior Citizens’ Ministry",
    description: "A caring ministry where senior members are valued, strengthened in faith, and encouraged through fellowship and pastoral care.",
    audience: "Senior adults",
    rhythm: "Scheduled fellowship gatherings and special ministry moments",
    cta: "Connect with the Senior Citizens’ Ministry",
    whatHappens: "Senior members are encouraged through fellowship, prayer, pastoral care, and spaces where their wisdom and presence are valued.",
    nextStepDescription: "Contact the church to hear about the next fellowship opportunity or pastoral support point of contact.",
    contactHref: `${churchInfo.whatsappBaseHref}?text=${encodeURIComponent('Hi Renewed Life, I would like more information about the Senior Citizens\' Ministry.')}`,
  },
  {
    title: "Evangelistic and Outreach Ministry",
    description: "A ministry that carries the gospel into the community through evangelism, compassionate presence, prayer, and practical support.",
    audience: "The local community and outreach teams",
    rhythm: "Outreach events and scheduled evangelism activities",
    cta: "Serve in Outreach",
    whatHappens: "Teams pray, serve, share the gospel, and show practical care in the community beyond the church building.",
    nextStepDescription: "Ask when the next outreach opportunity is happening and how you can prepare to serve.",
    contactHref: `${churchInfo.whatsappBaseHref}?text=${encodeURIComponent('Hi Renewed Life, I would like more information about the Outreach Ministry.')}`,
  },
  {
    title: "Music Ministry",
    description: "A worship team committed to leading the church with sincerity, preparation, and a deep desire to honour God in song.",
    audience: "Singers, musicians, and the congregation through worship",
    rhythm: "Weekly services, rehearsals, and special events",
    cta: "Join the Worship Team",
    whatHappens: "The team prepares for services, rehearses faithfully, and serves the congregation through worship and musical excellence.",
    nextStepDescription: "Tell us about your gifting and we will explain the next conversation or rehearsal step.",
    contactHref: `${churchInfo.whatsappBaseHref}?text=${encodeURIComponent('Hi Renewed Life, I would like more information about the Music Ministry.')}`,
  },
  {
    title: "Ushering Ministry",
    description: "A hospitality team that helps every guest and member feel welcomed, guided, and cared for from the moment they arrive.",
    audience: "The whole church, especially visitors",
    rhythm: "Weekly service coordination and special events",
    cta: "Serve with the Ushering Team",
    whatHappens: "Ushers welcome people, help with seating and flow, and make practical hospitality visible from the first moment of arrival.",
    nextStepDescription: "Ask how to shadow the team or begin the process of serving on a Sunday.",
    contactHref: `${churchInfo.whatsappBaseHref}?text=${encodeURIComponent('Hi Renewed Life, I would like more information about the Ushering Ministry.')}`,
  },
];

export const sermonLibrary = [
  {
    title: 'A Good God and His Notorious Boys',
    speaker: 'Renewed Life International',
    date: 'Recent message',
    series: 'Sunday Teaching',
    type: 'Sunday Service',
    summary: 'A message on the goodness of God and the grace He shows even through flawed and unexpected people.',
    href: 'https://www.youtube.com/watch?v=YpCqxgKHbSU',
    thumbnail: '/images/worship.jpeg',
  },
  {
    title: 'Woman Your Faith Is Great',
    speaker: 'Renewed Life International',
    date: 'Recent message',
    series: 'Sunday Teaching',
    type: 'Sunday Service',
    summary: 'A sermon on bold and persevering faith, showing how trust in Jesus draws out His compassion and power.',
    href: 'https://www.youtube.com/watch?v=WLXo5J24cyE',
    thumbnail: '/images/worship-2.jpeg',
  },
  {
    title: 'Bible Study',
    speaker: 'Renewed Life International',
    date: 'Recent upload',
    series: 'Midweek Teaching',
    type: 'Bible Study',
    summary: 'Midweek teaching designed to help the church go deeper in Scripture, prayer, and day-by-day discipleship.',
    href: youtubeHref,
    thumbnail: '/images/homepage/cong-front-1.jpg',
  },
  {
    title: 'Recent Teaching Replay',
    speaker: 'Renewed Life International',
    date: 'Channel replay',
    series: 'Recent Teaching',
    type: 'Special Service',
    summary: 'A recent service replay for those who want to revisit a message, share it with someone, or catch up after missing a gathering.',
    href: youtubeHref,
    thumbnail: '/images/pastor/pastor-1.jpg',
  },
];

export const sermonHighlights = sermonLibrary.slice(0, 3).map((sermon, index) => ({
  title: sermon.title,
  summary: sermon.summary,
  type: index === 0 ? 'Featured message' : sermon.type,
  href: sermon.href,
  thumbnail: sermon.thumbnail,
}));

export const sermonStartHere = [
  {
    title: 'A Good God and His Notorious Boys',
    label: 'Start here first',
    reason: 'A strong introduction to the grace of God and the pastoral tone of preaching at Renewed Life.',
  },
  {
    title: 'Woman Your Faith Is Great',
    label: 'For encouragement',
    reason: 'A helpful place to begin if you need faith, hope, and reassurance that Jesus meets people in real need.',
  },
  {
    title: 'Bible Study',
    label: 'To go deeper',
    reason: 'Start here if you want to hear the church’s midweek teaching rhythm and how Scripture is opened up practically.',
  },
];

export const sermonTypes = ['Sunday Service', 'Bible Study', 'Conference', 'Special Service'];

export const communityHighlights = [
  {
    title: "A warm welcome",
    description: "From the moment you arrive at Mampuru Hall, we want you to feel seen, helped, and genuinely at home.",
  },
  {
    title: "Biblical teaching",
    description: "Our services are built around worship, prayer, and preaching that helps people grow in Christ with clarity and conviction.",
  },
  {
    title: "Real community",
    description: "We value relationships that continue beyond Sunday through discipleship, connect groups, prayer, ministry, and care.",
  },
];

export const worshipGallery = [
  {
    src: '/images/worship.jpeg',
    alt: 'Congregation in worship at Renewed Life International.',
    title: 'Worship that fills the room',
    summary: 'A strong worship image that immediately communicates reverence, expectancy, and gathered praise.',
  },
  {
    src: '/images/worship-2.jpeg',
    alt: 'Church family engaged during worship at Renewed Life International.',
    title: 'A live, Spirit-filled atmosphere',
    summary: 'A worship moment that feels alive, participatory, and spiritually grounded without losing warmth.',
  },
  {
    src: '/images/lifted-hands-1.jpg',
    alt: 'Lifted hands during worship at Renewed Life International.',
    title: 'Real moments of response',
    summary: 'An expressive image that helps visitors imagine heartfelt worship and visible spiritual engagement.',
  },
  {
    src: '/images/homepage/cong-front-1.jpg',
    alt: 'Front-facing congregation moment at Renewed Life.',
    title: 'Gathered in worship and prayer',
    summary: 'A front-facing congregation image that reflects welcome, attentiveness, and the culture of gathered worship.',
  },
];

export const flagshipPhotos = [
  {
    src: '/images/homepage/cong-1.jpg',
    alt: 'Congregation gathered during worship at Renewed Life International.',
    title: 'This church is alive',
    summary: 'A flagship congregation-wide worship moment that immediately communicates energy, reverence, and spiritual life.',
  },
  {
    src: '/images/worship.jpeg',
    alt: 'Worship at Renewed Life International during a live service.',
    title: 'People are welcome here',
    summary: 'A warm room shot that helps first-time visitors imagine themselves in the space.',
  },
  {
    src: '/images/lifted-hands-1.jpg',
    alt: 'Raised hands during worship at Renewed Life International.',
    title: 'Worship is real and heartfelt',
    summary: 'A powerful atmosphere image that carries warmth, reverence, and visible response.',
  },
];

export const visitorGallery = [
  {
    src: '/images/garage-venue.jpeg',
    alt: 'Venue exterior or arrival view connected to Renewed Life International.',
    title: 'A welcoming Sunday gathering',
  },
  {
    src: '/images/homepage/cong-1.jpg',
    alt: 'Church family gathered together during service.',
    title: 'A room filled with faith and family',
  },
  {
    src: '/images/sunday-school-1.jpg',
    alt: 'Children’s ministry moment at Renewed Life International.',
    title: 'A place for families and children',
  },
  {
    src: '/images/worship-2.jpeg',
    alt: 'Worship scene from a Renewed Life service.',
    title: 'Moments of worship and prayer',
  },
];

export const outreachGallery = [
  {
    src: '/images/open-air-evangelism.JPG',
    alt: 'Open-air evangelism moment connected to Renewed Life ministry.',
    title: 'Evangelism in the community',
    summary: 'A visible expression of the church taking the gospel into the community with courage and conviction.',
  },
  {
    src: '/images/open-air-preaching.JPG',
    alt: 'Open-air preaching moment from outreach ministry.',
    title: 'Preaching Christ beyond Sunday',
    summary: 'This image captures the public witness of preaching and proclaiming Christ outside the church building.',
  },
  {
    src: '/images/open-air-witnessing.JPG',
    alt: 'Witnessing and community outreach moment.',
    title: 'Witnessing with boldness and compassion',
    summary: 'A snapshot of relational outreach, showing faith expressed through presence, conversation, and care.',
  },
  {
    src: '/images/open-air-healing.JPG',
    alt: 'Prayer and healing ministry moment during outreach.',
    title: 'Prayer and care in action',
    summary: 'A ministry image that reflects prayer, compassion, and practical spiritual support for people in need.',
  },
  {
    src: '/images/open-air1.jpg',
    alt: 'Open-air outreach gathering linked to Renewed Life ministry.',
    title: 'Visible impact beyond the church walls',
    summary: 'An outreach image that helps communicate that church life extends into the streets, community, and mission field.',
  },
];

export const ministryGallery = [
  {
    src: '/images/womens-conf-1.jpg',
    alt: 'Women’s ministry conference or gathering at Renewed Life.',
    title: 'Women’s Ministry',
    summary: 'Real moments of women gathering in faith, prayer, and encouragement.',
  },
  {
    src: '/images/women-conf-2.jpg',
    alt: 'Women’s ministry gathering or conference moment.',
    title: 'Growing in purpose together',
    summary: 'A strong supporting image for women’s ministry and event promotion.',
  },
  {
    src: '/images/sunday-school-1.jpg',
    alt: 'Children’s ministry or Sunday school photo.',
    title: 'Children’s Ministry',
    summary: 'A reassuring image that helps families imagine a safe, joyful children’s environment.',
  },
  {
    src: '/images/worship-2.jpeg',
    alt: 'Congregation engaged in worship at Renewed Life International.',
    title: 'Music and worship ministry',
    summary: 'Useful for worship, youth, and Sunday atmosphere sections.',
  },
];

export const ministryLifeGallery = [
  {
    src: '/images/womens-conf-1.jpg',
    alt: 'Women gathered together during a Renewed Life ministry moment.',
    title: 'Spaces where people are strengthened',
    summary: 'Ministry life creates room for prayer, encouragement, and spiritual growth that feels personal and relational.',
    label: 'Community',
  },
  {
    src: '/images/women-conf-2.jpg',
    alt: 'Renewed Life members engaging during a ministry gathering.',
    title: 'Friendships that carry faith forward',
    summary: 'People are not meant to grow alone. These gatherings help friendships deepen around Christ, prayer, and shared life.',
    label: 'Discipleship',
  },
  {
    src: '/images/sunday-school-1.jpg',
    alt: 'Children participating in church life at Renewed Life.',
    title: 'Care for every generation',
    summary: 'From children to seniors, ministry life at Renewed Life is designed to include, strengthen, and serve every stage of life.',
    label: 'Family',
  },
  {
    src: '/images/homepage/cong-front-1.jpg',
    alt: 'Front-facing congregation moment at Renewed Life International.',
    title: 'Gathered around the Word',
    summary: 'Church ministries keep people anchored in Scripture and connected to the life of the church beyond one weekly service.',
    label: 'Word',
  },
  {
    src: '/images/worship/cong-3.jpg',
    alt: 'Congregation worshipping together at Renewed Life.',
    title: 'Worship with living faith',
    summary: 'Worship, service, and ministry all flow from a church family that wants to stay close to Jesus and alive to His presence.',
    label: 'Worship',
  },
  {
    src: '/images/worship/cong-front-2.jpg',
    alt: 'Congregation gathered in a Renewed Life worship service.',
    title: 'A church family in motion',
    summary: 'Ministry life makes it easier to move from attending to belonging, serving, and building real spiritual roots.',
    label: 'Belonging',
  },
];

export const churchLifeGallery = [
  {
    src: '/images/homepage/cong-1.jpg',
    alt: 'Congregation gathered together during a Renewed Life service.',
    title: 'Sunday worship together',
    summary: 'A room full of people lifting their hearts to God and gathering around His presence together.',
  },
  {
    src: '/images/homepage/cong-front-1.jpg',
    alt: 'Front-facing congregation moment during service at Renewed Life.',
    title: 'Listening to the Word',
    summary: 'Church life is shaped by clear preaching, attentive hearts, and a desire to grow in Scripture.',
  },
  {
    src: '/images/lifted-hands-1.jpg',
    alt: 'Lifted hands during worship at Renewed Life International.',
    title: 'Moments of surrender',
    summary: 'Our gatherings make room for heartfelt worship, prayer, and real response to God.',
  },
  {
    src: '/images/sunday-school-1.jpg',
    alt: 'Children gathered in a church ministry environment at Renewed Life.',
    title: 'Families growing in faith',
    summary: 'Children and parents are part of the life of the church, not separate from its care and vision.',
  },
  {
    src: '/images/womens-conf-1.jpg',
    alt: 'Women gathered in ministry at Renewed Life International.',
    title: 'Women strengthened together',
    summary: 'Church life includes spaces for women to be encouraged, discipled, and built up in community.',
  },
  {
    src: '/images/open-air-evangelism.JPG',
    alt: 'Renewed Life members engaged in evangelism in the community.',
    title: 'Faith beyond the building',
    summary: 'We want church life to spill into the community through witness, prayer, and practical love.',
  },
];

export const serviceHighlightClips = [
  {
    src: '/images/service-highlights-3.MP4',
    type: 'video/mp4',
    title: 'A Sunday filled with life',
    summary: 'A service capture highlight that helps visitors see the atmosphere, worship, and gathered life of the room.',
    poster: '/images/homepage/cong-1.jpg',
  },
  {
    src: '/images/service-highlights-2.MOV',
    type: 'video/quicktime',
    title: 'A room alive with worship',
    summary: 'A second service capture moment showing the warmth, participation, and energy of a Sunday gathering.',
    poster: '/images/worship-2.jpeg',
  },
  {
    src: '/images/service-highlight-1.MOV',
    type: 'video/quicktime',
    title: 'People gathering in faith',
    summary: 'A third service capture clip that adds another real snapshot of worship, people, and the feel of the service.',
    poster: '/images/worship.jpeg',
  },
];

export const videoClips = [
  {
    src: '/images/Welcome-to -renewed.MP4',
    type: 'video/mp4',
    title: 'Welcome to Renewed Life',
    summary: 'A welcome clip that introduces the warmth and atmosphere of Renewed Life from the first frame.',
    poster: '/images/homepage/cong-1.jpg',
    useCase: 'Homepage flagship video',
  },
  {
    src: '/images/worship/congr-praise-1.MOV',
    type: 'video/quicktime',
    title: 'Worship atmosphere clip',
    summary: 'A short worship clip that can support sermons, media, and social promotion sections.',
    poster: '/images/worship-2.jpeg',
    useCase: 'Sermons or media preview',
  },
  {
    src: '/images/pastor/pastor-sermon-clip-1-preview.mp4',
    type: 'video/mp4',
    title: 'Long-form sermon replay clip',
    summary: 'A compressed sermon preview clip that supports replay promotion without shipping an oversized media file in the repository.',
    poster: '/images/pastor/pastor-1.jpg',
    useCase: 'Long-form sermon media',
  },
  {
    src: '/images/pastor/pastor-sermon-clip-2.MOV',
    type: 'video/quicktime',
    title: 'Preaching clip',
    summary: 'A sermon or leadership clip suited to the sermons page and future short-form media promotion.',
    poster: '/images/pastor/pastor-1.jpg',
    useCase: 'Leadership / sermons clip',
  },
];

export const visitExpectations = [
  "A friendly team ready to help you settle in and answer questions",
  "Heartfelt worship, prayer, and Bible-based preaching",
  "A relaxed, family-friendly environment where you can come as you are",
  "Space to connect after the service and learn your next step",
];

export const familyHighlights = [
  {
    title: 'Families are warmly welcome',
    description: 'Parents do not need to have everything figured out before arriving. The team is there to help you get settled and feel at ease.',
  },
  {
    title: 'Children are guided with care',
    description: 'We use safe, calm, and age-aware language about children’s ministry. If you need the latest Sunday details, we encourage you to ask before visiting.',
  },
  {
    title: 'You can ask questions ahead of time',
    description: 'If your child has specific needs or you want to understand the current children’s arrangements, WhatsApp the church and we will help directly.',
  },
];

export const beliefs = [
  {
    title: "The Bible",
    description: "We believe the Bible is the inspired, authoritative, and life-giving Word of God.",
    scriptures: [
      'All Scripture is breathed out by God and profitable. 2 Timothy 3:16',
    ],
  },
  {
    title: "God",
    description: "We believe in one true God, eternally existing as Father, Son, and Holy Spirit.",
    scriptures: [
      'The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all. 2 Corinthians 13:14',
    ],
  },
  {
    title: "Jesus Christ",
    description: "We believe Jesus Christ is the Son of God, fully God and fully man, who died and rose again for our salvation.",
    scriptures: [
      'Christ died for our sins... he was buried... he was raised on the third day. 1 Corinthians 15:3-4',
    ],
  },
  {
    title: "The Holy Spirit",
    description: "We believe the Holy Spirit empowers believers, transforms lives, and leads the church in truth and power.",
    scriptures: [
      'You will receive power when the Holy Spirit has come upon you. Acts 1:8',
    ],
  },
  {
    title: "Salvation",
    description: "We believe salvation is by grace through faith in Jesus Christ alone.",
    scriptures: [
      'By grace you have been saved through faith. Ephesians 2:8-9',
    ],
  },
  {
    title: "The Church",
    description: "We believe the church is the body of Christ, called to worship, discipleship, fellowship, service, and mission.",
    scriptures: [
      'Now you are the body of Christ and individually members of it. 1 Corinthians 12:27',
    ],
  },
  {
    title: "Prayer",
    description: "We believe prayer is essential to the life of every believer and to the ministry of the church.",
    scriptures: [
      'Pray without ceasing. 1 Thessalonians 5:17',
    ],
  },
  {
    title: "Resurrection and Eternal Life",
    description: "We believe in the resurrection of the dead, eternal life for those in Christ, and the final victory of God’s kingdom.",
    scriptures: [
      'I am the resurrection and the life. John 11:25',
    ],
  },
];

export const givingWays = [
  {
    title: 'Need EFT guidance?',
    support: 'Direct support',
    description:
      'If you need help confirming the details or knowing what reference to use, message the church and we will gladly help you.',
    actionLabel: 'WhatsApp giving support',
    actionHref: churchInfo.whatsappGivingHref,
  },
  {
    title: 'Prefer email support?',
    support: 'Church office',
    description:
      'If you would prefer written guidance or follow-up from the church office, send us an email and we will assist you clearly.',
    actionLabel: 'Email the church office',
    actionHref: churchInfo.emailHref,
  },
];

export const givingCategories = ['Tithe', 'Offering', 'Special Seed / Building Fund'];

export const eftGivingDetails = [
  {
    label: 'Bank',
    value: 'FNB',
  },
  {
    label: 'Account holder',
    value: 'Renewed Life Int',
  },
  {
    label: 'Account number',
    value: '63074972639',
  },
  {
    label: 'Reference',
    value: 'Use your name or giving category, and contact us if you need guidance.',
  },
];

export const contactActions = [
  {
    title: "Send an email",
    value: churchInfo.email,
    href: churchInfo.emailHref,
    description: 'Email the church for questions, prayer needs, or follow-up.',
  },
  {
    title: "Call the church",
    value: churchInfo.phoneDisplay,
    href: churchInfo.phoneHref,
    description: 'Call if you would like to speak to someone directly.',
  },
  {
    title: "Message on WhatsApp",
    value: 'More information about visiting',
    href: churchInfo.whatsappHref,
    description: 'Use WhatsApp for quick help before you visit or attend a service.',
  },
  {
    title: 'Prayer on WhatsApp',
    value: 'Prayer / pastoral support',
    href: churchInfo.whatsappPrayerHref,
    description: 'Reach out for prayer, encouragement, or pastoral care.',
  },
  {
    title: "Open directions",
    value: `${churchInfo.venue}, ${churchInfo.city}`,
    href: churchInfo.mapHref,
    description: 'Open directions and find the venue more easily.',
  },
];

export const socialLinks = [
  {
    label: "Facebook",
    href: facebookHref,
  },
  {
    label: "Instagram",
    href: instagramHref,
  },
  {
    label: "YouTube",
    href: youtubeHref,
  },
];

export const leadershipHighlights = [
  {
    title: "Pastor Thabang Ngwenya",
    role: 'Lead Pastor',
    imageSrc: '/images/pastor/pastor-1.jpg',
    description:
      "Pastor Thabang Ngwenya serves as the lead pastor of Renewed Life International. His heart is to preach the Word faithfully, disciple people patiently, and see lives transformed by the power of Jesus Christ.",
    extendedDescription:
      'He carries a clear burden to see people grounded in Scripture, alive to the Holy Spirit, and equipped to live out their calling with maturity. His ministry is marked by biblical preaching, pastoral care, and a desire to build a healthy church that remains centered on Jesus.',
    focusPoints: ['Biblical preaching', 'Discipleship and spiritual formation', 'Pastoral care and church health'],
  },
  {
    title: "Pastor Masetchaba “Zee” Ngwenya",
    role: 'Pastor and ministry leader',
    imageSrc: '/images/pastor-zee.jpg',
    description:
      "Pastor Masetchaba “Zee” Ngwenya serves alongside Pastor Thabang with a deep love for people, worship, prayer, and spiritual growth. She has helped shape the warm and faith-filled culture that many people experience when they arrive at Renewed Life.",
    extendedDescription:
      'Her ministry carries warmth, strength, and sensitivity to people. She helps nurture an atmosphere where women, families, and first-time guests can feel welcomed, encouraged, and drawn closer to Christ through prayer, worship, and practical care.',
    focusPoints: ['Prayer and worship', 'Pastoral encouragement', 'Welcoming and strengthening families'],
  },
];

export const homecellsDetails = {
  title: 'Homecells',
  intro:
    'Homecells are where church life becomes more personal. They give people a midweek space for prayer, Scripture, encouragement, and genuine connection in a welcoming home setting.',
  leadTitle: 'Grow in community beyond Sunday',
  leadBody:
    'Homecells help people move from attending a service to becoming known, supported, and spiritually strengthened in the life of the church.',
  highlights: [
    'A place to ask questions, share burdens, and grow in faith with others.',
    'A practical way to build friendships and stay connected beyond Sunday.',
    'Centered on the Word, prayer, mutual care, and steady discipleship.',
  ],
  schedule: 'Homecells meet every Tuesday from 18h00 to 19h15.',
  scheduleLabel: 'Weekly rhythm',
  note: 'Whether you are new to church life or looking for deeper connection, homecells offer a smaller, warmer place to grow with others.',
  locationCards: [
    {
      title: 'Mofolo',
      label: 'Location',
      leaderLabel: 'Leader details',
      leaderTitle: 'Ps Joseph',
      leaderDescription: 'Contact: +27 84 409 5904',
    },
    {
      title: 'Roodepoort',
      label: 'Location',
      leaderLabel: 'Leader details',
      leaderTitle: 'Mamoruti Ngwenya',
      leaderDescription: 'Contact: +27 73 743 8293',
    },
    {
      title: 'Noordgesig',
      label: 'Location',
      leaderLabel: 'Leader details',
      leaderTitle: 'Mrs Neliswa Lottering',
      leaderDescription: 'Contact: +27 74 680 5461',
    },
    {
      title: 'Jabulani',
      label: 'Location',
      leaderLabel: 'Leader details',
      leaderTitle: 'Sis Amanda',
      leaderDescription: 'Contact: +27 63 991 3072',
    },
    {
      title: 'Dube',
      label: 'Location',
      leaderLabel: 'Leader details',
      leaderTitle: 'Sis Yonela',
      leaderDescription: 'Contact: +27 68 295 2405',
    },
    {
      title: 'Orlando West',
      label: 'Location',
      leaderLabel: 'Leader details',
      leaderTitle: 'Ms Nhlanhla',
      leaderDescription: 'Contact: +27 73 490 6730',
    },
    {
      title: 'Protea Glen',
      label: 'Location',
      leaderLabel: 'Leader details',
      leaderTitle: 'Mr Ngwenya',
      leaderDescription: 'Contact: +27 74 308 7540',
    },
    {
      title: 'Orlando East',
      label: 'Coming soon',
      leaderLabel: 'Leader details',
      leaderTitle: 'Mam Zozo',
      leaderDescription: 'Leader confirmed. Exact meeting details to be communicated.',
    },
    {
      title: 'Meadowlands',
      label: 'Coming soon',
      leaderLabel: 'Leader details',
      leaderTitle: 'To be communicated',
      leaderDescription: 'Leader and meeting details will be shared once confirmed.',
    },
  ],
  ctaLabel: 'Ask about a homecell',
  ctaHref: `${churchInfo.whatsappBaseHref}?text=${encodeURIComponent('Hi Renewed Life, I would like more information about joining a homecell or small group.')}`,
};

