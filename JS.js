function getQuestionsIndex(){
  let questionIndexArray = [];
    for(let i = 0; i < 6; i++){
      questionIndexArray.push(Math.floor(Math.random()*5));
    }
  return questionIndexArray
}

function shuffle(a) {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

const trivia = [{
    category: "Geography",
    color: "blue",
    questions: [{
      question: "What is the capital of Ecuador?",
      options: ["Quito", "Lima", "Bogota", "La Paz"],
      answer: "Quito"
    }, {
      question: "Which is the largest US State by Area?",
      options: ["Alaska", "Montana", "Texas", "California"],
      answer: "Alaska"
    }, {
      question: "What is the longest river in Asia?",
      options: ["Yangtze", "Yellow", "Mekong", "Lena"],
      answer: "Yangtze"
    }, {
      question: "Latvia shares a border with Russia, Estonia, Lithuania and which other country?",
      options: ["Belarus", "Ukraine", "Poland", "Germany"],
      answer: "Belarus"
    }, {
      question: "In which Ocean are the Maldives located?",
      options: ["Indian", "Atlantic", "Arctic", "Pacific"],
      answer: "Indian"
    }]
  },

  {
    category: "History",
    color: "yellow",
    questions: [{
      question: "Which empire did the Goths invade in the 5th century AD?",
      options: ["Roman", "Ottoman", "Greek", "Persian"],
      answer: "Roman"
    }, {
      question: "Which King of England was executed in 1649?",
      options: ["Charles I", "Charles II", "Henry VIII", "James I"],
      answer: "Charles I"
    }, {
      question: "Which is the only ancient wonder to still exist?",
      options: ["Hanging Gardens of Babylon", "Statue of Zeus", "Great Pyramid of Giza", "Colossus of Rhodes"],
      answer: "Great Pyramid of Giza"
    }, {
      question: "Which country assisted the United States in the American Revolutionary War?",
      options: ["France", "Germany", "Netherlands", "Italy"],
      answer: "France"
    }, {
      question: "Saladin was a Muslim leader during which conflict?",
      options: ["Crusades", "War of the Roses", "Crimean War", "World War I"],
      answer: "Crusades"
    }]
  },

  {
    category: "Arts & Literature",
    color: "brown",
    questions: [{
      question: "When was George Orwell's 1984 first published?",
      options: ["1949", "1935", "1957", "1984"],
      answer: "1949"
    }, {
      question: "Shylock is a charcater in which Shakespeare play?",
      options: ["Hamlet", "Othello", "Merchant of Venice", "Macbeth"],
      answer: "Merchant of Venice"
    }, {
      question: "Charles Dicken's 'A Tale of Two Cities' was located in London and?",
      options: ["Paris", "New York", "Amsterdam", "Berlin"],
      answer: "Paris"
    }, {
      question: "Who painted 'The Birth of Venus'?",
      options: ["Botticelli", "Michelangelo", "Da Vinci", "Caravaggio"],
      answer: "Botticelli"
    }, {
      question: "The artist Rembrandt was born in which country?",
      options: ["Germany", "Austria", "France", "Netherlands"],
      answer: "Netherlands"
    }, ]
  },

  {
    category: "Sport",
    color: "orange",
    questions: [{
      question: "Which cricket player holds the record for career runs scored?",
      options: ["Brian Lara", "Ricky Ponting", "Jacques Kallis", "Sachin Tendulkar"],
      answer: "Sachin Tendulkar"
    }, {
      question: "Which team was won the most Super Bowls?",
      options: ["Pittsburgh Steelers", "New England Patriots", "Dallas Cowboys", "Denver Broncos"],
      answer: "Pittsburgh Steelers"
    }, {
      question: "Who is the all time Premier League top goalscorer?",
      options: ["Alan Shearer", "Thierry Henry", "Wayne Rooney", "Sergio Aguero"],
      answer: "Alan Shearer"
    }, {
      question: "After the United States, which country has won the most Olympic medals?",
      options: ["Soviet Union", "Great Britain", "China", "France"],
      answer: "Soviet Union"
    }, {
      question: "Which team has won the Champions League the most times?",
      options: ["Barcelona", "Liverpool", "AC Milan", "Real Madrid"],
      answer: "Real Madrid"
    }, ]
  },

  {
    category: "Science & Nature",
    color: "green",
    questions: [{
      question: "Sn is the chemical symbol for which element?",
      options: ["Sulphur", "Silicon", "Tin", "Tungsten"],
      answer: "Tin"
    }, {
      question: "The nearest star to the Sun is?",
      options: ["Polaris", "Vega", "Proxima Centauri", "Sirius"],
      answer: "Proxima Centauri"
    }, {
      question: "Which organ produces insulin?",
      options: ["Liver", "Pancreas", "Thyroid", "Spleen"],
      answer: "Pancreas"
    }, {
      question: "Which is the only mammal that can fly?",
      options: ["Penguin", "Bat", "Emu", "Platypus"],
      answer: "Bat"
    }, {
      question: "What type of rock is Basalt?",
      options: ["Igneous", "Metamorphic", "Sedimentary", "Soft"],
      answer: "Igneous"
    }, ]
  },

  {
    category: "Entertainment",
    color: "pink",
    questions: [{
      question: "Which of these films does not feature James Bond?",
      options: ["The Spy Who Loved Me", "A View to a Kill", "Where Eagles Dare", "The Living Daylights"],
      answer: "Where Eagles Dare"
    }, {
      question: "Which actor as won three leading actor oscars?",
      options: ["Al Pacino", "Robert De Niro", "Daniel Day-Lewis", "Tom Hanks"],
      answer: "Daniel Day-Lewis"
    }, {
      question: "Jesse Pinkman is a character in which TV series?",
      options: ["The Sopranos", "Breaking Bad", "The Wire", "The Walking Dead"],
      answer: "Breaking Bad"
    }, {
      question: "Which of these is NOT a place in 'Game of Thrones'?",
      options: ["Winterfell", "Castle Black", "Gondor", "King's Landing"],
      answer: "Gondor"
    }, {
      question: "I Dreamed a Dream is a song from which musical?",
      options: ["South Pacific", "The Phantom of the Opera", "Les Misérables", "Cats"],
      answer: "Les Misérables"
    }, ]
  }
];


Result.propTypes = {
  correct: React.PropTypes.array.isRequired,
  message: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  gameOver: React.PropTypes.bool.isRequired,
  onAgainClick: React.PropTypes.func.isRequired,
};

function Result(props) {
  let cheeses = []
  props.correct.forEach((color)=>{
    cheeses.push(<div className={"piece " + color}></div>);            
  })
  let messageStyle = "";
  if(props.message === 'Correct'){
    messageStyle = "correct"
  }
  else if(props.message === 'Incorrect'){
    messageStyle = "incorrect"
  }
  else {
    messageStyle = "game-over";
  }
  return (
    <div className="modal-container">
      <div className={"modal "  + messageStyle}>
        <h2 className="message">{props.message}</h2>
        <div className="play-again" onClick={props.onAgainClick}>
          {props.gameOver ? 'Play Again' : '' }
        </div>
        <div className="cheese-container">  
          <div className={
            props.correct.length === 6 && props.gameOver
            ? "cheese spin": "cheese"}>
            {cheeses}
          </div>
        </div> 
      </div>
    </div>
  );
}

let Game = React.createClass({
  propTypes: {
    trivia: React.PropTypes.array.isRequired,
    gameOver: React.PropTypes.bool.isRequired,
    questionIndex: React.PropTypes.array.isRequired,
    onAnswer: React.PropTypes.func.isRequired,
    category: React.PropTypes.number.isRequired,
    correct: React.PropTypes.array.isRequired,
    currentQuestion: React.PropTypes.number.isRequired,
    onPlayAgain: React.PropTypes.func.isRequired,
    showModal: React.PropTypes.bool.isRequired,
    message: React.PropTypes.string.isRequired
  },
  render: function() {
    let category = this.props.category;
    let currentQuestion = this.props.questionIndex[this.props.currentQuestion];
    if(!this.props.showModal){
    shuffle(trivia[category].questions[currentQuestion].options);
    }
    let result;
    if(this.props.showModal){
      result = <Result 
                 color={trivia[category].color} 
                 correct={this.props.correct}
                 message={this.props.message}
                 gameOver={this.props.gameOver}
                 onAgainClick={this.props.onPlayAgain}
               />
    }
    return (   
      <div className="game-container">
        <h1>Trivia Quiz</h1>
        <div className="questions-container">
          <div className={"category "+ trivia[category].color}>{trivia[category].category}</div>
          <div className="question">{trivia[category].questions[currentQuestion].question}</div>
          <ul className="options" onClick={(e)=>this.props.onAnswer(e, category, currentQuestion)}>
            <li>{trivia[category].questions[currentQuestion].options[0]}</li>
            <li>{trivia[category].questions[currentQuestion].options[1]}</li>
            <li>{trivia[category].questions[currentQuestion].options[2]}</li>
            <li>{trivia[category].questions[currentQuestion].options[3]}</li>
          </ul>
        </div>
        {result}
      </div>
    );
  }
});
let App = React.createClass({
  propTypes: {
    trivia: React.PropTypes.array.isRequired,
  },
  getInitialState: function() {
    return {
      questionIndex: getQuestionsIndex(), 
      currentQuestion: 0, 
      gameOver: false, 
      category: 0, 
      correct: [], 
      message: "", 
      showModal: false 
    };
  },
  onAnswer: function(e, category, currentQuestion){
    return (
      e.target.innerText === trivia[category].questions[currentQuestion].answer ? this.onCorrect() : this.onWrong()
    )
  },
  updateCheese: function(){
    (this.state.correct).push(trivia[this.state.category].color);
    this.state.message = "Correct"
    this.state.showModal = true;
    this.setState(this.state);
  },
  updateBoard: function(){
    setTimeout(()=>{
      this.state.category += 1;
      this.state.currentQuestion += 1;
      this.state.showModal = false;
      this.setState(this.state);
    },2000)
  },
  gameEnd: function(){
    setTimeout(()=>{
      this.state.message = "You Scored " + this.state.correct.length;
      this.state.gameOver= true;
      this.setState(this.state);
    },2000)
  },
  onCorrect: function() {
    if(this.state.category < 5){
      this.updateCheese();
      this.updateBoard();
    }
    else{
      this.updateCheese();
      this.gameEnd();     
    }
  },
  onWrong: function() {
    if(this.state.category < 5){
      this.state.message = "Incorrect";
      this.state.showModal = true;
      this.setState(this.state);
      this.updateBoard();
    }
    else{
      this.state.message = "Incorrect";
      this.state.showModal = true;
      this.setState(this.state);
      this.gameEnd();
    }
  },
  onGameEnd: function(){
    this.state.questionIndex = getQuestionsIndex();
    this.state.currentQuestion = 0;
    this.state.gameOver = false;
    this.state.category = 0;
    this.state.correct = [];
    this.state.message = "";
    this.state.showModal = false;
    this.setState(this.state);
  },
  render: function() {
    return (  
      <div className="container">     
        <Game 
          trivia={trivia} 
          questionIndex={this.state.questionIndex} 
          category={this.state.category}
          currentQuestion={this.state.currentQuestion}
          correct={this.state.correct}
          message={this.state.message}
          gameOver={this.state.gameOver}
          onAnswer={this.onAnswer}
          showModal={this.state.showModal}
          onPlayAgain={this.onGameEnd}
        />
      </div>
    );
  }
});

ReactDOM.render(<App trivia={trivia}/>, document.getElementById('app'));
