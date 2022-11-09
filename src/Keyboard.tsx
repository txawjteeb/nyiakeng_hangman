import styles from "./Keyboard.module.css"

const KEYS = [
  "𞄀",
  "𞄁",
  "𞄂",
  "𞄃",
  "𞄄",
  "𞄅",
  "𞄆",
  "𞄇",
  "𞄈",
  "𞄉",
  "𞄊",
  "𞄋",
  "𞄌",
  "𞄍",
  "𞄎",
  "𞄏",
  "𞄐",
  "𞄑",
  "𞄒",
  "𞄓",
  "𞄔",
  "𞄕",
  "𞄖",
  "𞄗",
  "𞄘",
  "𞄙",
  "𞄚",
  "𞄛",
  "𞄜",
  "𞄝",
  "𞄞",
  "𞄟",
  "𞄠",
  "𞄡",
  "𞄢",
  "𞄣",
  "𞄤",
  "𞄥",
  "𞄦",
  "𞄧",
  "𞄨",
  "𞄩",
  "𞄪",
  "𞄫",
  "𞄬",
  "𞄰",
  "𞄱",
  "𞄲",
  "𞄳",
  "𞄴",
  "𞄵",
  "𞄶",
]

// const KEYS = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ]

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
