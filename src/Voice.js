export default {
    greeting: {
        identity: 'greeting',
        collection: 'intro',
        text: 'Welcome to Study Card X, do you have an account?',
        btnType: 'two',
        btn1: 'Yes',
        btn1next: 'login',
        btn2: 'No',
        btn2next: 'no'
    },
    no: {
        identity: 'no',
        collection: 'intro',
        text: 'Would you like to create an account or practice as a guest?',
        btnType: 'two',
        btn1: 'Create Account',
        btn1next: 'signup',
        btn2: 'Guest',
        btn2next: 'guestTutorial',
    },
    guestTutorial: {
        identity: 'tutorial',
        collection: 'intro',
        text: 'Okay, would you like a quick tutorial?',
        btnType: 'two',
        btn1: 'Yeah',
        btn1next: 't1',
        btn2: 'Nope, I think Ill manage',
        btn2next: 'startStudy'
    },
    signup: {
        identity: 'signup',
        collection: "intro",
        text: 'Sweet, tell me a little about yourself..',
        btnType: 'none',
        form: 'signup',
        submit: ['handleSignUp'] //add more for when signup is complete
    },
    t1: {
        identity: 't1',
        collection: 'tutorial',
        text: 'This will only take 1 minute',
        btnType: 'one',
        btn1: 'Okay',
        btn1next: 't2',
        btn2: null,
        btn2next: null,
    },
    t2: {
        identity: 't2',
        collection: 'tutorial',
        text: 'Study Card X was designed to accerlate the time it takes for you to learn',
        btnType: 'one',
        btn1: 'Okay',
        btn1next: 't3',
        btn2: null,
        btn2next: null,
    },
    t3: {
        identity: 't3',
        collection: 'tutorial',
        text: 'First you create two study cards',
        btnType: 'one',
        btn1: 'Okay',
        btn1next: 't4',
        btn2: null,
        btn2next: null,
    }
    // name: {
    //     identity: '',
    //     collection: '',
    //     text: '',
    //     btnType: '',
    //     btn1: '',
    //     btn1next: '',
    //     btn2: '',
    //     btn2next: '',

    // new3a9: 'First you create two study cards',
    // new4a9: 'Then I will help you start studying',
    // new5a9: 'Depending on diffulty, you will eventually master this card!',
    // new6a9: 'This when you get 5, 10, or 20 in a row correct depending on its difficulty',
    // new7a9: 'When you master a card, Ill have you add a new card!',
    // new8a9: 'We will then repeat the cycle! Do you have any questions?',
    // new9a9: 'Awesome, lets get started'
    // },
    // {
    // old1a1: 'Great, remind again who you are?'
    // },
    // {
    // addQuestion: 'Add a question',
    // addAnswer: 'Okay, now add an answer',
    // difficulty: 'How hard is this question?',
    // asking: 'Whats the answer?',
    // success1a2: 'Nice ',
    // success2a2: 'more in a row to master this one',
    // failure: 'Its okay we can try it again',
    // master: 'Great job! You mastered that question. Click that new button if you want to archive it.'
    // }};

};