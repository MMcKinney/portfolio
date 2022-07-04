const Experience = () => {
    return (
        <div className="experience">
            <h2>Experience</h2>
            <i>See full employment history on <a href="https://www.linkedin.com/in/michaelmckinney91/" target="_blank"><strong>LinkedIn</strong></a></i>
            <ul>
                <li>
                    <strong>Software Engineer</strong> - <i>Network Brainiacs</i> 2022 (3 mos)
                    <ul>
                        <li>Modified Dolibarr ERP/CRM platform using AWS EC2 linux servers, WAMP and LAMP stacks, VS Code, PHP, MySQL, JIRA, Bitbucket, Git, HTML, CSS, JavaScript.</li>
                        <li>Created a new SCRUM/Kanban agile SDLC process.</li>
                    </ul>
                </li>
                <li>
                    <strong>Software Developer III</strong> - <i>Ironclad Technology Services</i> 2020-2021 (1 yr)
                    <ul>
                        <li>Implemented front-end/back-end changes to a DoD dashboard using .NET MVC Core 3, Entity Framework, SQL Server Integration Services.</li>
                    </ul>
                </li>
                <li>
                    <strong>Sr Computer Scientist</strong> - <i>General Dynamics Information Technology (GDIT) / Nemean Solutions</i> 2019-2020 (1.5 yrs)
                    <ul>
                        <li>Worked for both companies on one contract, same team/job.</li>
                        <li>Architected a new website to support multiple small teams using .Net Core, Entity Framework, Vue.js and Bootstrap to run on IIS and MS SQL Server.</li>
                        <li>Implemented front-end/back-end changes to websites using .Net MVC and Entity Framework to support new requirements.</li>
                    </ul>
                </li>
                <li>
                    <strong>Sr Web Application Developer</strong> - <i>STG Inc / SOS International / GDIT / Apex Systems</i> 2012-2019 (7 yrs)
                    <ul>
                        <li>Worked for many companies on one contract, same team/job.</li>
                        <li>Researched and implemented a prototype of a globe/map application using D3.js. Implemented smooth panning via conversion between quaternions, lat long and euler angles, several 2D map projections, 2D and 3D solar terminator, and plotted points using SVG graphics.</li>
                        <li>Saved millions of dollars in server and development costs by fixing an incompatibility with a proprietary map application where several others had failed.</li>
                        <li>Proposed and documented a new agile development process using concepts from SCRUM and Kanban.  Mentored team members while implementing agile development processes.</li>
                        <li>Proposed, implemented and documented code standards, a new testing process, Jenkins, JIRA and Maven.</li>
                        <li>Administrated Apache, WebLogic and Oracle DB servers when admins were not available.  Software updates, backups, reviewed security compliance.</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Experience;