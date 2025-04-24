import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {footerLinks.map((link) => (
            <div key={link.label} className="px-5 py-2">
              <Link href={link.href} className="text-base text-gray-600 hover:text-gray-900">
                {link.label}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="mt-8 flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <a 
              key={social.name} 
              href={social.href} 
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{social.name}</span>
              <div className="h-6 w-6 text-center">{social.icon}</div>
            </a>
          ))}
        </div>
        
        <p className="mt-8 text-center text-base text-gray-500">
          &copy; {currentYear} Next.js App Router Demo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#' },
];

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: '📂',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    icon: '🐦',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: '🔗',
  },
];