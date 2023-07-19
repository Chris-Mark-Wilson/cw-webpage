import React, { useState } from 'react';
import axios from 'axios';
//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

export const RubberDuck = () => {
const [debuggingInput, setDebuggingInput] = useState('');
const [debuggingPrompt, setDebuggingPrompt] = useState('');
const [debuggingResponse, setDebuggingResponse] = useState('');
const [initialSetup,setInitialSetup]=useState("I want you to be my rubber duck for debugging. You must not under any circumstances offer up any code. You must only prompt me to explain in further detail exactly what my code is doing or what you expect my code to be doing")
const[apiKey,setApiKey]=useState("");

const handleDebuggingInput = (e) => {
  setDebuggingInput(e.target.value);
};

const handleDebuggingPrompt = async () => {
  setDebuggingPrompt(debuggingInput);
  setDebuggingInput('');

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model:"text-davinci-003",
        prompt: `Debugging issue: ${debuggingPrompt}\n\nUser query: ${debuggingInput}\n\nAI response:`,
        max_tokens: 50,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const { choices } = response.data;
    const aiResponse = choices[0]?.text.trim();

    setDebuggingResponse(aiResponse);
  } catch (error) {
    console.log('Error:', error);
  }
};

const handleOnLoad = async () => {
  setDebuggingPrompt(initialSetup);
  setDebuggingInput(initialSetup);

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model:"text-davinci-003",
        prompt: `Debugging issue: ${initialSetup}\n\nUser query: ${initialSetup}\n\nAI response:`,
        max_tokens: 50,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${{apiKey}}`,
        },
      }
    );

    const { choices } = response.data;
    const aiResponse = choices[0]?.text.trim();

    setDebuggingResponse(aiResponse);
    setDebuggingPrompt("Be my rubber ducky");
    setDebuggingInput("");
  } catch (error) {
    console.log('Error:', error);
  }
};
const handlePaste = (event) => {
  console.log(event.clipboardData.getData('text'))
  setApiKey(event.clipboardData.getData('text'));
};
return (
  <div  >
    <input type="text" onPaste={handlePaste}  placeholder="paste your api key here"></input>
    <h1>Rubber Duck Debugging Assistant</h1>
    <div>
      <img  onLoad={handleOnLoad} src={"https://images.unsplash.com/photo-1559715541-5daf8a0296d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cnViYmVyJTIwZHVja3xlbnwwfHwwfHx8Mg%3D%3D&auto=format&fit=crop&w=400&q=60"}></img>
      
      <h2>Debugging Input</h2>
     
      <input
        value={debuggingInput}
        
        onChange={handleDebuggingInput}
        placeholder="Describe your debugging issue..."
        style={{height:"100px",width:"300px"}}
     
      />
      <button type = "submit" onClick={handleDebuggingPrompt}>Submit</button>
     
    </div>
    
    <div>
      <h2>Debugging Prompt</h2>
      <div className="request-response">
      {debuggingPrompt}
      </div>
    </div>
    <div>
      <h2>Debugging Response</h2>
      <div className="request-response">
     {debuggingResponse}
      </div>
    </div>
  </div>
);
};


