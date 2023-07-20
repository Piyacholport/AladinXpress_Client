pipeline {
  agent any
  stages {
    stage('Check Tools') {
      steps {
        sh '''
          docker version
        '''
      }
    }
  }
}