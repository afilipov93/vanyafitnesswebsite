import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

class Footer extends React.Component { 
  render (){
    const c = this.props.data.footer
    
    const social = c.socialMedia.socialLinks.map((social) => (<li key={social.social.name}><a href={social.social.link}><FontAwesomeIcon icon={["fab", social.social.name === 'facebook' ? social.social.name+"-f" : social.social.name]}/></a></li>))
    return(
      <footer>
        <section className="social-container">
        <ul>
          {social}
        </ul>
        </section>
        <section className="rights">
          <p>
            <span>&copy; 2021 {c.siteInfo.copyright}</span>
            <span>&#8226;</span>
            <a href={c.siteInfo.privacy.link}>{c.siteInfo.privacy.title}</a>
            <span>&#8226;</span>
            <a href={c.siteInfo.terms.link}>{c.siteInfo.terms.title}</a>
          </p>
        </section>
      </footer>
    )
}
}
export default Footer;