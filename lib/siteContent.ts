const facebookHref = 'https://www.facebook.com/renewedlifeint/';
const instagramHref = 'https://www.instagram.com/renewedlifeint/';
const youtubeHref = 'https://www.youtube.com/@renewedlifeinternational2138';

export const formspreeEndpoint = 'https://formspree.io/f/mbdzdvpn';

export const churchInfo = {
  name: "Renewed Life",
  legalName: "Renewed Life International",
  shortName: "Renewed Life",
  tagline: "Believe. Belong. Become.",
  brandIdea:
    "A church where people encounter God, find family, and grow into who God has called them to be.",
  websiteHref: 'https://renewedlifeint.com',
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
    title: "Plan your visit",
    description: "Get service times, directions, and a simple walkthrough of what your first Sunday at Mampuru Hall will feel like.",
    href: "/plan-your-visit",
  },
  {
    title: "Watch a message",
    description: "Catch up on a recent sermon and get a feel for the heart, teaching, and atmosphere of the church.",
    href: "/sermons",
  },
  {
    title: "Find your next step",
    description: "Explore ministries, connect groups, and practical ways to grow in faith, family, and purpose.",
    href: "/ministries",
  },
  {
    title: "Connect with us",
    description: "Reach out with questions, prayer needs, or to let us know you are coming this Sunday.",
    href: "/contact",
  },
];

export const coreValues = [
  {
    title: "Believe",
    description: "We lead people to trust Jesus, stand on the truth of Scripture, and live by the power of the Holy Spirit.",
  },
  {
    title: "Belong",
    description: "Church is family. We are building a spiritual home where every generation can be welcomed, known, and strengthened.",
  },
  {
    title: "Become",
    description: "We want believers to grow into maturity, discover their God-ordained purpose, and live with courage and conviction.",
  },
];

export const churchStory =
  "Renewed Life International was birthed in response to God’s call in late 2018 and officially launched on 6 January 2019. What began in the pastors’ lounge with the founding family, simple faith, and very limited resources has grown into a Christ-centered church committed to transformed lives through the Word of God, the power of the Holy Spirit, and genuine Christian fellowship.";

export const missionStatement =
  "Our mission is to reach the unchurched with the gospel of Jesus Christ, make disciples, and equip believers for works of service and their God-ordained purpose, so that the Body of Christ may be built up into maturity and the fullness of Christ.";

export const visionStatement =
  "Our vision is to become a body of Holy Spirit-filled believers whose minds and lives are transformed to live above reproach, triumph in every situation, and impact the world around them for the glory of God.";

export const ministries = [
  {
    title: "Women’s Ministry",
    description: "A vibrant ministry that encourages women to grow in faith, purpose, prayer, and godly community.",
    audience: "Women of all ages",
    rhythm: "Fortnightly and during special gatherings",
    cta: "Join the Women’s Ministry",
  },
  {
    title: "Men’s Ministry",
    description: "A ministry focused on building strong, godly men who lead with integrity in their homes, church, and community.",
    audience: "Men of all ages",
    rhythm: "Monthly Men’s Breakfast and special gatherings",
    cta: "Join the Men’s Ministry",
  },
  {
    title: "Youth Renewed",
    description: "A dynamic youth ministry helping young people encounter God, grow in identity, and live boldly for Christ.",
    audience: "Teenagers and young adults",
    rhythm: "Monthly Youth Connect and youth-focused gatherings",
    cta: "Join Youth Renewed",
  },
  {
    title: "Children’s Ministry",
    description: "A safe and joyful ministry where children learn God’s Word in a way that is engaging, biblical, and age-appropriate.",
    audience: "Children",
    rhythm: "During Sunday services and special children’s programs",
    cta: "Bring your child to Children’s Ministry",
  },
  {
    title: "Senior Citizens’ Ministry",
    description: "A caring ministry that values, supports, and spiritually strengthens senior members of the church family.",
    audience: "Senior adults",
    rhythm: "Scheduled fellowship gatherings and special ministry moments",
    cta: "Connect with the Senior Citizens’ Ministry",
  },
  {
    title: "Evangelistic and Outreach Ministry",
    description: "A ministry dedicated to reaching the community with the love of Christ through evangelism, practical support, and mission initiatives.",
    audience: "The local community and outreach teams",
    rhythm: "Outreach events and scheduled evangelism activities",
    cta: "Serve in Outreach",
  },
  {
    title: "Music Ministry",
    description: "A worship ministry committed to leading the church into the presence of God through excellence, sincerity, and Spirit-led worship.",
    audience: "Singers, musicians, and the congregation through worship",
    rhythm: "Weekly services, rehearsals, and special events",
    cta: "Join the Worship Team",
  },
  {
    title: "Ushering Ministry",
    description: "A hospitality-focused ministry that helps create a welcoming, orderly, and caring church environment for every guest and member.",
    audience: "The whole church, especially visitors",
    rhythm: "Weekly service coordination and special events",
    cta: "Serve with the Ushering Team",
  },
];

