import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

// 프로젝트 데이터 배열
const projects = [
  {
    title: "Jenkins on AWS with Terraform & Packer",
    description: "Built CI/CD environment on AWS using Infrastructure as Code with Terraform and Packer. Automated deployment of Jenkins clusters for scalable build processes.",
    image: "/images/tz-k8s-vagrant-env.png",
    github: "https://github.com/doohee323/tz-k8s-vagrant.git",
    tags: ["Terraform", "AWS", "Jenkins", "Packer"]
  },
  {
    title: "Certified Kubernetes Administrator",
    description: "Earned the CKA certification demonstrating expertise in Kubernetes administration, including deployment, maintenance, and troubleshooting of production-grade clusters.",
    image: "/images/certified-kubernetes-administrator-cka-certificate.png",
    github: "https://bit.ly/3a1fM9B",
    tags: ["Kubernetes", "CKA", "Container Orchestration"]
  },
  {
    title: "ELK Stack Deployment",
    description: "Set up multiple ELK servers on Vagrant for centralized logging and monitoring. Implemented custom dashboards and alerts for application performance tracking.",
    image: "/images/elk.png",
    github: "https://github.com/doohee323/tz-elk",
    tags: ["Elasticsearch", "Logstash", "Kibana", "Vagrant"]
  },
  {
    title: "Kubernetes with Rancher",
    description: "Deployed Jenkins on Kubernetes with Rancher for container orchestration and management. Streamlined CI/CD processes with container-native workflows.",
    github: "https://github.com/doohee323/tz-rancher",
    tags: ["Kubernetes", "Rancher", "Jenkins", "Containers"]
  },
  {
    title: "Docker Registry Server",
    description: "Built a private Docker registry server in Vagrant for secure container storage and distribution. Implemented access controls and image vulnerability scanning.",
    github: "https://github.com/doohee323/docker-registry-vagrant",
    tags: ["Docker", "Registry", "Vagrant", "Security"]
  },
  {
    title: "Kafka-Storm-Esper Pipeline",
    description: "Developed a real-time data processing pipeline using Kafka for data ingestion, Storm for stream processing, and Esper for complex event processing.",
    github: "https://github.com/doohee323/tz-kf-storm",
    tags: ["Kafka", "Storm", "Esper", "Stream Processing"]
  },
  {
    title: "Chef Server - Client on Vagrant",
    description: "Implemented configuration management solution with Chef Server and Clients on Vagrant. Automated infrastructure provisioning and application deployment with reusable cookbooks.",
    github: "https://github.com/doohee323/tz-chef",
    tags: ["Chef", "Vagrant", "Infrastructure as Code", "Configuration Management"]
  },
  {
    title: "Graphite Server Integrated with Golang",
    description: "Developed a Graphite metrics collection system with Golang integration for high-performance time-series data processing and visualization.",
    github: "https://github.com/doohee323/tz_golang_graphite",
    tags: ["Golang", "Graphite", "Metrics", "Time-series"]
  },
  {
    title: "Graphite Server with StatsD and Grafana",
    description: "Set up a complete metrics collection, storage, and visualization stack using Graphite, StatsD, and Grafana on Vagrant for application performance monitoring.",
    github: "https://github.com/doohee323/tz-graphite.git",
    tags: ["Graphite", "StatsD", "Grafana", "Vagrant"]
  },
  {
    title: "Graphite Relay Server with HAProxy",
    description: "Created a scalable Graphite relay infrastructure with HAProxy load balancing to handle high volume metric ingestion and improve fault tolerance.",
    github: "https://github.com/doohee323/tz-graphite-extend.git",
    tags: ["Graphite", "HAProxy", "Load Balancing", "Scaling"]
  },
  {
    title: "HAProxy Load Balancing on Vagrant",
    description: "Implemented a high-availability load balancing solution with HAProxy on Vagrant. Configured SSL termination, session persistence, and health monitoring.",
    github: "https://github.com/doohee323/tz-haproxy",
    tags: ["HAProxy", "Load Balancing", "High Availability", "Vagrant"]
  },
  {
    title: "Nagios Monitoring on Vagrant",
    description: "Set up Nagios monitoring system on Vagrant for infrastructure and application monitoring with custom checks and alert notifications.",
    github: "https://github.com/doohee323/tz-nagios.git",
    tags: ["Nagios", "Monitoring", "Alerts", "Vagrant"]
  },
  {
    title: "Ganglia Monitoring on Vagrant",
    description: "Deployed Ganglia distributed monitoring system on Vagrant for real-time resource utilization and performance metrics collection.",
    github: "https://github.com/doohee323/tz-ganglia.git",
    tags: ["Ganglia", "Monitoring", "Metrics", "Vagrant"]
  },
  {
    title: "Cohort Analysis with Apache TAJO",
    description: "Built a cohort analysis system using Apache TAJO, Play framework, and AWS CLI for customer behavior analytics and segmentation.",
    github: "https://github.com/doohee323/tz-tajo",
    tags: ["Apache TAJO", "Play Framework", "AWS CLI", "Analytics"]
  },
  {
    title: "Kali Linux on Vagrant",
    description: "Created a portable Kali Linux environment on Vagrant for security testing and vulnerability assessment in isolated environments.",
    github: "https://github.com/doohee323/kali_in_vagrant",
    tags: ["Kali Linux", "Security", "Penetration Testing", "Vagrant"]
  },
  {
    title: "Deploy Server-Agent System",
    description: "Developed a server-agent deployment system using Node.js for automated application deployment across distributed environments.",
    github: "https://github.com/doohee323/tz-deploy",
    tags: ["Node.js", "Deployment", "Automation", "DevOps"]
  }
];

