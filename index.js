var katzDeliLine = [];

function takeANumber(currentLine, ticketNumber) {
  currentLine.push(ticketNumber);
  let place = currentLine.length;
  let ticketNumber = 
  console.log (place);
  return `Welcome, ${ticketNumber}. You are number ${place} in line.`;
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let name = katzDeliLine[0];
    katzDeliLine.shift();

    return `Currently serving ${name}.`
}
  else{
    return "There is nobody waiting to be served!"
}
}

function currentLine(line) {
  let i = 0;
  while (i < line.length) {
    line.push(` `+[i+1]+`. `  + line[i]) 
    i++;
  }
  if (line.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}