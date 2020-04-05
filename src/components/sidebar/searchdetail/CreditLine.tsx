import React from "react";
/***
 * @param label credit line title
 * @param value credit line value
 */
const CreditLine = ({ label, value }: any) => (
  <div className="credit_summary_item">
    <h4 className="inline">{label}:</h4>
    {value}
  </div>
);

export default CreditLine;
