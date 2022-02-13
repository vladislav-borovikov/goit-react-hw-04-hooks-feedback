import {useState} from 'react';
import Statistics from './Statistics'
import FeedbackOptions from './FeedbackOptions'
import Section from './section/Section'

const Feedback = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);


    const assessmentСhoice = (e) => {

        switch (e.target.name) {
            case "good":
              setGood(good + 1);
              break;
            case "neutral":
              setNeutral(neutral + 1);
              break;
            case "bad":
              setBad(bad + 1);
              break;
            default:
              return;
          }
        
    };


    const countTotalFeedback = () => {
        const totalFeedback = good + neutral + bad
        return totalFeedback

    };

    const countPositiveFeedbackPercentage = () => {
        const PositiveFeedbackProcent = (good + neutral) / countTotalFeedback() * 100
        return Math.floor(PositiveFeedbackProcent)
    };


    
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={assessmentСhoice} />
                </Section>

                <Section title="Statistics">
                    {countTotalFeedback() === 0 ?
                        <h3>No feedback given</h3> :
                        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
                    }
                </Section>
            </>
        )
    
}

export default Feedback