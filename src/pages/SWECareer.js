import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

// 프로젝트 데이터 배열
const projects = [
  {
    title: "DrillQuiz - Quiz Learning Platform",
    description: "Built with complete vibe coding using Cursor.ai with ChatGPT.",
    tech: "Python, Vue.js, Golang, OpenAPI, GitOps, ArgoCD, Kubernetes",
    link: "https://us.drillquiz.com/",
    tags: ["Vibe Coding", "Python", "Vue.js", "Golang", "OpenAPI", "GitOps", "ArgoCD", "Kubernetes"]
  },
  {
    title: "S3 Repo Management",
    description: "S3 repository management application with modern web interface and cloud storage integration.",
    tech: "Golang / Vue.js",
    link: "https://github.com/doohee323/tz-s3-repo-mgmt",
    tags: ["Golang", "Vue.js", "AWS S3", "Repository Management"]
  },
  {
    title: "Basic Spring Boot",
    description: "Spring Boot application template with essential configurations and best practices.",
    tech: "Spring boot",
    link: "https://github.com/doohee323/tz-spring-boot",
    tags: ["Spring Boot", "Java", "RESTful API", "Microservices"]
  },
  {
    title: "Google Web",
    description: "Integration with Google Script API using Spring Boot backend.",
    tech: "Google Script API, Spring boot",
    link: "http://gweb.topzone.biz/",
    tags: ["Google APIs", "Spring Boot", "REST", "JavaScript"]
  },
  {
    title: "Multiple Commands in SSH / Telnet / Shell",
    description: "Tool for executing multiple commands in SSH, Telnet, and Shell environments.",
    tech: "Java core",
    link: "https://github.com/doohee323/mcmd",
    tags: ["Java", "SSH", "Telnet", "Shell", "Automation"]
  },
  {
    title: "Chat App (Admin)",
    description: "Administrative interface for managing a real-time chat application.",
    tech: "PHP, node.js(socket.io), angular.js",
    link: "http://admin.topzone.biz",
    tags: ["PHP", "Node.js", "Socket.io", "Angular.js", "Real-time"]
  },
  {
    title: "Chat Room",
    description: "Real-time chat application using Play framework and WebSockets.",
    tech: "Play!, angular.js, Websocket",
    link: "http://chatroom.topzone.biz:9000",
    tags: ["Play Framework", "Angular.js", "WebSockets", "Real-time"]
  },
  {
    title: "CMS (Content Management)",
    description: "Content management system with dynamic content handling and real-time updates.",
    tech: "node.js, angular.js, socket.io, crawler",
    link: "http://52.0.156.206:3003",
    tags: ["Node.js", "Angular.js", "Socket.io", "Web Crawler", "CMS"]
  },
  {
    title: "Common Assets for ERP",
    description: "Reusable components and assets for Enterprise Resource Planning systems.",
    tech: "Spring",
    link: "http://goo.gl/O4Bp3o",
    tags: ["Spring", "ERP", "Java", "Enterprise"]
  },
  {
    title: "SpringORM",
    description: "Object-Relational Mapping implementation with Spring Framework.",
    tech: "Spring f/w, mysql, redis",
    link: "https://github.com/doohee323/SpringORM",
    tags: ["Spring", "ORM", "MySQL", "Redis", "Database"]
  },
  {
    title: "Multi-line and Geographic Chart",
    description: "Interactive data visualization with multi-line charts and geographic mapping.",
    tech: "D3 chart",
    link: "http://prototype-chart-d3.s3-website-us-west-1.amazonaws.com",
    tags: ["D3.js", "Data Visualization", "Charts", "Maps", "JavaScript"]
  },
  {
    title: "Multiple Request (HTTP) / Shell Command",
    description: "Concurrent HTTP request handling and shell command execution in Go.",
    tech: "Golang",
    link: "https://github.com/doohee323/tz_mcall",
    tags: ["Golang", "HTTP", "Shell", "Concurrency", "CLI"]
  },
  {
    title: "CodeGenerator",
    description: "Automated code generation tool for Spring applications with Oracle database.",
    tech: "Spring, Oracle, freemarker",
    link: "https://github.com/doohee323/lhf.codeGenerator",
    tags: ["Spring", "Oracle", "FreeMarker", "Code Generation", "Automation"]
  },
  {
    title: "UI Pattern",
    description: "UI design patterns and implementations with Angular.js and various databases.",
    tech: "angular.js, mysql, redis, mongoDB",
    link: "https://github.com/doohee323/angularPattern",
    tags: ["Angular.js", "MySQL", "Redis", "MongoDB", "UI Patterns"]
  },
  {
    title: "CRUD Grid",
    description: "Data grid with full CRUD operations and real-time updates.",
    tech: "angular.js, node.js, express, socket.io",
    link: "https://github.com/doohee323/ngExcel",
    tags: ["Angular.js", "Node.js", "Express", "Socket.io", "Data Grid"]
  },
  {
    title: "Web Crawler",
    description: "Web content crawler with Android WebView integration.",
    tech: "android, webview, angular.js",
    link: "https://github.com/doohee323/ConcordChurch",
    tags: ["Android", "WebView", "Angular.js", "Web Crawler", "Mobile"]
  },
  {
    title: "WordPress on Vagrant",
    description: "Development environment for WordPress using Vagrant virtual machines.",
    tech: "wordpress",
    link: "https://github.com/doohee323/wordpress-vagrant",
    tags: ["WordPress", "Vagrant", "PHP", "CMS", "Development Environment"]
  },
  {
    title: "News Feeder Webapp",
    description: "News aggregation and feed application with Android WebView.",
    tech: "android, webview, angular.js",
    link: "https://github.com/doohee323/newsFeeder",
    tags: ["Android", "WebView", "Angular.js", "News Feed", "Mobile"]
  }
];

