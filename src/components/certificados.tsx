import '../styles/certificates.css'
import useTranslation from "@/hooks/use-translation";
import { certificates } from '@/libs/certificados';
import Image from 'next/image';
import Link from "next/link";

export function Certificados() {
  const {t} = useTranslation();
  
  function CertificateItem({certificate}) {
    return (
      <li>
        <Link href= {certificate.link}
          target="_blank" 
          rel="noopener noreferrer">
          <h4>{certificate.title}</h4>
        </Link>
        <Image
          src={certificate.link}
          alt={certificate.altText}
          layout="responsive"
          width={400}
          height={300}
          />
      </li>
    );
  }
  
  return (
    <div className="certificates">
      <div className="div_box_right" title="">
        <h2>{t('certificates')}</h2>
        <ul>
        {certificates.slice(-3).map((c) => (
          <CertificateItem key={c.title} certificate={c} />
        ))}
      </ul>
        <Link href="/certificados">
          <h4>{t('more')}</h4>
        </Link>
      </div>
    </div>
  );
}