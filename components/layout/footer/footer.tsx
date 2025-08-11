import Link from "next/link"
import { Icon } from "@/components/ui/icon"
import { Logo } from "@/components/ui/logo"
import { siteConfig } from "@/lib/data/site-config"
import styles from "./footer.module.css"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Company",
      links: [
        { href: "/vision", label: "Our Vision" },
        { href: "/get-started", label: "Get Started" },
        { href: "/services", label: "Our Services" },
        { href: "/partnership", label: "Partnership" },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "/services#marketing-solutions", label: "Marketing Solutions" },
        { href: "/services#ai-automation", label: "AI Automation" },
        { href: "/services#admin-support", label: "Admin Support" },
        { href: "/partnership#form", label: "Custom Solutions" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/partnership#form", label: "Contact Us" },
        { href: "/services#our-process", label: "Our Process" },
        { href: "/partnership#form", label: "Get Help" },
        { href: "/about", label: "About Us" },
      ],
    },
  ]

  const socialLinks = [
    { name: "Linkedin", href: siteConfig.links.linkedin, icon: "Linkedin" },
    { name: "Twitter", href: siteConfig.links.twitter, icon: "Twitter" },
    { name: "Instagram", href: siteConfig.links.instagram, icon: "Instagram" },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.gridLayout} grid md:grid-cols-2 lg:grid-cols-6 gap-12`}>
          {/* Company Info */}
          <div className={`${styles.companySection} lg:col-span-2 space-y-6`}>
            <div className="group mb-6">
              <Logo size="md" />
            </div>
            <p className={styles.description}>
              Transforming businesses through innovative marketing, AI automation, and professional support. Your
              success is our mission.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name={social.icon as any} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className={styles.section}>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              <div className={styles.linkList}>
                {section.links.map((link) => (
                  <Link key={link.href} href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Contact Info */}
          <div className={`${styles.section} lg:col-span-2`}>
            <h3 className={styles.sectionTitle}>Connect</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Icon name="MapPin" size={24} />
                <span className="whitespace-pre-line">{siteConfig.links.address}</span>
              </div>
              <div className={styles.contactItem}>
                <Icon name="Mail" size={20} />
                <a href={`mailto:${siteConfig.links.email}`} className="hover:text-yellow-400 transition-colors">
                  {siteConfig.links.email}
                </a>
              </div>
              <div className={styles.contactItem}>
                <Icon name="Phone" size={20} />
                <a href={`tel:${siteConfig.links.phone}`} className="hover:text-yellow-400 transition-colors">
                  {siteConfig.links.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              &copy; {currentYear} {siteConfig.name}. Transforming Business Excellence.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>
                Privacy
              </Link>
              <Link href="/terms" className={styles.bottomLink}>
                Terms
              </Link>
              <Link href="/security" className={styles.bottomLink}>
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
