import Link from "next/link";
import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WorkItem({
    key,
    name,
    img,
    imgAlt,
    description,
    url,
    github
}: {
    key: number;
    name: string;
    img: string;
    imgAlt: string;
    description: string;
    url: string;
    github: string;
}
) {
    return (
        <div className="w-full border rounded">
            
        </div>
    )
}