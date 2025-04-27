



export const hotelsData = [
  {
    id: 1,
    image: "/images/h1.png",
    name: "The Grand London Resort and Spa",
    location: "Westminster, London",
    rating: 4.6,
    reviews: "2,345",
    price: "72",
  },
  {
    id: 2,
    image: "/images/h2.jpg",
    name: "Barcelona City Suites Deluxe Hotel",
    location: "Ciutat Vella, Barcelona",
    rating: 4.7,
    reviews: "1,912",
    price: "85",
  },
  {
    id: 3,
    image: "/images/h3.jpg",
    name: "Times Square Premium Stay Hotel",
    location: "Manhattan, New York",
    rating: 4.9,
    reviews: "3,420",
    price: "95",
  },
  {
    id: 4,
    image: "/images/h4.jpg",
    name: "Hilton Roma Luxury Hotel Palace",
    location: "Vaticano Prati, Rome",
    rating: 4.5,
    reviews: "2,876",
    price: "68",
  },
];

export const toursData = [
  {
    id: 1,
    image: "/images/t1.jpg",
    title: "Historic Wonders of Stonehenge & Oxford Tour",
    location: "Wiltshire, England",
    time: "12+ hours",
    type: "Cultural & Historical Tours",
    rating: 4.9,
    reviews: "1,245",
    price: "65",
  },
  {
    id: 2,
    image: "/images/t2.jpg",
    title: "Barcelona Gothic Quarter Walking Tour",
    location: "Ciutat Vella, Barcelona",
    time: "3+ hours",
    type: "Walking & Sightseeing Tours",
    rating: 4.7,
    reviews: "876",
    price: "50",
  },
  {
    id: 3,
    image: "/images/t3.jpg",
    title: "Thames Luxury Boat Cruise with Dinner",
    location: "London, United Kingdom",
    time: "2–3 hours",
    type: "Private & Luxury Cruises",
    rating: 4.8,
    reviews: "2,300",
    price: "110",
  },
  {
    id: 4,
    image: "/images/t4.jpg",
    title: "Edinburgh Haunted History Walking Tour",
    location: "Edinburgh, Scotland",
    time: "2+ hours",
    type: "Ghost & Mystery Tours",
    rating: 4.6,
    reviews: "1,050",
    price: "40",
  },
];

export const reviewData = [
  {
    id: 1,
    name: "คุณจันทรสุดา",
    review:
      "งานเทพื้นคอนกรีตที่ลานโรงงานเรียบร้อยมากครับ มีระบบระบายน้ำครบถ้วน ทีมงานดูแลทุกขั้นตอน ไม่ทิ้งงาน ทำงานตรงเวลา",
    image: "/images/user.png",
    job:"N/A",
  },
  {
    id: 2,
    name: "คุณปริญญา",
    review:
      "ก่อสร้างกำแพงกันดินออกมาได้แข็งแรง สวยงามเกินคาดเลยค่ะ ทีมงานมีความรู้และช่วยให้คำแนะนำเรื่องโครงสร้างดีมาก ประทับใจค่ะ",
    image: "/images/user.png",
    job:"N/A",
  },
  {
    id: 3,
    name: "คุณชัชฤทธิ์",
    review:
      "เลือกใช้บริการเพราะเห็นว่ามีประสบการณ์ตรง พอได้ทำจริง งานเรียบร้อยครับ ทีมงานใจเย็น ตอบทุกคำถาม และวัสดุที่ใช้ดีมาก",
    image: "/images/user.png",
    job:"N/A",
  },
  {
    id: 4,
    name: "คุณจาตุรันดร์",
    review:
      "ถมดินแล้วแน่นหนาดีมากเลยค่ะ เคยเจอที่อื่นทำแล้วทรุดง่าย แต่ของที่นี่จัดการให้ครบทุกขั้นตอน พร้อมแนะนำวิธีดูแลพื้นที่หลังถมดินด้วย",
    image: "/images/user.png",
    job:"N/A",
  },
  {
    id: 5,
    name: "คุณกิจกมล",
    review:
      "ขอบคุณธีรพงษ์เซอร์วิสมากครับ งานเทพื้นคอนกรีตได้มาตรฐานดีเยี่ยม รถขับเข้าออกสบาย ทีมงานสุภาพและมืออาชีพมากครับ",
    image: "/images/user.png",
    job:"N/A",
  },
  {
    id: 6,
    name: "LifeAllGlobal Co.,Ltd.",
    review:
      "ประทับใจตั้งแต่ขั้นตอนเสนอราคา ให้ข้อมูลละเอียด วัสดุที่ใช้คุณภาพดีมากค่ะ งานรั้วเรียบร้อย สวยงาม ปลอดภัย และตรงเวลาค่ะ",
    image: "/images/user.png",
    job:"N/A",
  },
  {
    id: 7,
    name: "คุณวสุ",
    review:
      "ตั้งแต่เริ่มคุยงานจนเสร็จ รู้สึกสบายใจครับ ทีมงานมีความรับผิดชอบสูง ไม่ทิ้งงาน วางแผนงานดี ส่งมอบตรงเวลา ราคายุติธรรม",
    image: "/images/user.png",
    job:"N/A",
  },
  {
    id: 8,
    name: "ยุทธนา",
    review:
      "ทำงานเรียบร้อย เก็บรายละเอียดดีมากค่ะ ไม่ต้องตามงานเลย มีการอัปเดตความคืบหน้าให้ตลอด ประทับใจในบริการค่ะ",
    image: "/images/user.png",
    job:"N/A",
  },
];

