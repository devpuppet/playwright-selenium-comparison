pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:v1.34.3-jammy'
            args '-p 3000:3000 -p 5000:5000 -u root'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test:pw'
            }
        }
        stage('Report') {
            steps {
                publishHTML (target : [allowMissing: false,
                             alwaysLinkToLastBuild: true,
                             keepAll: true,
                             reportDir: 'playwright-report',
                             reportFiles: 'index.html',
                             reportName: 'Playwright Report',
                             reportTitles: 'PW Report'])
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**/*.*', fingerprint: true
            junit 'test-results/**/*.xml'
        }
    }
}