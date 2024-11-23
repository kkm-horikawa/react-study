type ResultProps = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};
const Result = (props: ResultProps) => {
  return (
    <>
      {props.results.country && <div>{props.results.country}</div>}
      {props.results.cityName && <div>{props.results.cityName}</div>}
      {props.results.temperature && <div>{props.results.temperature}度</div>}
      {props.results.conditionText && <div>{props.results.conditionText}</div>}
      {props.results.icon && (
        <img src={props.results.icon} alt="icon" width="100" height="100" />
      )}
    </>
  );
};
export default Result;
