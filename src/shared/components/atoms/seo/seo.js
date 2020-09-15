// /**
//  * SEO component that queries for data with
//  *  Gatsby's useStaticQuery React hook
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/
//  */
// import { graphql, useStaticQuery } from "gatsby";
// import PropTypes from "prop-types";
// import React from "react";
// import Helmet from "react-helmet";
// import { siteUrl } from '../../../utils/siteUrl';
// import { unicodeUtil } from "../../../utils/unicodeUtil";

// function SEO(props) {

//   const { site, allContentfulNolPaises } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//             siteUrl
//           }
//         }
//         allContentfulNolPaises(filter: {node_locale: {eq: "es-CO"}}) {
//           nodes {
//             dominioDelPais
//             codigoIcu
//           }
//         }
//       }
//     `
//   );

//   var hrefLangList = []
//   allContentfulNolPaises.nodes.map(ele => {
//     hrefLangList.push(
//       {
//         "rel": "alternate",
//         "href": ele.dominioDelPais,
//         "hrefLang": ele.codigoIcu
//       }
//     )
//     return null
//   })

//   const meta = props.meta;
//   const title = props.title;
//   let lang = props.lang;
//   let metaDescription = props.description || site.siteMetadata.description;
//   let author = site.siteMetadata.author;
//   let siteUrlDynamics = props.url || site.siteMetadata.siteUrl;
//   let ogImageUrl = props.image || siteUrl + "/nosotrasonline.png";
//   let script = props.script;

//   // Organization Schema
//   const org = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "name": "NosotrasOnline",
//     "alternateName": author,
//     "url": siteUrl,
//     "logo": siteUrl + "/nosotrasonline.png",
//     "contactPoint": {
//       "@type": "ContactPoint",
//       "telephone": process.env.COUNTRY_CONTACT,
//       "contactType": "customer service",
//       "contactOption": "TollFree",
//       "areaServed": "CO",
//       "availableLanguage": "es"
//     },
//     "sameAs": "https://www.facebook.com/NosotrasColombia/"
//   };

//   // WebSite Schema
//   const website = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     "@id": siteUrl + "#website",
//     "headline": "NosotrasOnline",
//     "name": "NosotrasOnline",
//     "description": unicodeUtil(site.siteMetadata.description),
//     "url": siteUrl,
//     "potentialAction": {
//       "@type": "SearchAction",
//       "target": siteUrl + "?s={search_term_string}",
//       "query-input": "required name=search_term_string"
//     }
//   };

//   let schemas = [];
//   if (script) {
//     schemas = [org, website, script];
//   } else {
//     schemas = [org, website];
//   }

//   const schemaOrgJSONLD = {
//     type: 'application/ld+json',
//     innerHTML: JSON.stringify(schemas)
//   };

//   return (
//     <Helmet
//       htmlAttributes={{ lang }}
//       title={title}
//       titleTemplate={`%s`}
//       link={[
//         {
//           "rel": "icon",
//           "type": "image/png",
//           "href": "/favicon.ico"
//         }
//       ].concat(hrefLangList)}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription,
//         },
//         {
//           property: `image`,
//           content: ogImageUrl,
//         },
//         {
//           property: `fb:app_id`,
//           content: `554978031914420`,
//         },
//         {
//           property: `og:title`,
//           content: title,
//         },
//         {
//           property: `og:description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:image`,
//           content: ogImageUrl,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           property: `og:url`,
//           content: siteUrlDynamics,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary`,
//         },
//         {
//           name: `twitter:creator`,
//           content: site.siteMetadata.author,
//         },
//         {
//           name: `twitter:title`,
//           content: title,
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription,
//         },
//         {
//           name: `twitter:image`,
//           content: ogImageUrl,
//         },
//         {
//           name: 'google-site-verification',
//           content: process.env.GOOGLE_SITE_VERIFICATION
//         },
//       ].concat(meta)}
//       script={[schemaOrgJSONLD]}
//     />
//   )
// }

// SEO.defaultProps = {
//   lang: `es`,
//   meta: [],
//   description: ``,
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

// export default SEO;