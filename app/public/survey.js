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


const questions = [q1, q2, q3, q4, q5, q6, q7];

function survey() {
    for (let i = 0; i < questions.length; i++) {
        let qArea = $("<div>");
        let dropdown = $("<select required>")
            .addClass("selection")
            .attr({"id" : "question" + (i + 1)})
            .html(`Select an option...`)
            .append($(`<option value="">Select an Answer</option>`));
        let qHTML = $(`<p><h3> Question ${i + 1}
                </h3></p>
                <p><h4> ${questions[i].question}</h4></p>`);
        let answers = questions[i].shuffle();
        answers.forEach(function(answer){
            let options = $("<option>")
            .addClass("dropdowns").attr({"value" : answer[1]}).html(answer[0]);
            dropdown.append(options);
        })
    

        qArea.append(qHTML);
        qArea.append(dropdown);
        
        
        $(".questions").append(qArea);
    }
}
survey();

$("#submit").on("click", function(event){
    event.preventDefault();
    const user = {
        name : $("#name").val().trim(),
        photo: $("#img").val().trim(),
        scores : [
            $("#question1").val().trim(),
            $("#question2").val().trim(),
            $("#question3").val().trim(),
            $("#question4").val().trim(),
            $("#question5").val().trim(),
            $("#question6").val().trim(),
            $("#question7").val().trim(),
        ]
    }

    $.post('/api/friends', user, function(data){
            $("#matchName").text(data.name);
            $("#matchImg").attr("src", data.photo);
            $("#results").modal("toggle");
            console.log(data);
        });
})