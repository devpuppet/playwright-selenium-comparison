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
                sh 'PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install'
                sh 'PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npx playwright install'
            }
        }
        stage('test') {
            steps {
                sh 'PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers npm run test:pw'
            }
        }
    }
}