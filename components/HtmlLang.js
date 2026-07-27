"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const LANG_MAP = {
  en: 'en-IN',
  hi: 'hi-IN',
  bn: 'bn-IN',
  te: 'te-IN',
  mr: 'mr-IN',
  ta: 'ta-IN',
  gu: 'gu-IN',
  kn: 'kn-IN',
  ml: 'ml-IN',
  pa: 'pa-IN',
  or: 'or-IN',
  ur: 'ur-IN',
  ks: 'ks-IN',
  kok: 'kok-IN',
  as: 'as-IN',
  mni: 'mni-IN',
  sat: 'sat-IN',
};

const DIR_MAP = {
  ur: 'rtl',
  ks: 'rtl',
};

export default function HtmlLang() {
  const pathname = usePathname();
  useEffect(() => {
    const seg = (pathname || '/').split('/').filter(Boolean)[0];
    const lang = LANG_MAP[seg] ? seg : 'en';
    const locale = LANG_MAP[lang] || 'en-IN';
    const dir = DIR_MAP[lang] || 'ltr';
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [pathname]);
  return null;
}