// กำหนด type ของ props ที่ใช้ใน component Hero
export type HeroProps = {
  videoSrc?: string;
  title?: string;
  subtitle?: string;
};

// กำหนด default props สำหรับ component Hero
export const defaultHeroProps: HeroProps = {
  videoSrc: "/images/tp-02.webm",
  title: "รับเหมาก่อสร้างครบวงจร บริการถมดิน กำแพงกันดิน เทพื้นคอนกรีต โดยทีมช่างมืออาชีพ",
  subtitle: `<section><p>บริษัท ธีรพงษ์เซอร์วิส จำกัด (Theeraphong Service Co., Ltd.)ให้บริการรับเหมาก่อสร้างหลากหลายประเภท โดยทีมงานมืออาชีพ มีประสบการณ์ตรงในงานก่อสร้างกว่า 10 ปี เราใส่ใจทุกขั้นตอนเพื่อมอบผลงานที่มีคุณภาพและความปลอดภัยสูงสุดพร้อมให้คำปรึกษาและออกแบบโครงการตามความต้องการของลูกค้า ครอบคลุมทั้งงานภาคเอกชนและภาครัฐ มั่นใจได้ว่างานเสร็จตรงเวลา งบไม่บานปลาย พร้อมรับประกันผลงานทุกโปรเจกต์</p><section>`,
};



export type UserProps = {
  id: bigint;
  name: string;
  email: string;
  email_verified_at?: Date;
  password: string;
  two_factor_secret?: string;
  two_factor_recovery_codes?: string;
  remember_token?: string;
  created_at?: Date;
  updated_at?: Date;
};

export type BlogProps = {
  id: bigint;
  title: string;
  description: string;
  content: string;
  image: string;
  servicename_id: bigint;
  created_at?: Date | null;
  updated_at?: Date | null;
  serviceName: ServiceNameProps;
};

export type ServiceNameProps = {
  id: bigint;
  service_name: string;
  created_at?: Date | null;
  updated_at?: Date | null;
  service_link: string;
  Service?: ServiceProps[];
  Blog?: BlogProps[];
};

export type ServiceProps = {
  id: bigint;
  service_id: bigint;
  kw_title: string;
  kw_des: string;
  kw_h1: string;
  kw_top1: string;
  kw_top2: string;
  kw_con1: string;
  kw_con2: string;
  kw_img1?: string | null ;
  kw_img2?: string | null;
  created_at?: Date | null;
  updated_at?: Date | null ;
  topalt?: string | null;
  bottomalt?: string | null;
};

export type ImageUploadProps = {
  id: bigint;
  service_id: bigint;
  img_url: string;
  created_at?: Date | null;
  updated_at?: Date | null ;
  location: string;
  worked_date: Date;
  service?: ServiceProps | null;
};

export type FailedJobProps = {
  id: bigint;
  uuid: string;
  connection: string;
  queue: string;
  payload: string;
  exception: string;
  failed_at: Date;
};

export type MigrationProps = {
  id: bigint;
  migration: string;
  batch: bigint;
};

export type PersonalAccessTokenProps = {
  id: bigint;
  tokenable_type: string;
  tokenable_id: bigint;
  name: string;
  token: string;
  abilities?: string;
  last_used_at?: Date;
  created_at?: Date;
  updated_at?: Date;
};

export type SessionProps = {
  id: string;
  user_id?: bigint;
  ip_address?: string;
  user_agent?: string;
  payload: string;
  last_activity: bigint;
};


export type FullServiceProps = ServiceProps & {
  serviceName: ServiceNameProps;
  ImageUpload: ImageUploadProps[];
};



