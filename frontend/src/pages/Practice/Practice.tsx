import React from 'react'
import { useThemeLanguage, useAuth } from '@/context'
import { ITEMS } from '@/constants'
import { SwipeCard, XPBar } from '@/components'
import { usePractice } from './usePractice'
import {
  BackButton,
  CancelButton,
  ConfirmButton,
  Container,
  ExitButton,
  HeaderRow,
  Instruction,
  Modal,
  ModalButtons,
  ModalText,
  ModalTitle,
  Overlay,
  Score,
  Title
} from './Practice.styles'

const Practice: React.FC = () => {
  const { theme, t } = useThemeLanguage()
  const { user } = useAuth()

  const {
    currentIndex,
    correctCount,
    currentItem,
    isFinished,
    showExitModal,
    handleSwipe,
    handleExit,
    closeModal,
    confirmExit,
    setShowExitModal
  } = usePractice({ items: ITEMS })

  return (
    <Container $theme={theme}>
      <HeaderRow>
        <BackButton
          $theme={theme}
          onClick={handleExit}
        >
          ← Volver
        </BackButton>

        <ExitButton
          $theme={theme}
          onClick={handleExit}
        >
          Salir
        </ExitButton>
      </HeaderRow>

      <Title $theme={theme}>
        {t('practice')}
      </Title>

      <Instruction $theme={theme}>
        {t('swipeRight')} | {t('swipeLeft')}
      </Instruction>

      {user && (
        <XPBar
          xp={user.xp || 0}
          level={user.level || 1}
        />
      )}

      {!isFinished && currentItem ? (
        <>
          <SwipeCard
            key={currentItem.id}
            content={currentItem.text}
            onSwipe={handleSwipe}
          />

          <Score $theme={theme}>
            {correctCount} / {ITEMS.length}
          </Score>

          <div>
            <BackButton
              $theme={theme}
              onClick={() => setShowExitModal(true)}
              style={{ marginTop: 16 }}
            >
              Salir de la práctica
            </BackButton>
          </div>
        </>
      ) : (
        <div
          style={{
            textAlign: 'center',
            marginTop: 32
          }}
        >
          <p
            style={{
              color: theme.colors.text,
              fontSize: 18,
              marginBottom: 16
            }}
          >
            ¡Completado! {correctCount}/{ITEMS.length} correctas
          </p>

          <Score $theme={theme}>
            {correctCount} / {ITEMS.length}
          </Score>

          <BackButton
            $theme={theme}
            onClick={() => setShowExitModal(true)}
            style={{
              marginTop: 16,
              border: `2px solid ${theme.colors.textSecondary}`,
              background: 'transparent',
              padding: '10px 24px'
            }}
          >
            Finalizar
          </BackButton>
        </div>
      )}

      {showExitModal && (
        <Overlay
          $theme={theme}
          onClick={closeModal}
        >
          <Modal
            $theme={theme}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalTitle $theme={theme}>
              ¿Salir de la práctica?
            </ModalTitle>

            <ModalText $theme={theme}>
              Has respondido {correctCount} de {currentIndex + 1} preguntas.
              {!isFinished &&
                ' Si sales ahora, no se guardará tu progreso.'}
            </ModalText>

            <ModalButtons>
              <CancelButton
                $theme={theme}
                onClick={closeModal}
              >
                Cancelar
              </CancelButton>

              <ConfirmButton
                $theme={theme}
                onClick={confirmExit}
              >
                Salir
              </ConfirmButton>
            </ModalButtons>
          </Modal>
        </Overlay>
      )}
    </Container>
  )
}

export default Practice