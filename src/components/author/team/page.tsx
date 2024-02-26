import Link from "next/link";
import Image from "next/image";
import Container from "@/src/components/elements/container/page";
import { FcGraduationCap } from "react-icons/fc";

interface Team {
  para: string;
  id: number;
  slug: string;
  image: string;
  title: string;
}

export default function AuthorTeam() {
  return (
    <>
      <Container>
        <div className="team ">
          {TeamData.map((data: Team) => (
            <>
              <div className="card sm:mb-1 mb-10" key={data.id}>
                <div className="img">
                  <Link href={`/team/${data.slug}`}>
                    <Image
                      src={data.image}
                      alt={data.title}
                      title={data.title}
                      height={500}
                      width={500}
                    />
                  </Link>
                  <span>
                    <FcGraduationCap />
                  </span>
                </div>
                <div className="caption">
                  <h3>{data.title}</h3>
                  <span>{data.para}</span>
                </div>
              </div>
            </>
          ))}
        </div>
      </Container>
    </>
  );
}

export const TeamData: Team[] = [
  {
    id: 1,
    title: "Muzammil Safdar",
    image: "/team/muzammil.jpg",
    slug: "muzammil",
    para: "Full Stack Developer",
  },
  {
    id: 2,
    title: "Imran Safdar",
    image: "/team/imran.jpg",
    slug: "/imran",
    para: "Robotics Engineering",
  },
  {
    id: 3,
    title: "Rashid Ali",
    image: "/team/rashid.jpg",
    slug: "/",
    para: "Graphic Designer",
  },
  {
    id: 4,
    title: "Saim Saeed",
    image: "/team/rashid.jpg",
    slug: "/",
    para: "Full Stack Developer",
  },
  {
    id: 5,
    title: "Yasir Ghuffar",
    image: "/team/yasir.png",
    slug: "/",
    para: "Frontend Developer",
  },
  {
    id: 6,
    title: "fd",
    image: "/team/women.jpg",
    slug: "/",
    para: "Textile Designer",
  },
];
