var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var pages = {
	overview :{
		title : "Ahamed Rishthas Portfolio|Overview",
		content : `
				<p >
					Software professional with a BTech Degree in Computer Science and an experience of 7 years  in Finacle (Core Banking), Java,
					Java scripting, Unix and Oracle. 

				</p>
				<p >
					
					<table>
						<tr>
							<td>
								&#9755; Result oriented Professional, offering over 7 years of experience in areas encompassing Core Banking, Finacle 10.x Infrastructure and Finacle 10.x EOD, Techno Functional Support in Finacle, Finacle Customization, Java Scripting, Unix and Oracle Administration and Finacle Infrastructure Support & Troubleshooting.
							</td>
						</tr>
						<tr>
							<td>&#9755; Have hands on experience in 5 Finacle Live Implementation projects, offshore and onsite, in providing excellent and prompt solution that won many Internal Awards and Client Appreciations.
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Currently spearheading as Technology Analyst with Infosys Technologies Ltd. 
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Experienced in handling overall IT functions like IT Infrastructure, Application Management, Management for all Systems, Coordination with IT Vendors/Partners, Systems Review & Audit and Implementation of Modules.
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Strong competence to collaborate with Senior Management and Clients for providing strategic inputs and IT vision and implement new technologies.
							</td>
						</tr>
						<tr>
							<td>
								&#9755; An assertive individual, capable of performing a wide range of people management functions like  team building, goal setting, training and mentoring
							</td>
						</tr>
					</table>
					
				</p>`
	},
	careerGlimpse :{
		title : "Ahamed Rishthas Portfolio|Career Glimpse",
		content : `
				<p>
					<b><i><u>As Technology Analyst (August’14 – Present)</b></i></u>
					<table>
						<tr>
							<td>
								&#9755; Collecting requirements from the Client, check the feasibility and gap in the product for the requirement and propose the customization approaches to bridge the gap.
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Module Lead for the Interface Module of  Finacle, Infrastructure and Assets in FONDEP Morocco implementation project.
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Responsible for offshore support SPOC for Mauritius Post and Co operative Bank (Mauritius) in Technical and Functional Issues in Finacle
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Responsible for automation of daily activities in System administration, Database Administration and Application Management using scripting
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Prioritizing issues and Coordinating with different teams to generate an optimal solution and delivering the same to Client with in SLA period.
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Mentoring and training the new team members to take up their respective roles and responsibilities in achieving the team goal. 
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Communicating with client for Issue updates and discussion with client to reach an optimal solution for the Issues report within the given SLA 
							</td>
						</tr>
						
					</table>
				</p>
				<p>
					<b><i><u>As Senior System Engineer (June'12 – July’14)</b></i></u>
					<table>
						<tr>
							<td>
								&#9755; Responsible for offshore support for Equity Bank (Kenya) and Mauritius Post and Co operative Bank (Mauritius) in Technical and Functional Issues in Finacle.
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Responsible for Offshore and onsite support for Standard Bank (Nigeria, Namibia and Uganda) in EOD, Deployment, Interface and Infrastructural issues.	
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Responsible for automation of daily activities in System administration, Database Administration and Application Management using scripting.
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Prioritizing issues and Coordinating with different teams to generate an optimal solution and delivering the same to Client with in SLA period
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Mentoring and training the new team members to take up their respective roles and responsibilities in achieving the team goal.   
							</td>
						</tr>
						
						
					</table>
				</p>
				
				<p>
					<b><i><u>As Systems Engineer (Mar'10 - June'12)</b></i></u>
					<table>
						<tr>
							<td>
								&#9755; Responsible for Offshore and onsite support for Standard Bank (Nigeria and Namibia) in EOD, Deployment and Infrastructural issues
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Instrumental at Implementation, Support, Customization and Testing for Model Bank (A Prototype bank for US Market)
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Handled System Integration Testing for Finacle 10.4.x release
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Responsible for automation of daily activities in System administration, Database Administration and Application Management using scripting
							</td>
						</tr>
					</table>
				</p>
				<p>
					<b><i><u>As System Engineer Trainee (Aug'09 - Mar'10)</b></i></u>
					<table>
						<tr>
							<td>
								&#9755; Trained in C,RDBMS, Unix, Java, Finacle Functional Concepts, Finacle Customization and Implementation & Finacle Training in CWB, Jasper, MRT, FI
							</td>
						</tr>
					</table>
				</p>
				`
				
	},
	techSkills :{
		title : "Ahamed Rishthas Portfolio|Technical Skills",
		content : `
				<p>
					<table >
						<tr>
							<td>&#9755; <b>Operative System</b>&nbsp;:</td><td> UNIX (AIX/SunOS), Linux, Windows 7, XP</td>
						
						</tr>
						<tr>
							<td>&#9755; <b>Languages</b>&nbsp;:</td><td> Pl/Sql, Finacle Scripting, UNIX Shell scripting, Java Script, Java</td>
						
						</tr>
						<tr>
							<td>&#9755; <b>Functional Domain</b>&nbsp;:</td><td> Core Banking, Lending, Finacle 10.x Infrastructure and Finacle 10.x EOD</td>
						
						</tr>
						<tr>
							<td>&#9755; <b>Frontend & Backend</b>&nbsp;</td><td> Oracle (10g, 11g), JSP, Node JS, ExperessJS</td>
						
						</tr>
						<tr>
							<td>&#9755; <b>Tools</b>&nbsp;:</td><td> FDM, APDM, CWB, Finacle Scripting Studio (Finacle Tools), Eclipse, TOAD, SQL Developer, FSDP</td>
						
						</tr>
						
					</table>
				</p>
				
				
				`
				
	},
	academia :{
		title : "Ahamed Rishthas Portfolio|Academia",
		content : `
				<p>
					<table >
						<tr>
							<th>
								Year of Pass Out
							</th>
							<th> 
								University/College
							</th>
							<th>
								Aggregate
							</th>
						<tr>
						<tr>
							<td>
								<b>
									2009
								</b>&nbsp;
							</td>
							<td> 
								Bachelor of Technology from MES College of Engineering, University of Calicut
							</td> 
							<td>
								67.5%
							</td>
						
						</tr>
						<tr>
							<td>
								<b>
									2005
								</b>&nbsp;
							</td>
							<td> 
								XII from Peveees Public School, Nilambur	(CBSE)
							</td> 
							<td>
								67.8%
							</td>
						
						</tr>
						<tr>
							<td>
								<b>
									2003
								</b>&nbsp;
							</td>
							<td> 
								X from International Indian School (CBSE), Jeddah  
							</td> 
							<td>
								69.6%
							</td>
						
						</tr>
						
						
					</table>
				</p>
				
				<p>
					<b><u>CERTIFICATIONS & TRAININGS UNDERGONE</b></u>
					<table>
						<tr>
							<td>
								&#9755; Completed Web programming in Java from SSI Ltd
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Training at Infosys Global Education Centre, Mysore in C, RDBMS, Oracle PL/SQL,HTML, UNIX, Java, JS & JSP

							</td>
						</tr>
						<tr>
							<td>
								&#9755; STAR Certified from Infosys Leadership Institute, Mysore.
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Finacle Functional Training in Banking Fundamentals

							</td>
						</tr>
						<tr>
							<td>
								&#9755; Finacle Technical training in Architecture, Customization, Implementation etc.
							</td>
						</tr>
						<tr>
							<td>
								&#9755; Undergone Design Thinking sessions. 
	
							</td>
						</tr>
					</table>
				</p>
				
				`
				
				
				
	}
};

