// Celcius to Farenheit

function celciusToFarenheit(cel) {
  return (9 * cel) / 5 + 32;
}

// Farenheit to Celcius

function farenheitToCelcius(far) {
  return (5 * far - 160) / 9;
}

// CGPA Grading

function cgpa(num) {
  if (num >= 80 && num <= 100) {
    return `Your number is ${num} & You got 4.00 CGPA & Examiner Feedback is Outstanding`;
  } else if (num >= 75 && num < 80) {
    return `Your number is ${num} & You got 3.75 CGPA & Examiner Feedback is Excellent`;
  } else if (num >= 70 && num < 75) {
    return `Your number is ${num} & You got 3.50 CGPA  & Examiner Feedback is Very Good`;
  } else if (num >= 65 && num < 70) {
    return `Your number is ${num} & You got 3.25 CGPA  & Examiner Feedback is Good`;
  } else if (num >= 60 && num < 65) {
    return `Your number is ${num} & You got 3.00 CGPA  & Examiner Feedback is Satisfactory`;
  } else if (num >= 55 && num < 60) {
    return `Your number is ${num} & You got 2.75 CGPA  & Examiner Feedback is Below Satisfactory`;
  } else if (num >= 50 && num < 55) {
    return `Your number is ${num} & You got 2.50 CGPA  & Examiner Feedback is Average`;
  } else if (num >= 45 && num < 50) {
    return `Your number is ${num} & You got 2.25 CGPA  & Examiner Feedback is Below Average`;
  } else if (num >= 40 && num < 45) {
    return `Your number is ${num} & You got 2.00 CGPA  & Examiner Feedback is Pass`;
  } else if (num < 40 && num >= 0) {
    return `Your number is ${num} & You got 0.00 CGPA  & Examiner Feedback is Fail`;
  } else {
    return `You put an invalid Number`;
  }
}

// Interest

function interest(principle, rate, time) {
  return (principle * rate * time) / 100;
}

