import {
  Code2, Database, Server, Cpu, GitBranch, Layers, Zap, Brain
} from 'lucide-react'

export const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    icon: 'Code2',
    color: 'purple',
    skills: [
      { name: 'Python', level: 98 },
      { name: 'Java', level: 82 },
      { name: 'Scala', level: 78 },
      { name: 'SQL', level: 95 },
      { name: 'Bash / Shell', level: 85 },
      { name: 'PySpark', level: 92 },
    ]
  },
  {
    id: 'bigdata',
    title: 'Big Data & Distributed Systems',
    icon: 'Layers',
    color: 'blue',
    skills: [
      { name: 'Apache Spark', level: 95 },
      { name: 'Apache Kafka', level: 90 },
      { name: 'Hadoop / HDFS', level: 88 },
      { name: 'Apache Hive', level: 85 },
      { name: 'HBase', level: 80 },
      { name: 'Apache Zookeeper', level: 78 },
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks & APIs',
    icon: 'Server',
    color: 'cyan',
    skills: [
      { name: 'Flask', level: 97 },
      { name: 'FastAPI', level: 93 },
      { name: 'Django REST', level: 85 },
      { name: 'Spring Boot', level: 72 },
      { name: 'Celery', level: 82 },
      { name: 'SQLAlchemy', level: 88 },
    ]
  },
  {
    id: 'dataeng',
    title: 'Data Engineering',
    icon: 'GitBranch',
    color: 'gold',
    skills: [
      { name: 'ETL / ELT Pipelines', level: 96 },
      { name: 'Apache Airflow', level: 85 },
      { name: 'Data Warehousing', level: 88 },
      { name: 'Data Lake Architecture', level: 84 },
      { name: 'Talend', level: 75 },
      { name: 'Data Modeling', level: 90 },
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'Database',
    color: 'purple',
    skills: [
      { name: 'MySQL / PostgreSQL', level: 95 },
      { name: 'MongoDB', level: 90 },
      { name: 'Apache Cassandra', level: 82 },
      { name: 'Redis', level: 85 },
      { name: 'Elasticsearch', level: 80 },
      { name: 'Oracle DB', level: 75 },
    ]
  },
  {
    id: 'ml',
    title: 'Machine Learning & AI',
    icon: 'Brain',
    color: 'cyan',
    skills: [
      { name: 'Scikit-learn', level: 90 },
      { name: 'TensorFlow / Keras', level: 80 },
      { name: 'Pandas & NumPy', level: 97 },
      { name: 'Matplotlib / Seaborn', level: 88 },
      { name: 'Feature Engineering', level: 85 },
      { name: 'Model Deployment', level: 82 },
    ]
  },
  {
    id: 'concurrency',
    title: 'Concurrency & Parallel Processing',
    icon: 'Zap',
    color: 'blue',
    skills: [
      { name: 'Python Multithreading', level: 93 },
      { name: 'Multiprocessing', level: 90 },
      { name: 'AsyncIO / Async/Await', level: 88 },
      { name: 'Celery Task Queue', level: 85 },
      { name: 'Concurrent.futures', level: 87 },
      { name: 'Event-Driven Architecture', level: 82 },
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Infrastructure',
    icon: 'Cpu',
    color: 'gold',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'AWS / GCP', level: 78 },
      { name: 'Jupyter Notebook', level: 95 },
      { name: 'VS Code / IntelliJ', level: 92 },
    ]
  },
]
