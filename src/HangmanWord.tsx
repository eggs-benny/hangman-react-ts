type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
}

export function HangmanWord({guessedLetters, wordToGuess}:
HangmanWordProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace'
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1ex solid black' }}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'
            }} key={index}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
