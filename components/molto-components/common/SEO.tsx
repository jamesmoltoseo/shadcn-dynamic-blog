import React from 'react';
import Script from 'next/script';
import Head from 'next/head';

interface SEOProps {
  author?: string;
  sitename?: string;
  siteUrl?: string;
  siteNameUrl?: string;
  logopath?: string;
  title?: string;
  tag?: string;
  description?: string;
  image?: string;
  url?: string;
  linkedIn?: string;
  telephone?: string;
  address?: string;
  local?: string;
  postcode?: string;
  country?: string;
  latitude?: string;
  longitude?: string;
  updated?: string;
  published?: string;
  modified?: string;
  siteUrlPT?: string;
  urlPT?: string;
  urlENPT?: string;
}

const SEO: React.FC<SEOProps> = ({
  sitename = 'Molto SEO',
  siteUrl = 'https://moltoseo.co.uk',
  siteUrlPT = 'https://moltoseo.pt',
  logopath = 'https://moltoseo.co.uk/img/logo/molto-seo.png',
  author = 'Molto SEO',
  linkedIn = 'https://www.linkedin.com/in/finlaysonj/',
  telephone = '+44 07480 603 345',
  address = '9 Moreland St',
  local = 'London, United Kingdom',
  postcode = 'EC1V 8BE',
  country = 'UK',
  latitude = '51.529206652814715',
  longitude = '-0.09873897116400623',
  tag,
  image,
  title = '',
  description,
  url,
  urlPT,
  urlENPT,
  updated = '2022-12-12T19:57:40+00:00',
  published = '2022-12-12T19:57:40+00:00',
  modified = '2022-12-12T19:57:40+00:00'
}) => {
  const sentence = title.split(' ');
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  const titleCaps = sentence.join(' ');
  return (
    <>
     <Head>
      <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />\
      <meta name="google-site-verification" content="B-43YtlLbhe_E2duJ5hogYutwdId35AX9ArCsxHsNvI" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <title>
        {sitename} | {titleCaps}
      </title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${sitename} - ${titleCaps}`} />
      <meta property="og:site_name" content={sitename} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`${siteUrl}/${url}`} />
      <meta property="og:updated_time" content={updated} />
      <meta property="article:tag" content={tag} />
      <meta property="article:publisher" content={sitename} />
      <meta property="article:author" content={author} />
      <meta property="article:published_time" content={published} />
      <meta property="article:modified_time" content={modified} />
      <link rel="canonical" href={`${siteUrl}/${url}`} />
      {/* NOT SURE IF NEED EN-GB on th UK SITE AS ITS NOT reALLY ALTERNATE? */}
      {/* <link rel="alternate" href={`${siteUrl}/${url}`} hrefLang="en-gb" /> */}
      {/* <link rel="alternate" href={`${siteUrlPT}/${urlENPT}`} hrefLang="en-pt" />
      <link rel="alternate" href={`${siteUrlPT}/${urlPT}`} hrefLang="pt-pt" /> */}
      {/* Each page in the site has an <SEO> tag. 
          MAKE SURE urlPT & urlENPT values are from data/pt/keywords like:
          urlPT={`${details.parentDirectories}/${PT.Portfolio[0].title.toLowerCase().replace(/ /g, '-')}`}
          urlENPT={`${details.parentDirectories}/${ENPT.Portfolio[0].title.toLowerCase().replace(/ /g, '-')}`}
      */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${sitename} - ${titleCaps}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content={author} />
      <meta name="twitter:label2" content="Time to read" />
      <meta name="twitter:data2" content="15 minutes" />
      </Head>
      <Script id="googletagmgr" async src="https://www.googletagmanager.com/gtag/js?id=G-NZ0FWDX3GT"></Script>
      <Script
        id="googletagmgr2"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-MMQM2XP');
  
 
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NZ0FWDX3GT');
 `
        }}
      ></Script>
    </>
  );
};

export default SEO;
