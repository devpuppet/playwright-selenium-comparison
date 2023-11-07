pipeline {
    agent {
        docker {
            image 'node:18.18.2-alpine3.18'
            args '-p 3000:3000 -p 5000:5000 -u root'
        }
    }
    environment {
        PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD = 1
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'PLAYWRIGHT_BROWSERS_PATH=/usr/lib/playwright yarn add playwright-chromium@1.11.1'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test:pw PLAYWRIGHT_BROWSERS_PATH=/usr/lib/playwright'
            }
        }
    }
}