// 기술 스택 데이터
const skillSets = [
  { category: "Language", skills: "Python, Golang, Java, Node.js, Shell" },
  { category: "OS/VMs/Platform", skills: "AWS, GCP, Kubernetes(EKS), Docker, Linux, Vagrant" },
  { category: "CI/CD", skills: "Jenkins, GitHub Actions, ArgoCD, Helm Chart, Maven/Gradle" },
  { category: "IaC & Config", skills: "Terraform, Ansible, Chef, Vagrant" },
  { category: "Observability", skills: "Prometheus, Grafana, Elasticsearch, Kibana, Jaeger, Datadog" },
  { category: "Service Mesh & Networking", skills: "Istio, HAProxy" },
  { category: "Cloud Native", skills: "Serverless (AWS Lambda), Kafka, Zookeeper, Kafka Streams" },
  { category: "Security", skills: "Vault" }
];

// 환경 데이터
const environments = [
  { 
    title: "CI Environment", 
    image: "/images/jenkins-argocd.png", 
    description: "Jenkins & ArgoCD Pipeline" 
  },
  { 
    title: "Monitoring Environment", 
    image: "/images/prometheus-grafana.png", 
    description: "Prometheus & Grafana" 
  },
  { 
    title: "Logging/Stats Environment", 
    image: "/images/elk.png", 
    description: "ELK Stack" 
  }
];

function DevOpsCareer() {
  return (
    <Container className="my-5">
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 mb-4" style={{ textTransform: 'none' }}>Dewey's DevOps</h1>
          <p className="lead">
            My journey in DevOps engineering, focusing on infrastructure automation, 
            CI/CD pipeline optimization, and cloud architecture.
          </p>
        </Col>
      </Row>
      
      {/* 기술 스택 섹션 */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="mb-4">DevOps Skill sets</h2>
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

      {/* 환경 섹션 */}
      <Row className="mb-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <h3 className="mb-4">DevOps Environments</h3>
              <Row>
                {environments.map((env, index) => (
                  <Col md={4} className="mb-4" key={index}>
                    <h5>{env.title}</h5>
                    <div className="text-center">
                      <img 
                        src={env.image} 
                        alt={env.title} 
                        className="img-fluid mb-2"
                        style={{ maxWidth: '80%' }} 
                      />
                      <p>{env.description}</p>
                    </div>
                  </Col>
                ))}
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
              <h3 className="mb-4">Notable DevOps Projects</h3>
              <Row>
                {projects.map((project, index) => (
                  <Col md={6} className="mb-4" key={index}>
                    <Card className="border-light bg-light h-100">
                      <Card.Body>
                        <h5>{project.title}</h5>
                        <p>{project.description}</p>
                        
                        {project.image && (
                          <div className="text-center mt-3">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="img-fluid mb-2"
                              style={{ maxWidth: '80%' }}
                            />
                          </div>
                        )}
                        
                        <div className="mt-2">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            {project.github}
                          </a>
                        </div>
                        
                        <div className="mt-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge bg="info" className="me-1" key={tagIndex}>
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

export default DevOpsCareer; 