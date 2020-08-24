// dependencies
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// utilities
import { splitArray } from "../utilities";

const Footer = ({ profile }) => {
  // destructure profile
  const { fullName, headline, skills, github, linkedIn } = profile;

  // state hook variables
  const [skills2D, setSkills2D] = useState([[], []]);

  // split skills array into halves
  useEffect(() => skills && setSkills2D(splitArray(skills)), [skills]);

  return (
    <footer className="page-footer" style={{backgroundColor:"#424242"}}>
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h5 className="color-green">{fullName}</h5>
            <p className="grey-text text-lighten-4">{headline}</p>
          </div>
          <div className="col s12 m4 offset-m2">
            <div className="row">
              <div className="col s12">
                <h5 className="color-green">Skills</h5>
              </div>
              <div className="col s3 m6 l4">
                <ul>
                  {skills2D[0] &&
                    skills2D[0].map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                </ul>
              </div>
              <div className="col s3 m6 l4">
                <ul>
                  {skills2D[1] &&
                    skills2D[1].map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright" style={{backgroundColor:"#616161"}}>
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <span className="fuck">{`© Copyright ${new Date().getFullYear()}`}</span>
            </div>
            <div className="col s12 m4 offset-m2">
              <a href={github} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
              <a href={linkedIn} rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