function createTemplate(data){
	var title = data.title;
	var content = data.content;
	var htmlTemplate =`
		<html>
		<head>
			<title>
				${title}
			</title>
			<link href="/ui/style.css" rel="stylesheet" />
		</head>
		<body>
			
			<ul class="menu">
			  <li><a href="/overview">Overview</a></li>
			  <li><a href="/techSkills">Techincal Skills</a></li>
			  <li><a href="/careerGlimpse">Career Glimpse</a></li>
			  <li><a href="/academia">Academia</a></li>
			</ul>
				
			<hr>
			
			<div  class="divimag">
				<img src="/ui/Passport_photo1.jpg" class="img-medium"/>
				<br>
				<br>
				<b> Ahamed Rishthas K</b>
				<br>
				<b>&#9742</b> - +919895890282
				<br>
				<b>&#9993</b> rishthu@gmail.com
				<b>&#8962;</b>
			</div>
			
			<div class="content">
				${content}
			</div>
			<script type="text/javascript" src="/ui/main.js">
			</script>
		</body>
	</html>

	`;
	return htmlTemplate;
}


app.get('/', function (req, res) {
	var pageName = 'overview';
  res.send(createTemplate(pages[pageName]));

});

app.get('/:pageName', function (req, res) {
	var pageName = req.params.pageName;
	
  res.send(createTemplate(pages[pageName]));

});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/Passport_photo1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Passport_photo1.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
