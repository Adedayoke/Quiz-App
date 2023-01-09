'use script';

const selector = document.querySelectorAll('.selector')
const sec = document.querySelector('.sec')
const min = document.querySelector('.min')
const nextButton = document.querySelector('.nextButton')
const  next = document.querySelector('.whole__buttons--btn2')
const previousButton = document.querySelector('.whole__buttons--btn1')
const number = document.querySelector('.number')
const question = document.querySelector('.question')
const  optA = document.querySelector('.optA')
const  optB = document.querySelector('.optB')
const  optC = document.querySelector('.optC')
const  optD = document.querySelector('.optD')
const  start = document.querySelector('a')
const  intro = document.querySelector('.intro')
const image = document.querySelector('.whole__body--image')
const percent = document.querySelector('.percent')
const scoreValue = document.querySelector('.scoreValue')
const mainBoard = document.querySelector('.mainBoard')
const timer = document.querySelector('.timer')

class Question{
    constructor(number, question, options, answer, image =""){
        this.number = number;
        this.question = question;
        this.options = options;
        this.answer = answer;
        this.image = image;
    }
}
const question1 = new Question(
    '1',
    "Referring to the diagram, express m in terms of n", 
    ["m = n + 2", "m = n - 2", "m = 2n", "m = n/2"], 
    "m = n/2",
    `<img src="/Images/question1.jpg" alt="">`
)
const question2 = new Question(
    '2',
    "C is the centre of the circle shown in the diagram. Ther value of QRS is?",
    ["130", "90", "115", "65"],
    "115",
    '<img src="/Images/question2.jpg" alt="">'
)

const question3 = new Question(
    '3',
    "C is the center of the circle shown in the diagram. calculate XYZ.", 
    ["129", "102", "98", "78"], 
    "129",
    `<img src="/Images/question3.jpg" alt="">`
)

const question4 = new Question(
    '4',
    "If C is the centre of the circle shown in the diagram, the value of x is", 
    ["5 1/2", "11", "22", "44"], 
    "11",
    `<img src="/Images/question4.jpg" alt="">`
)

const question5 = new Question(
    '5',
    "C is the center of the circleshown in the figure, and reflex angle YCZ = 296. Find YXZ", 
    ["148", "104", "64", "32"], 
    "32",
    `<img src="/Images/question5.jpg" alt="">`
)

const question6 = new Question(
    '6',
    "In the figure, C is the centre of the circle, ABD = 15 and BCE = 110. Calculate DFE", 
    ["55", "30", "20", "15"], 
    "20",
    `<img src="/Images/question6.jpg" alt="">`
)

const question7 = new Question(
    '7',
    "PQRST is the major arc of the circle (see diagram), which angle is equal to PTQ?", 
    ["PSQ", "PRQ", "SQT", "RTQ"], 
    "PSQ",
    `<img src="/Images/question7.jpg" alt="">`
)

const question8 = new Question(
    '8',
    "In the figure, PQRS is a cyclic quadilateral, SRQ = 94 and PSQ = 32. Find SQP", 
    ["62", "58", "47", "32"], 
    "58",
    `<img src="/Images/question8.jpg" alt="">`
)

const question9 = new Question(
    '9',
    "AB is a diameter of the circle shown in the diagram.If ABD = 62 and DEB = 40, find ADE", 
    ["10", "12", "20", "22"], 
    "12",
    `<img src="/Images/question9.jpg" alt="">`
)

const question10 = new Question(
    '10',
    "C is the center of the circle shown in the diagram and BAE = 41, Find BCE and BDE", 
    ["41 and 49", "82 and 41", "41 and 139", "82 and 139"], 
    "82 and 139",
    `<img src="/Images/question10.jpg" alt="">`
)

const question11 = new Question(
    '11',
    "The probability that a sum of 10 will appear in two tosses of a fair die is", 
    ["5/18", "1/6", "5/36", "1/12"], 
    "1/12"
)

const question12 = new Question(
    '12',
    "Two fair die are thrown together. The probrability that the sum of the outcomes is atleast 10 is", 
    ["5/36", "1/4", "1/6", "1/12"], 
    "1/6"
)

const question13 = new Question(
    '13',
    "Two numbers are drawn randomly from the four numbers 1, 3, 5 and 8. The probability that the sum of the two is not odd is", 
    ["1/4", "1/3", "1/2", "2/3"], 
    "1/2"
)

const question14 = new Question(
    '14',
    "The probability of an event X is 2/3 and that of another event Y is 1/4. id the probability of both X and Y is 1/6 the probability of neither X nor Y is", 
    ["1", "11/12", "3/4", "1/3"], 
    "3/4"
)

const question15 = new Question(
    '15',
    "P is a probability function of an exhaustive set S = {w, x, y, z}. If P(x) = 1/4, P(y)= 1/3, P(z) = 1/6, then P(w) is", 
    ["1/12", "1/72", "1/4", "3/4"], 
    "1/4"
)

const question16 = new Question(
    '16',
    "Two fair coins are tossed , The probrability of getting atleast one tail is ", 
    ["3/4", "2/3", "1/2", "1/4"], 
    "3/4"
)

