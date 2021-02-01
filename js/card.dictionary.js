const BONUS_ENUM = {
    CULTURE: 1,
    WILDLIFE: 2,
    BEACH: 3
}

const TYPE_ENUM = {
    COUNTRY: 0,
    BONUS: 1,
    GOOD_ADVICE: 2,
    BAD_ADVICE: 3,
    SPECIAL: 4,
    GREY: 5
}

const DESCRIPTIONS = {
    BONUS: "Play on your pile to score the same points as your last played country. (Can only play if the country card has the same symbol as this card)."
}

const CARD_DICT = {
    "c001": {
        type: TYPE_ENUM.COUNTRY,
        title: "Japan",
        bonuses: [BONUS_ENUM.CULTURE],
        points: 20
    },
    "c002": {
        type: TYPE_ENUM.BONUS,
        title: "BEACH BONUS",
        bonusType: BONUS_ENUM.BEACH,
        description: DESCRIPTIONS.BONUS
    },
    "c003": {
        type: TYPE_ENUM.SPECIAL,
        title: "Love",
        description: "PLAY ON AN OPPONENT'S PILE: They cannot put any new country or bonus cards on their pile for their next 2 goes."
    },
    "c004": {
        type: TYPE_ENUM.SPECIAL,
        title: "Travel Around the Clock",
        description: "Take 3 more goes in a row."
    },
    "c005": {
        type: TYPE_ENUM.COUNTRY,
        title: "Fiji",
        bonuses: [BONUS_ENUM.BEACH, BONUS_ENUM.CULTURE, BONUS_ENUM.WILDLIFE]
    },
    "c006": {
        type: TYPE_ENUM.SPECIAL,
        title: "Under the Influence",
        description: "PLAY ON AN OPPONENT'S PILE: On their next go, you look at their hand and select the card which they play or discard."
    },
    "c007": {
        type: TYPE_ENUM.BONUS,
        title: "Culture Bonus",
        bonusType: BONUS_ENUM.CULTURE,
        description: DESCRIPTIONS.BONUS
    },
    "c008": {
        type: TYPE_ENUM.GREY,
        title: "Thief Steals Bag",
        description: "Lose all cards on your played pile into the Past pile. You also miss your next go. Can't go home if you hold this card."
    }
}
