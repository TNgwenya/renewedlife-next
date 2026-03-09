'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
  phoneHref: string;
  phoneDisplay: string;
  whatsappHref: string;
};

export default function MobileNav({ navLinks, phoneHref, phoneDisplay, whatsappHref }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) {
        return;
      }

      const focusableItems = panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');

      if (focusableItems.length === 0) {
        return;
      }

      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeydown);
      const firstLink = panelRef.current?.querySelector<HTMLElement>('a[href], button:not([disabled])');
      firstLink?.focus();
    } else {
      toggleRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [isOpen]);

  return (
    <div className="mobile-nav-shell">
      <button
        type="button"
        className="mobile-nav-toggle"
        ref={toggleRef}
        aria-expanded={isOpen}
        aria-controls="mobile-site-nav"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen ? <button type="button" className="mobile-nav-backdrop" aria-label="Close navigation menu" onClick={() => setIsOpen(false)} /> : null}

      <div id="mobile-site-nav" className={`mobile-nav-panel${isOpen ? ' is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="mobile-nav-panel-inner" ref={panelRef}>
          <p className="card-label">Menu</p>
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-nav-actions">
            <Link href="/plan-your-visit" className="button" onClick={() => setIsOpen(false)}>
              Plan Your Visit
            </Link>
            <a href={whatsappHref} className="button button-ghost" target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>
              WhatsApp us
            </a>
            <a href={phoneHref} className="text-link" onClick={() => setIsOpen(false)}>
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
