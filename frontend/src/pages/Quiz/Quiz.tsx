import React from 'react'
import { QuizCard, XPBar } from '@/components'
import { useQuiz } from './useQuiz'
import {
  BackButton,
  Button,
  Container,
  Header,
  Progress,
  ResultCard,
  ResultMessage,
  ResultText,
  ResultTitle,
  Title
} from './Quiz.styles'

const Quiz: React.FC = () => {
  const {
    theme,
    t,
    user,

    loading,
    questions,
    currentQuestion,
    score,
    finished,

    handleAnswer,
    handleNext,

    restartQuiz,
    goBack,
    goHome,

    getResultMessage
  } = useQuiz()

  if (loading) {
    return (
      <Container $theme={theme}>
        <p>Cargando...</p>
      </Container>
    )
  }

  if (questions.length === 0) {
    return (
      <Container $theme={theme}>
        <BackButton
          $theme={theme}
          onClick={goBack}
        >
          ← Volver
        </BackButton>

        <p>
          No hay preguntas disponibles para este tema.
        </p>
      </Container>
    )
  }

  return (
    <Container $theme={theme}>
      <BackButton
        $theme={theme}
        onClick={goBack}
      >
        ← Volver
      </BackButton>

      <Header>
        <Title $theme={theme}>
          {t('quiz')}
        </Title>

        <Progress $theme={theme}>
          {t('question')} {currentQuestion + 1}{' '}
          {t('of')} {questions.length}
        </Progress>

        {user && (
          <XPBar
            xp={user.xp || 0}
            level={user.level || 1}
          />
        )}
      </Header>

      {!finished ? (
        <QuizCard
          key={currentQuestion}
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          onNext={handleNext}
          showNext={true}
        />
      ) : (
        <ResultCard $theme={theme}>
          <ResultTitle $theme={theme}>
            {t('score')}
          </ResultTitle>

          <ResultText $theme={theme}>
            {score}/{questions.length}
          </ResultText>

          <ResultMessage $theme={theme}>
            {getResultMessage()}
          </ResultMessage>

          <div>
            <Button
              $theme={theme}
              onClick={restartQuiz}
            >
              Reintentar
            </Button>

            <Button
              $theme={theme}
              onClick={goHome}
            >
              {t('back')}
            </Button>
          </div>
        </ResultCard>
      )}
    </Container>
  )
}

export default Quiz