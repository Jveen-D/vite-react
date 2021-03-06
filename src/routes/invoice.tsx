import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";
import { useEffect } from "react";
export default function Invoice() {
  let navigate = useNavigate();
  let location = useLocation();
  let params: any = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  useEffect(() => {
    console.log("π ~ file: ζ§θ‘ει¨δΊδ»Ά");
    return () => {
      console.log("π ~ file: ιζ―η»δ»Ά");
    };
  }, []);
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
