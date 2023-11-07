pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.34.3-jammy'
            args '-p 3000:3000 -p 5000:5000 -u root'
        }
    }
    stages {
        stage('build') {
            steps {
                sh 'PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test:pw'
            }
        }
    }
}