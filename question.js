class Question{
    constructor(question, a, b, c, d){
        this.question = question;
        this.a = [a,1];
        this.b = [b, 2];
        this.c = [c, 3]
        this.d = [d, 4];
        this.answers = [this.a, this.b, this.c, this.d];
    }

    shuffle(){
        let cIndex = this.answers.length, tValue, rIndex;
        while (cIndex){
            rIndex = Math.floor(Math.random() * cIndex--)
            tValue = this.answers[cIndex];
            this.answers[cIndex] = this.answers[rIndex];
            this.answers[rIndex] = tValue;
        }
        return this.answers;
    }
}



const q1 = new Question("What is the best sauce?", "Buffalo", "Barbeque", "Ranch", "Honey Mustard");

const q2 = new Question("What is the best utensil for eating pizza?", "My hands", "A fork", "Chopsticks", "A spoon");

const q3 = new Question("Which of these is real?", "Aliens", "Ghosts", "Sasquatch", "None of them");

const q4 = new Question("Best mythical creature?", "Unicorn", "Dragon", "Fairies", "Snorlax");

const q5 = new Question("Finish the sentence: Michaelangelo was...", "brilliant.", "troubled.", "talented.", "secretly gay.");

const q6 = new Question("Best form of transportation:", "A car", "A bike", "Walking", "Zeppelins");

const q7 = new Question("Best flavor of children's tylenol pills", "Grape", "Cherry", "Orange", "Wtf?");


const Questions = [q1, q2, q3, q4, q5, q6, q7];
// const q1 = new Question("What is my name?", "z", "y", "z", "w");
// console.log(q1.shuffle());
Questions.forEach(function(question){
    question.shuffle();
console.log(question.answers);
});

console.log(Questions[1]);
module.exports = Questions;