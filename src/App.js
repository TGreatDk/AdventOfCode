import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function App() {
  const [text, setText] = useState("Happy holidays!");
  let day1 = (e) => {
    var file = e.target.files[0]
    if (!file)
      return
    var reader = new FileReader()
    reader.onload = (e) => {
      var contents = e.target.result

      var elements = contents.split('\n')
      var numbers = elements.map((element) => Number.parseInt(element))
      debugger;
      var count = 0
      var count2 = 0
      for (let index = 1; index < numbers.length; index++) {
        const element = numbers[index];
        const oldElement = numbers[index - 1]

        if (element > oldElement)
          count++
      }
      for (let index = 3; index < numbers.length; index++) {
        const a = numbers[index - 3];
        const b = numbers[index - 2];
        const c = numbers[index - 1];
        const d = numbers[index];

        var abc = a + b + c;
        var bcd = b + c + d;
        console.log(`ABC BCD ${abc} ${bcd} ${abc < bcd}`)
        if (abc < bcd)
          count2++

      }
      setText(`Part1: ${count}\nPart2:${count2}`)
    }
    reader.readAsText(file)
  }

  let day2 = (e) => {
    var file = e.target.files[0]
    if (!file)
      return
    var reader = new FileReader()
    reader.onload = (e) => {
      var contents = e.target.result
      var elements = contents.split('\n')

      var horiz = 0, depth = 0
      var count=0, count2 = 0
      
      var aim = 0;
      var horiz2=0,depth2=0

      elements.forEach(element => {
        var splitThing = element.split(' ')
        var type = splitThing[0].trim()
        var thing = Number.parseInt(splitThing[1].trim())

        if (type == 'forward')
        {
          horiz += thing
          horiz2 +=thing
          depth2 +=aim*thing
        }
        else if (type == 'down')
        {
          depth += thing
          aim += thing
        }
        else 
        {
          depth -= thing
          aim-=thing
        }


      });
      count=horiz*depth
      count2 = horiz2*depth2
      setText(`Part1: ${count}\nPart2:${count2}`)
    }
    reader.readAsText(file)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          Day1 <input type="file" onChange={day1} />
        </div>
        <div>
          Day2 <input type="file" onChange={day2} />
        </div>
        <div>
          Result<br />
          <textarea readOnly={true} style={{ width: '90vw', height: '200px' }} value={text}></textarea>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