export const sermonLibrary = [
  {
    title: 'A Good God and His Notorious Boys',
    speaker: 'Renewed Life International',
    date: 'Recent message',
    series: 'Sunday Teaching',
    type: 'Sunday Service',
    summary: 'A featured message now linked to a specific YouTube sermon, giving visitors a clearer sense of the preaching voice and biblical emphasis of the church.',
    href: 'https://www.youtube.com/watch?v=YpCqxgKHbSU',
    thumbnail: '/images/worship/worship-01.jpg',
  },
  {
    title: 'Woman Your Faith Is Great',
    speaker: 'Renewed Life International',
    date: 'Recent message',
    series: 'Sunday Teaching',
    type: 'Sunday Service',
    summary: 'A real sermon link that strengthens the archive and gives first-time visitors another message to explore beyond the featured teaching.',
    href: 'https://www.youtube.com/watch?v=WLXo5J24cyE',
    thumbnail: '/images/worship/worship-02.jpg',
  },
  {
    title: 'Bible Study',
    speaker: 'Renewed Life International',
    date: 'Recent upload',
    series: 'Midweek Teaching',
    type: 'Bible Study',
    summary: 'Recurring midweek teaching content remains available through the church channel while more individual message links are being added.',
    href: youtubeHref,
    thumbnail: '/images/worship/worship-03.jpg',
  },
  {
    title: 'Recent Teaching Replay',
    speaker: 'Renewed Life International',
    date: 'Channel replay',
    series: 'Recent Teaching',
    type: 'Special Service',
    summary: 'A general replay slot that keeps the archive useful while additional sermon-specific links are collected and added.',
    href: youtubeHref,
    thumbnail: '/images/worship/worship-04.jpg',
  },
];

export const sermonHighlights = sermonLibrary.slice(0, 3).map((sermon, index) => ({
  title: sermon.title,
  summary: sermon.summary,
  type: index === 0 ? 'Featured message' : sermon.type,
  href: sermon.href,
  thumbnail: sermon.thumbnail,
}));

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
    src: '/images/worship/cong-2.JPG',
    alt: 'Wide congregation worship moment at Renewed Life International.',
    title: 'Worship that fills the room',
  },
  {
    src: '/images/worship/cong-3.jpg',
    alt: 'Congregation engaged during worship at Renewed Life International.',
    title: 'A live, Spirit-filled atmosphere',
  },
  {
    src: '/images/homepage/cong-front-1.jpg',
    alt: 'Front-facing congregation worship moment at Renewed Life.',
    title: 'Real moments from church life',
  },
  {
    src: '/images/worship/cong-front-2.jpg',
    alt: 'Gathered worship and praise at Renewed Life International.',
    title: 'Gathered in worship and prayer',
  },
];

export const flagshipPhotos = [
  {
    src: '/images/worship/cong-2.JPG',
    alt: 'Wide congregation worship scene at Renewed Life International.',
    title: 'This church is alive',
    summary: 'A flagship congregation-wide worship moment that immediately communicates energy, reverence, and spiritual life.',
  },
  {
    src: '/images/homepage/cong-1.jpg',
    alt: 'Congregation gathered during worship at Renewed Life.',
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
    src: '/images/homepage/cong-front-1.jpg',
    alt: 'Front congregation view during worship at Renewed Life.',
    title: 'A welcoming Sunday gathering',
  },
  {
    src: '/images/homepage/cong-1.jpg',
    alt: 'Church family gathered together during service.',
    title: 'A room filled with faith and family',
  },
  {
    src: '/images/sunday-school.jpg',
    alt: 'Children’s ministry or Sunday school moment at Renewed Life.',
    title: 'A place for families and children',
  },
  {
    src: '/images/worship/cong-front-2.jpg',
    alt: 'Worship scene from the front of the room at Renewed Life.',
    title: 'Moments of worship and prayer',
  },
];

export const outreachGallery = [
  {
    src: '/images/open-air-evangelism.JPG',
    alt: 'Open-air evangelism moment connected to Renewed Life ministry.',
    title: 'Evangelism in the community',
  },
  {
    src: '/images/open-air-preaching.JPG',
    alt: 'Open-air preaching moment from outreach ministry.',
    title: 'Preaching Christ beyond Sunday',
  },
  {
    src: '/images/open-air-witnessing.JPG',
    alt: 'Witnessing and community outreach moment.',
    title: 'Witnessing with boldness and compassion',
  },
  {
    src: '/images/open-air-healing.JPG',
    alt: 'Prayer and healing ministry moment during outreach.',
    title: 'Prayer and care in action',
  },
  {
    src: '/images/open-air1.jpg',
    alt: 'Open-air outreach gathering linked to Renewed Life ministry.',
    title: 'Visible impact beyond the church walls',
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
    src: '/images/sunday-school.jpg',
    alt: 'Children’s ministry or Sunday school photo.',
    title: 'Children’s Ministry',
    summary: 'A reassuring image that helps families imagine a safe, joyful children’s environment.',
  },
  {
    src: '/images/worship/cong-3.jpg',
    alt: 'Congregation engaged in worship at Renewed Life International.',
    title: 'Music and worship ministry',
    summary: 'Useful for worship, youth, and Sunday atmosphere sections.',
  },
];

