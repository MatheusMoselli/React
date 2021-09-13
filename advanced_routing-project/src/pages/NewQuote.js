import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = (props) => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };

  useEffect(() => {
    if (status === "completed") history.push("/");
  }, [status, history]);

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