// 기술 스택 데이터
const skillSets = [
  { category: "Language", skills: "JavaScript/TypeScript, Python, Java, Golang, PHP" },
  { category: "Framework", skills: "Spring (Boot, MVC, Security, Data), Pyramid, GoGin, Jetty, Play!" },
  { category: "Frontend", skills: "React, Vue.js, Angular" },
  { category: "Database", skills: "Mysql, Redis, Elasticsearch, DynamoDB, MongoDB" },
  { category: "APIs & Integration", skills: "REST, WebSockets, OAuth 2.0, JWT, OpenAPI" },
  { category: "DevOps & Cloud", skills: "GitOps, ArgoCD, Kubernetes, Docker, CI/CD" },
  { category: "AI-Assisted Development", skills: "Cursor.ai, ChatGPT, Vibe Coding, AI Code Generation" }
];

// 주요 경력 데이터 - 현재 사용되지 않음
/* 
const careerExperience = [
  {
    role: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2020 - Present",
    description: "Led the development of scalable microservices architecture using Spring Boot and React. Improved system performance by 40% through database optimization and caching strategies.",
    projects: [
      {
        name: "E-commerce Platform Redesign",
        description: "Led a team of 5 engineers to redesign the company's e-commerce platform. Implemented React for the frontend and Node.js for the backend services. Increased conversion rates by 25% and reduced page load time by 60%.",
        tags: ["React", "Node.js", "MongoDB", "Redux"]
      },
      {
        name: "Real-time Analytics Dashboard",
        description: "Designed and developed a real-time analytics dashboard for monitoring system metrics. Utilized WebSockets for live data streaming and D3.js for data visualization. Reduced incident response time by 50%.",
        tags: ["JavaScript", "D3.js", "WebSockets", "Redis"]
      }
    ]
  },
  {
    role: "Software Engineer",
    company: "Global Solutions Ltd.",
    period: "2017 - 2020",
    description: "Developed and maintained web applications using Java Spring and Angular. Implemented CI/CD pipelines using Jenkins, improving deployment efficiency by 30%.",
    projects: [
      {
        name: "Customer Relationship Management System",
        description: "Built a comprehensive CRM system from scratch using Java Spring Boot and Angular. Integrated with third-party APIs for email marketing and analytics. Deployed to AWS using containerization with Docker.",
        tags: ["Java", "Spring Boot", "Angular", "PostgreSQL"]
      },
      {
        name: "Payment Processing System",
        description: "Developed a secure payment processing system compliant with PCI DSS standards. Implemented tokenization for sensitive data and robust error handling mechanisms. Processed over $10M in transactions within the first year.",
        tags: ["Java", "Spring Security", "Hibernate", "MySQL"]
      }
    ]
  }
];
*/

function SWECareer() {
  return (
    <Container className="my-5">
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 mb-4" style={{ textTransform: 'none' }}>Software Engineering</h1>
          <p className="lead">
            A detailed overview of my software engineering career, highlighting key projects and accomplishments.
            Specializing in modern web development and full-stack applications including vibe coding techniques for enhanced user experience.
          </p>
        </Col>
      </Row>
      
      {/* 기술 스택 섹션 */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="mb-4">SE Skill Sets</h2>
              <Row>
                <Col md={12}>
                  <ul className="list-unstyled">
                    {skillSets.map((skill, index) => (
                      <li key={index} className="mb-2">
                        <strong>• {skill.category}:</strong> {skill.skills}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      {/* 프로젝트 섹션 */}
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="mb-4">Software Projects</h3>
              <Row>
                {projects.map((project, index) => (
                  <Col md={6} className="mb-4" key={index}>
                    <Card className="border-light bg-light h-100">
                      <Card.Body>
                        <h5>{project.title}</h5>
                        <p>{project.description}</p>
                        <div className="mt-2">
                          <strong>{project.tech}</strong>
                        </div>
                        <div className="mt-2">
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            {project.link}
                          </a>
                        </div>
                        <div className="mt-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge bg="primary" className="me-1" key={tagIndex}>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SWECareer; 