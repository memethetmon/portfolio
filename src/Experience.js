import React, {Component} from "react";

class Experience extends Component {
  render() {
    return (
      <div className="content">
        <h1 className="topic">Experience</h1>
        <div>
          <div className="company">
            <img src={require('./assets/images/engage.png')} alt="Engage:BDR" />
            <span className="jobTitle"><b>Frontend Developer</b></span>
            <span>Sep 2016 - Oct 2018</span>
          </div>
          <ul>
            <li>Developed and tested the admin features of the monthly subscription based clothing website using CodeIgniter</li>
            <li>Developed and maintained the UI of internal digital advertising platform using AngularJS v1.5</li>
            <li>Collaborated with designers and back-end developers to implement and improve features</li>
            <li>Helped working on Java backend to modify the API features whenever the database structure changed</li>
            <li>Utilized Elasticsearch to get data for reports</li>
            <li>Continuously refactored and optimized the system to improve the efficiency and quality of the products</li>
            <li>Tested user experience of all web properties across multiple browsers and screen sizes</li>
            <li>Tested and debugged all elements before release to production</li>
            <li>Collaborated closely with the team to implement features for an influencer + brand marketing platform</li>
            <li>Worked closely with the client, the project manager and the lead developer to determine the work scope</li>
            <li>Maintained an organized workflow using version control tools such as GitLab and SVN</li>
            <li>Monitored, troubleshot and debugged users' issues after deployment</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Experience;
