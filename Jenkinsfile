pipeline {
    agent {
        docker {
            image 'node:18.18.2-alpine3.18'
            args '-p 3000:3000 -p 5000:5000 -u root'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run pw:install'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test:pw'
            }
        }
    }
}