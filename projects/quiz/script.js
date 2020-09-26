const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
const submit = document.getElementById('submit');

const questions = [
    {
        question: "Quanto é 25/5 ?",
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: "Quanto é 50/5 ?",
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    }
];



showQuiz();

function showQuiz(){
    const numeros = ["um", "dois", "três", "quatro"];
    const str1 = numeros.join()
    const str2 = numeros.join('-')
    const str3 = numeros.join(' ')

    console.log(str1)
    //output: um,dois,três,quatro
    console.log(str2)
    //um-dois-três-quatro
    console.log(str3)
    //um dois três quatro
    function showQuestions(){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){

            answers = [];

            for(option in questions[i].answers){

                answers.push(
                    `<label>
                        <input type="radio" name="question${i}" value="${option}">
                        ${option} : 
                        ${questions[i].answers[option]}
                    </label>`
                );
            }
            output.push(

                `<div class="question"> ${questions[i].question} </div>
                <div class="answers"> ${answers.join('')} </div>`

            );
        }

        quiz.innerHTML = output.join('');
    }


    function showResults(){
        
        var htmlAnswers = quiz.querySelectorAll('.answers');
        
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){

            userAnswer = (htmlAnswers[i].querySelector(`input[name=question${i}]:checked`)||{}).value;
            
            if(userAnswer===questions[i].correctAnswer){

                numCorrect++;
                
                htmlAnswers[i].style.color = 'lightgreen';
            }
            else{
        
                htmlAnswers[i].style.color = 'red';
            }
        }

        results.innerHTML = `${numCorrect} / ${questions.length}` 
    }

    showQuestions();
    
    submit.onclick = function(){
        showResults(questions, quiz, results);
    }

}