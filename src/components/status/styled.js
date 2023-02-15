import styled from "styled-components";

export const StatusBaseTable = styled.table`
  width: 100%;
  margin-top: 10px;

  border-top: 1px solid #ccc;
  tfoot {
    border-bottom: 2px solid #fff;
  }

  td {
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
    vertical-align: baseline;
  }
`

;

export const NameTd = styled.td`
text-align: end;
`
  
;

export const StatsTd = styled.td`
text-align: center;
  font-weight: bold;

`
  
;
export const ProgressBarTd = styled.td`

width: 60%;
  text-align: center;
`
 
;
export const ProgressBar = styled.div`

  /* max-width: 80%; */
  height: 5px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  :before {
    content: "";
    border: 0.5px solid #ccc;
    height: 10px;
    border-radius: 5px;
    width: ${(props) => props.baseState * 0.7}%;
    background-color: hsl(calc(${(props) => props.baseState} * 0.8), 80%, 50%);
  }

`

;