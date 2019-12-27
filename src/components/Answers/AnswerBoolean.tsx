import React from "react";

type AllProps = {
  handleAnswerClick: (answer: string) => void;
}
// Note: this can be done many ways Formik, react-bootstrap forms, etc
const AnswerBoolean: React.FC<AllProps> = (props: AllProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleAnswerClick(event.target.value);
  };
  return (
  <div>
    <div className="custom-control custom-radio custom-control-inline">
      <input
        type="radio"
        id="answerTrue"
        name="answer"
        className="custom-control-input"
        value="True"
        autoComplete="off"
        onChange={handleInputChange} />
      <label className="custom-control-label" htmlFor="answerTrue">True</label>
    </div>
    <div className="custom-control custom-radio custom-control-inline">
      <input
        type="radio"
        id="answerFalse"
        name="answer"
        className="custom-control-input"
        value="False"
        autoComplete="off"
        onChange={handleInputChange}/>
      <label className="custom-control-label" htmlFor="answerFalse">False</label>
    </div>
  </div>
  )};

export default AnswerBoolean;