export const videoClips = [
  {
    src: '/images/homepage/cong-praise-2.MOV',
    type: 'video/quicktime',
    title: 'Homepage worship moment',
    summary: 'A short congregation praise clip that works well as a living first impression on the homepage.',
    poster: '/images/worship/cong-2.JPG',
    useCase: 'Homepage flagship video',
  },
  {
    src: '/images/worship/congr-praise-1.MOV',
    type: 'video/quicktime',
    title: 'Worship atmosphere clip',
    summary: 'A short worship clip that can support sermons, media, and social promotion sections.',
    poster: '/images/worship/cong-front-2.jpg',
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

export const beliefs = [
  {
    title: "The Bible",
    description: "We believe the Bible is the inspired, authoritative, and life-giving Word of God.",
  },
  {
    title: "God",
    description: "We believe in one true God, eternally existing as Father, Son, and Holy Spirit.",
  },
  {
    title: "Jesus Christ",
    description: "We believe Jesus Christ is the Son of God, fully God and fully man, who died and rose again for our salvation.",
  },
  {
    title: "The Holy Spirit",
    description: "We believe the Holy Spirit empowers believers, transforms lives, and leads the church in truth and power.",
  },
  {
    title: "Salvation",
    description: "We believe salvation is by grace through faith in Jesus Christ alone.",
  },
  {
    title: "The Church",
    description: "We believe the church is the body of Christ, called to worship, discipleship, fellowship, service, and mission.",
  },
  {
    title: "Prayer",
    description: "We believe prayer is essential to the life of every believer and to the ministry of the church.",
  },
  {
    title: "Resurrection and Eternal Life",
    description: "We believe in the resurrection of the dead, eternal life for those in Christ, and the final victory of God’s kingdom.",
  },
];

export const givingWays = [
  {
    title: 'Give via EFT',
    description: 'EFT is the active giving method for now, giving members and partners a direct and trusted way to support the ministry.',
    support: 'Live now',
    actionLabel: 'Bank transfer available',
  },
  {
    title: 'Give online',
    description: 'A simple online giving option can be added next once the church confirms its preferred secure payment platform.',
    support: 'Coming soon',
    actionLabel: 'Online giving option coming soon',
  },
  {
    title: 'Give via SnapScan / Zapper',
    description: 'QR-based giving can be added later as a convenience option for members who prefer quick mobile payments.',
    support: 'Future convenience option',
    actionLabel: 'SnapScan / Zapper coming soon',
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
];

export const contactActions = [
  {
    title: "Send an email",
    value: churchInfo.email,
    href: churchInfo.emailHref,
  },
  {
    title: "Call the church",
    value: churchInfo.phoneDisplay,
    href: churchInfo.phoneHref,
  },
  {
    title: "Message on WhatsApp",
    value: 'More information about visiting',
    href: churchInfo.whatsappHref,
  },
  {
    title: 'Prayer on WhatsApp',
    value: 'Prayer / pastoral support',
    href: churchInfo.whatsappPrayerHref,
  },
  {
    title: "Open directions",
    value: `${churchInfo.venue}, ${churchInfo.city}`,
    href: churchInfo.mapHref,
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
    imageSrc: '/images/pastor/pastor-1.jpg',
    description:
      "Pastor Thabang Ngwenya is the lead pastor of Renewed Life International. He is passionate about preaching the Word of God, building disciples, and seeing lives transformed by the power of Jesus Christ. Since the church’s founding in 2018 and official launch in 2019, he has faithfully helped lead Renewed Life with a heart for spiritual growth, biblical teaching, and community impact.",
  },
  {
    title: "Pastor Masetchaba “Zee” Ngwenya",
    imageSrc: '/images/pastor-zee.jpg',
    description:
      "Pastor Masetchaba “Zee” Ngwenya serves alongside Pastor Thabang as a key leader at Renewed Life International. She is passionate about people, worship, prayer, and spiritual transformation. As part of the founding journey of the church, she has helped shape a ministry environment marked by faith, warmth, and a deep desire to see people grow in Christ.",
  },
];

export const pastorWelcome = {
  title: "A welcome from our pastors",
  description:
    "Renewed Life was built with simple faith, deep dependence on God, and a desire to see people encounter Jesus, find family, and live with purpose. Whether you are visiting for the first time or looking for a church home, you are welcome here.",
};
