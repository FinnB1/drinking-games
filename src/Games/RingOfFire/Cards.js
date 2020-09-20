import {
    AC,
    AD,
    AH,
    AS,
    EIGHTC,
    EIGHTD,
    EIGHTH,
    EIGHTS,
    FIVEC,
    FIVED,
    FIVEH,
    FIVES,
    FOURC,
    FOURD,
    FOURH,
    FOURS,
    JC, JD, JH, JS, KC, KD, KH, KS,
    NINEC,
    NINED,
    NINEH,
    NINES, QC, QD, QH, QS,
    SEVENC,
    SEVEND,
    SEVENH,
    SEVENS,
    SIXC,
    SIXD,
    SIXH,
    SIXS,
    TENC,
    TEND,
    TENH,
    TENS,
    THREEC,
    THREED,
    THREEH,
    THREES,
    TWOC,
    TWOD,
    TWOH,
    TWOS
} from "../../media/cards";


let cards;


cards = {
    "2": {
        number: 4,
        images: {
            1: TWOC,
            2: TWOD,
            3: TWOH,
            4: TWOS
        },
        description: 'You - pick someone to drink'
    },
    "3": {
        number: 4,
        images: {
            1: THREEC,
            2: THREED,
            3: THREEH,
            4: THREES
        },
        description: 'Me - you have to drink'
    },
    "4": {
        number: 4,
        images: {
            1: FOURC,
            2: FOURD,
            3: FOURH,
            4: FOURS
        },
        description: 'Whores - all girls have to drink'
    },
    "5": {
        number: 4,
        images: {
            1: FIVEC,
            2: FIVED,
            3: FIVEH,
            4: FIVES
        },
        description: 'Thumb - at any point during the game you can put your thumb on the edge of the table. Last to do it has to drink'
    },
    "6": {
        number: 4,
        images: {
            1: SIXC,
            2: SIXD,
            3: SIXH,
            4: SIXS
        },
        description: 'Dicks - all boys have to drink'
    },
    "7": {
        number: 4,
        images: {
            1: SEVENC,
            2: SEVEND,
            3: SEVENH,
            4: SEVENS
        },
        description: 'Heaven - at any point during the game you can put your finger up in the air. Last to do it has to drink'
    },
    "8": {
        number: 4,
        images: {
            1: EIGHTC,
            2: EIGHTD,
            3: EIGHTH,
            4: EIGHTS
        },
        description: 'Mate - pick someone, every time you drink they have to drink as well'
    },
    "9": {
        number: 4,
        images: {
            1: NINEC,
            2: NINED,
            3: NINEH,
            4: NINES
        },
        description: 'Rhyme - say a word, going round to your left each person has to say a rhyming word, first to hesitate or say a non-rhyming word has to drink'
    },
    "10": {
        number: 4,
        images: {
            1: TENC,
            2: TEND,
            3: TENH,
            4: TENS
        },
        description: 'Categories - say a category, going round to your left each person has to say an item or thing from that category, first to hesitate or say a non-rhyming word has to drink'
    },
    "A": {
        number: 4,
        images: {
            1: AC,
            2: AD,
            3: AH,
            4: AS
        },
        description: 'Waterfall - everyone starts drinking, they can only stop when you stop'
    },
    "J": {
        number: 4,
        images: {
            1: JC,
            2: JD,
            3: JH,
            4: JS
        },
        description: 'Make a rule - make a rule everyone has to follow, if someone breaks it they drink'
    },
    "Q": {
        number: 4,
        images: {
            1: QC,
            2: QD,
            3: QH,
            4: QS
        },
        description: 'Question master - until the next Queen is drawn, if you ask someone a question and they respond they must drink'
    },
    "K": {
        number: 4,
        images: {
            1: KC,
            2: KD,
            3: KH,
            4: KS
        },
        description: 'King - Pour your drink into the cup in the middle, if you draw the last king you must down it all'
    },
}
export default cards;