const question17 = new Question(
    '17',
    "In how many different ways can the letters of the word GEOLOGY be arranged in order?", 
    ["720", "1,260", "1,520", "5,040"], 
    "1,260"
)
const question18 = new Question(
    '18',
    "How many different three-digit numbers can be formed using the integers 1 to 6 if no integer occurs twice in a number", 
    ["20", "60", "120", " 240"], 
    "120"
)
const question19 = new Question(
    '19',
    "Three guests X, Y and Z arrive in that order for a dinner party. If guests are served randomly, the probability that the three guests will be served in the sequence of their arrival is", 
    ["1/6", "5m", "6m", "10m"], 
    "6m"
)
const question20 = new Question(
    '20',
    "The inside portion of part of a hollow metal sphere of diameter 20cm is polished.The portion will therefore form a", 
    ["concave mirror of focal length 5cm", "concave mirror of focal length 10cm", "convex mirror of focal length 5cm", "convex mirror of focal length 20cm"], 
    "concave mirror of focal length 5cm"
)


const QuestionBank = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20]

class QuizApp{
    score = 0
    constructor(){
        this.questions =  QuestionBank;
        this.questionIndex = 0
        this.questionLength = QuestionBank.length
    }
    display(){
        number.textContent=app.numberDisplay()
        question.textContent=app.questionDisplay()
        optA.textContent=app.optionADisplay()
        optB.textContent=app.optionBDisplay()
        optC.textContent=app.optionCDisplay()
        optD.textContent=app.optionDDisplay()
        image.innerHTML = app.imageDisplay()
    }
    increaseIndex(){
        this.questionIndex++
        this.display()
        return this.questionIndex
    }
    decreaseIndex(){
        this.questionIndex--
        this.display()
        return this.questionIndex
    }
    increaseScore(){
        this.score++
        return this.score
    }
    presentScore(){
        return this.score
    }
    decreaseScore(){
        this.score--
        return this.score
    }
    scoreCheck(){
       
    }
    end(){
        if((this.questionIndex + 1)=== this.questionLength){  
            this.questionIndex = 0
        }
    }
    numberDisplay(){
        return this.questions[this.questionIndex - 1].number
    }
    questionDisplay(){
        return this.questions[this.questionIndex - 1].question
    }
    optionADisplay(){
        return this.questions[this.questionIndex - 1].options[0]
    }
    optionBDisplay(){
        return this.questions[this.questionIndex - 1].options[1]
    }
    optionCDisplay(){
        return this.questions[this.questionIndex - 1].options[2]
    }
    optionDDisplay(){
        return this.questions[this.questionIndex - 1].options[3]
    }
    AnswerCheck(){
        return this.questions[this.questionIndex - 1].answer
    }
    imageDisplay(){
        return this.questions[this.questionIndex -1].image
    }
}

const app = new QuizApp()
const answer = function(){
    selector.forEach((selection)=>{
        if(selection.checked === true){
            optionParent = selection.parentElement
            choice = optionParent.querySelector('.opt')
            // if (choice.textContent === app.AnswerCheck()){
            //     console.log(app.increaseScore())
            // }
            console.log(choice)
            
        }
        selection.checked = false
    })
}
app.increaseIndex()
window.onload = function(){
    nextButton.textContent = "Next"
    answer()
}
next.onclick = function(){
    selector.forEach((selection)=>{
        if(selection.checked === true){
            optionParent = selection.parentElement
            choice = optionParent.querySelector('.opt')
            if (choice.textContent === app.AnswerCheck()){
                console.log(app.increaseScore())
            }
            console.log(choice)
        }
    })
    setTimeout(() => {
        selector.forEach((selection)=>{
            selection.checked = false
        })
        if (nextButton.textContent === "Next"){
            app.increaseIndex()
            if (number.textContent === "20"){
                nextButton.textContent="Submit"
            }
          
        }
        else{
            mainBoard.classList.remove('hide')
            console.log(`You scored ${app.presentScore()}`)
            percent.textContent = (app.presentScore() / 20) * 100
            scoreValue.textContent = app.presentScore()
        }
    }, 500);
    
}
previousButton.onclick = function(){
    if (number.textContent==="30"){
        nextButton.textContent="Next"
    }
    app.decreaseIndex()
    console.log(app.decreaseScore())
    answer()
    selector.forEach((selection)=>{
    selection.checked = false
   })
}
start.onclick = function(){
    intro.classList.add('hide')
    setInterval(() => {
        
        if(Number(sec.textContent) === 0 ){
            min.textContent--
            sec.textContent = 59
        }
        if(Number(min.textContent) > -1 ){
            sec.textContent--
            if(sec.textContent.length < 2){
                sec.textContent = `0${sec.textContent}`
            }
            if(min.textContent.length < 2){
                min.textContent = `0${min.textContent}`
            }
        }
        else{
            timer.innerHTML = "Time Up"
        }
        if(timer.innerHTML === "Time Up"){
            nextButton.textContent="Submit"
            previousButton.remove()
            sec.textContent = 0
            min.textContent = 0
        }
        else{
            
        }
    }, 1000);
}